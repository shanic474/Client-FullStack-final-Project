import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useModalStore } from "../store/modal.store.jsx";
import {useAuthStore} from '../store/auth.store.jsx';

function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const openModal = useModalStore((s) => s.openModal);
  const user = useAuthStore((s) => s.user);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-light tracking-wider bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 dark:from-amber-300 dark:via-yellow-400 dark:to-amber-500 bg-clip-text text-transparent uppercase">
                Build-Your-Own Meal
              </h1>
              <p className="text-xs text-amber-600/60 dark:text-amber-400/60 tracking-[0.2em] font-light uppercase mt-0.5">
                Nutrition Laboratory
              </p>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </Link>
            <Link to="/products" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </Link>
            {/* <a href="#how-it-works" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Process
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#ingredients" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Ingredients
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#meals" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Signature Meals
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </a>
            <a href="#reviews" className="text-gray-400 dark:text-gray-300 hover:text-amber-400 dark:hover:text-amber-300 transition-all duration-300 font-light text-sm tracking-wide relative group uppercase">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
            </a> */}
          </div>

          {/* Cart, Theme Toggle & User/Login */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-2.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 border border-amber-500/20 dark:border-amber-400/30 transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 transition-transform group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Cart */}
            <button
              className="relative p-2.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 border border-amber-500/20 dark:border-amber-400/30 transition-all duration-300"
              onClick={() => openModal(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>

            {/* Login / SignUp or User */}
            {user ? (
              // Logged in: show user icon
              <button
                className="relative p-2.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 border border-amber-500/20 dark:border-amber-400/30 transition-all duration-300"
                title={user.name}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A9.003 9.003 0 0112 15a9.003 9.003 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            ) : (
              // Not logged in: show Login & SignUp
              <>
                <Link
                  to="/login"
                  className="relative p-2.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 border border-amber-500/20 dark:border-amber-400/30 transition-all duration-300"
                >
                  <span className="text-sm uppercase font-light tracking-wide">Login</span>
                </Link>
                <Link
                  to="/register"
                  className="relative p-2.5 rounded-lg bg-amber-500/10 dark:bg-amber-400/10 text-amber-500 dark:text-amber-400 hover:bg-amber-500/20 dark:hover:bg-amber-400/20 border border-amber-500/20 dark:border-amber-400/30 transition-all duration-300"
                >
                  <span className="text-sm uppercase font-light tracking-wide">SignUp</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
