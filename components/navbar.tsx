'use client';

import { useRouter } from 'next/navigation';
import { Bell, Settings, LogOut } from 'lucide-react';

export function Navbar() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-border h-16 flex items-center justify-between px-6 shadow-sm">
      <div className="flex-1" />
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-accent rounded-lg transition-colors" title="Notifications">
          <Bell size={20} className="text-muted-foreground" />
        </button>
        
        <button 
          onClick={() => router.push('/settings')}
          className="p-2 hover:bg-accent rounded-lg transition-colors" 
          title="Settings"
        >
          <Settings size={20} className="text-muted-foreground" />
        </button>
        
        <button
          onClick={handleLogout}
          className="p-2 hover:bg-red-50 rounded-lg transition-colors"
          title="Logout"
        >
          <LogOut size={20} className="text-red-600" />
        </button>
      </div>
    </nav>
  );
}
