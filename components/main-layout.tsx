'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import {
  LayoutDashboard,
  GitBranch,
  Phone,
  BarChart3,
  Bell,
  Settings,
  Search,
  Moon,
  Sun,
  User,
  HelpCircle,
  LogOut,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect, ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: GitBranch, label: 'Pipeline', path: '/pipeline' },
    { icon: Phone, label: 'Call History', path: '/call-history' },
    { icon: BarChart3, label: 'Reports', path: '/reports' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <div className="h-screen flex flex-col bg-background">
      <header className="h-16 flex items-center px-4 sm:px-6 gap-4 sm:gap-6 sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors text-foreground"
        >
          {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Logo */}
        <div
          onClick={() => router.push('/dashboard')}
          className="cursor-pointer select-none group flex-shrink-0"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[-0.04em] text-foreground">
            Catalyst
          </h1>
          <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.40em] font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
            AI Platform
          </p>
        </div>

        {/* Search Bar - Hidden on small mobile */}
        <div className="hidden sm:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 bg-accent rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-accent text-muted-foreground hover:text-foreground rounded-lg transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={() => router.push('/notifications')}
            className="p-2 hover:bg-accent text-muted-foreground hover:text-foreground rounded-lg transition-colors relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-card" />
          </button>

          <div className="h-6 w-px bg-border hidden sm:block" />

          {/* Profile Menu */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2 sm:gap-3 p-1.5 pr-2 sm:pr-3 hover:bg-accent/60 rounded-lg transition-all border border-transparent hover:border-border group"
              aria-label="Profile menu"
            >
              <div className="relative">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
                  JD
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-card" />
              </div>

              <div className="hidden sm:flex flex-col text-left">
                <span className="text-sm font-semibold leading-none text-foreground">John Doe</span>
                <span className="text-xs text-muted-foreground font-medium mt-0.5">Admin Account</span>
              </div>

              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 hidden sm:block ${
                  showProfileMenu ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showProfileMenu && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowProfileMenu(false)} />

                <div className="absolute right-0 mt-2 w-56 sm:w-64 bg-card border border-border rounded-xl shadow-lg py-2 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2.5 border-b border-border bg-accent/30 mb-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Signed in as</p>
                    <p className="text-sm font-medium text-foreground truncate mt-0.5">john.doe@catalyst.ai</p>
                  </div>

                  <button
                    onClick={() => {
                      router.push('/profile');
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-accent flex items-center gap-3 text-sm text-foreground/90 transition-colors"
                  >
                    <User className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    My Profile
                  </button>
                  <button
                    onClick={() => {
                      router.push('/settings');
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-accent flex items-center gap-3 text-sm text-foreground/90 transition-colors"
                  >
                    <Settings className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    Settings
                  </button>
                  <button
                    onClick={() => {
                      router.push('/notifications');
                      setShowProfileMenu(false);
                    }}
                    className="w-full px-4 py-2.5 text-left hover:bg-accent flex items-center gap-3 text-sm text-foreground/90 transition-colors"
                  >
                    <Bell className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    Notifications
                  </button>
                  <button className="w-full px-4 py-2.5 text-left hover:bg-accent flex items-center gap-3 text-sm text-foreground/90 transition-colors">
                    <HelpCircle className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    Help Center
                  </button>

                  <div className="border-t border-border my-1.5" />

                  <button
                    onClick={() => router.push('/')}
                    className="w-full px-4 py-2.5 text-left hover:bg-destructive/10 flex items-center gap-3 text-sm font-medium text-destructive transition-colors"
                  >
                    <LogOut className="w-4 h-4 flex-shrink-0" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Mobile Sidebar Overlay */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setShowMobileMenu(false)} />
        )}

        {/* Mobile Sidebar */}
        {showMobileMenu && (
          <aside className="fixed left-0 top-16 bottom-0 w-64 border-r border-border bg-sidebar overflow-y-auto z-40 md:hidden animate-in slide-in-from-left duration-200">
            <nav className="p-4 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      router.push(item.path);
                      setShowMobileMenu(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      active
                        ? 'bg-primary text-primary-foreground font-medium'
                        : 'text-sidebar-foreground hover:bg-sidebar-accent'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </aside>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden md:flex md:w-64 border-r border-border bg-sidebar overflow-y-auto flex-col">
          <nav className="p-4 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);

              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    active
                      ? 'bg-primary text-primary-foreground font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
