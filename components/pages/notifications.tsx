'use client';

import { Check, X, Phone, FileText, Upload, BarChart3 } from "lucide-react";
import { useState } from "react";

interface Notification {
  id: number;
  icon: any;
  text: string;
  time: string;
  read: boolean;
  category: "today" | "yesterday" | "earlier";
}

export function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, icon: Phone, text: "AI created follow-up for Rahul Sharma", time: "5 minutes ago", read: false, category: "today" },
    { id: 2, icon: Phone, text: "Call completed successfully with Priya Reddy", time: "1 hour ago", read: false, category: "today" },
    { id: 3, icon: Upload, text: "New lead file imported - 50 leads added", time: "2 hours ago", read: false, category: "today" },
    { id: 4, icon: BarChart3, text: "Weekly report generated and ready to download", time: "3 hours ago", read: true, category: "today" },
    { id: 5, icon: Phone, text: "AI campaign completed - 385 calls made", time: "Yesterday at 6:30 PM", read: true, category: "yesterday" },
    { id: 6, icon: FileText, text: "Call summary created for Amit Patel", time: "Yesterday at 4:15 PM", read: true, category: "yesterday" },
    { id: 7, icon: Upload, text: "CRM sync completed successfully", time: "Yesterday at 2:00 PM", read: true, category: "yesterday" },
    { id: 8, icon: Phone, text: "Follow-up reminder: Call Sneha Kumar today", time: "2 days ago", read: true, category: "earlier" },
    { id: 9, icon: BarChart3, text: "Monthly performance report available", time: "3 days ago", read: true, category: "earlier" },
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const groupedNotifications = {
    today: notifications.filter(n => n.category === "today"),
    yesterday: notifications.filter(n => n.category === "yesterday"),
    earlier: notifications.filter(n => n.category === "earlier"),
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Notifications</h1>
          <p className="text-muted-foreground mt-1">
            {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : "You're all caught up!"}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="px-4 py-2 border border-border rounded-xl hover:bg-accent transition-colors"
          >
            Mark all as read
          </button>
        )}
      </div>

      {notifications.length === 0 ? (
        <div className="bg-card border border-border rounded-2xl p-20 text-center">
          <Check className="w-16 h-16 mx-auto mb-4 text-green-500" />
          <h3 className="mb-2">No Notifications</h3>
          <p className="text-muted-foreground">You're all caught up.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Today */}
          {groupedNotifications.today.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Today</h3>
              <div className="space-y-2">
                {groupedNotifications.today.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`bg-card border border-border rounded-xl p-4 flex items-start gap-3 sm:gap-4 ${
                        !notification.read ? "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800" : ""
                      }`}
                    >
                      <div className={`p-2 rounded-xl ${
                        !notification.read ? "bg-slate-500" : "bg-accent"
                      }`}>
                        <Icon className={`w-5 h-5 ${!notification.read ? "text-white" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1">
                        <p className={!notification.read ? "font-medium" : ""}>{notification.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      <div className="flex gap-2">
                        {!notification.read && (
                          <button
                            onClick={() => markAsRead(notification.id)}
                            className="p-2 hover:bg-accent rounded-lg transition-colors"
                            title="Mark as read"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                        )}
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 hover:bg-accent rounded-lg transition-colors text-destructive"
                          title="Delete"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Yesterday */}
          {groupedNotifications.yesterday.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Yesterday</h3>
              <div className="space-y-2">
                {groupedNotifications.yesterday.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 sm:gap-4"
                    >
                      <div className="p-2 bg-accent rounded-xl">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p>{notification.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors text-destructive"
                        title="Delete"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Earlier */}
          {groupedNotifications.earlier.length > 0 && (
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Earlier</h3>
              <div className="space-y-2">
                {groupedNotifications.earlier.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 sm:gap-4"
                    >
                      <div className="p-2 bg-accent rounded-xl">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1">
                        <p>{notification.text}</p>
                        <p className="text-sm text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 hover:bg-accent rounded-lg transition-colors text-destructive"
                        title="Delete"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
