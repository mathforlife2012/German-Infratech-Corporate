
import React, { useRef, useEffect } from 'react';

interface EditableProps {
  id: string;
  children?: React.ReactNode;
  isDesignMode?: boolean;
  registry: Record<string, any>;
  className?: string;
  tag?: string;
}

const EditableComponent: React.FC<EditableProps> = ({ 
  id, children, isDesignMode, registry, className = "", tag = "span" 
}) => {
  const data = registry[id];
  const Tag = tag as any;
  const elementRef = useRef<HTMLElement>(null);

  // Sync external changes (like from the design toolbar) when not focused
  useEffect(() => {
    if (elementRef.current && data?.html !== undefined) {
      if (document.activeElement !== elementRef.current) {
        if (elementRef.current.innerHTML !== data.html) {
          elementRef.current.innerHTML = data.html;
        }
      }
    }
  }, [data?.html, id]);

  const props = {
    ref: elementRef,
    'data-gic-id': id,
    contentEditable: isDesignMode ? 'true' : 'false',
    suppressContentEditableWarning: true,
    className: `outline-none transition-all ${className} ${isDesignMode ? 'hover:ring-1 hover:ring-teal-500/50 hover:ring-dashed cursor-text focus:ring-1 focus:ring-teal-400' : ''}`,
    style: data?.styles || {},
  };

  // If we have HTML from registry, render it. 
  // During active typing, we rely on React.memo to prevent this from overwriting the DOM.
  if (data?.html !== undefined) {
    return (
      <Tag 
        {...props} 
        dangerouslySetInnerHTML={{ __html: data.html }} 
      />
    );
  }

  return <Tag {...props}>{children}</Tag>;
};

// Custom comparison to prevent cursor jumps:
// If the element is currently focused, we ONLY re-render if styles or mode changed.
// We skip re-rendering if just the HTML content changed, because the browser
// is already handling that via the native contentEditable behavior.
export const Editable = React.memo(EditableComponent, (prev, next) => {
  const isFocused = document.activeElement?.getAttribute('data-gic-id') === next.id;
  
  const stylesChanged = JSON.stringify(prev.registry[next.id]?.styles) !== JSON.stringify(next.registry[next.id]?.styles);
  const modeChanged = prev.isDesignMode !== next.isDesignMode;
  const idChanged = prev.id !== next.id;

  if (isFocused) {
    // While typing, only re-render if the design mode toggled or styles were externally updated
    return !stylesChanged && !modeChanged && !idChanged;
  }

  // Otherwise, standard check: re-render if anything relevant changed
  const htmlChanged = prev.registry[next.id]?.html !== next.registry[next.id]?.html;
  return !htmlChanged && !stylesChanged && !modeChanged && !idChanged;
});

export default Editable;
