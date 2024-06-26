import React from 'react';
import { Instagram } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 via-pink-300 to-red-300">
      <div className="container mx-auto py-8">
        <header className="text-center mb-8">
          <div className="inline-block bg-white rounded-full p-3 shadow-lg">
            <Instagram size={48} className="text-pink-400" />
          </div>
          <h1 className="text-4xl font-bold mt-4 text-white">AI Insta Post Generator</h1>
        </header>
        <main className="bg-white rounded-lg shadow-xl p-8">
          {children}
        </main>
      </div>
    </div>
  );
}