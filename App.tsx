import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Security from './pages/Security';
import Analytics from './pages/Analytics';
import TerminalPage from './pages/TerminalPage';
import Timeline from './pages/Timeline';
import Footer from './components/Footer';

export type Page = 'home' | 'specs' | 'analytics' | 'terminal' | 'timeline';

interface ElementState {
  html: string;
  styles: Record<string, string>;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  
  // Design mode is now permanently disabled to finalize the application
  const isDesignMode = false;
  
  const [registry] = useState<Record<string, ElementState>>(() => {
    const saved = localStorage.getItem('gic_design_registry');
    return saved ? JSON.parse(saved) : {};
  });

  const [imageRegistry] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('gic_image_registry');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    const props = { isDesignMode, registry, imageRegistry };
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} {...props} />;
      case 'specs': return <Security {...props} />;
      case 'analytics': return <Analytics {...props} />;
      case 'terminal': return <TerminalPage {...props} />;
      case 'timeline': return <Timeline {...props} />;
      default: return <Home onNavigate={setCurrentPage} {...props} />;
    }
  };

  return (
    <div className={`min-h-screen bg-transparent text-white selection:bg-teal-500/30 selection:text-white`}>
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
      />
      <main className="min-h-[calc(100vh-80px)]">
        {renderPage()}
      </main>
      <Footer registry={registry} />
    </div>
  );
};

export default App;