
export interface PerformanceMetric {
  timestamp: string;
  qubits: number;
  stability: number;
  throughput: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export enum Section {
  HERO = 'hero',
  SPECIFICATIONS = 'specifications',
  ANALYTICS = 'analytics',
  INTERFACE = 'interface'
}
