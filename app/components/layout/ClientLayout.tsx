"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Languages, Menu } from "lucide-react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="h-full px-4 py-6 overflow-y-auto bg-gradient-to-b from-blue-100 via-blue-50 to-white dark:from-indigo-950 dark:via-purple-900 dark:to-slate-900">
          <div className="flex items-center gap-2 mb-8 px-2">
            <Languages className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-violet-600 text-transparent bg-clip-text">
              Flashcards
            </h1>
          </div>
          <nav className="space-y-2">
            <Link
              href="/"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-white/50 dark:hover:bg-white/10 ${
                isActive("/")
                  ? "bg-white dark:bg-white/20 shadow-lg scale-[0.98] glass-card"
                  : ""
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <Home
                className={`w-5 h-5 ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
              />
              <span
                className={`font-medium ${
                  isActive("/")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400`}
              >
                Home
              </span>
            </Link>
            <Link
              href="/hiragana"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-white/50 dark:hover:bg-white/10 ${
                isActive("/hiragana")
                  ? "bg-white dark:bg-white/20 shadow-lg scale-[0.98] glass-card"
                  : ""
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <BookOpen
                className={`w-5 h-5 ${
                  isActive("/hiragana")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
              />
              <span
                className={`font-medium ${
                  isActive("/hiragana")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400`}
              >
                Hiragana
              </span>
            </Link>
            <Link
              href="/katakana"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-white/50 dark:hover:bg-white/10 ${
                isActive("/katakana")
                  ? "bg-white dark:bg-white/20 shadow-lg scale-[0.98] glass-card"
                  : ""
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <BookOpen
                className={`w-5 h-5 ${
                  isActive("/katakana")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
              />
              <span
                className={`font-medium ${
                  isActive("/katakana")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400`}
              >
                Katakana
              </span>
            </Link>
            <Link
              href="/kanji"
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group hover:bg-white/50 dark:hover:bg-white/10 ${
                isActive("/kanji")
                  ? "bg-white dark:bg-white/20 shadow-lg scale-[0.98] glass-card"
                  : ""
              }`}
              onClick={() => setIsSidebarOpen(false)}
            >
              <BookOpen
                className={`w-5 h-5 ${
                  isActive("/kanji")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}
              />
              <span
                className={`font-medium ${
                  isActive("/kanji")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                } group-hover:text-blue-600 dark:group-hover:text-blue-400`}
              >
                Kanji
              </span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Mobile menu button */}
      <button
        type="button"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 glass-effect"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-900 bg-opacity-50 backdrop-blur-sm md:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 md:ml-64">{children}</div>
    </div>
  );
}
