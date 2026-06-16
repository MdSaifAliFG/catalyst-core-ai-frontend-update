'use client';

import { useRouter, usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Workflow,
  Phone,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
    { label: 'Pipeline', icon: Workflow, href: '/pipeline' },
    { label: 'Call History', icon: Phone, href: '/call-history' },
    { label: 'Reports', icon: BarChart3, href: '/reports' },
    { label: 'Settings', icon: Settings, href: '/settings' },
  ];

  const isActive = (href: string) => pathname === href;

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <aside className="w-72 bg-white border-r border-border h-screen flex flex-col shadow-sm">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-2xl font-bold text-foreground">Catalyst</h1>
        <p className="text-xs text-muted-foreground mt-1">AI Platform</p>
      </div>

      {/* Profile */}
      <div className="px-6 py-5 border-b border-border bg-slate-50">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white font-semibold">
            JD
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">John Doe</p>
            <p className="text-xs text-slate-500">Admin Account</p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl bg-white border border-blue-100 px-3 py-2 text-xs text-blue-700">
          AI lead engagement workspace
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all text-left ${
                isActive(item.href)
                  ? 'bg-blue-600 text-white font-semibold shadow-sm ring-1 ring-blue-200'
                  : 'text-muted-foreground hover:bg-blue-50 hover:text-slate-900'
              }`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-all"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
