"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecretMenuOpen, setIsSecretMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setIsSecretMenuOpen(false); // Reset menu rahasia saat sidebar dibuka
  };

  const toggleSecretMenu = () => {
    setIsSecretMenuOpen(!isSecretMenuOpen);
  };

  return (
    <header className="body-font sticky top-0 z-50 bg-Gunmetal w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a
            className="flex title-font font-medium items-center text-AntiWhite mb-4 md:mb-0"
            href="/"
          >
            <svg
              className="w-8 text-white"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12"></rect>
              <rect x="3" y="17" width="7" height="6"></rect>
              <rect x="14" y="1" width="7" height="6"></rect>
              <rect x="14" y="11" width="7" height="12"></rect>
            </svg>
            <span className="ml-3 text-xl">Logo Anda</span>
          </a>
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigasi Desktop */}
        <nav className="hidden md:ml-auto md:flex flex-wrap items-center text-base justify-center relative">
          <a className="mr-5 text-AntiWhite" href="/">
            Menu Pertama
          </a>
          <button
            className="mr-5 flex items-center text-AntiWhite focus:outline-none"
            onClick={toggleSecretMenu}
            aria-expanded={isSecretMenuOpen}
            aria-label="Toggle secret menu"
          >
            Menu Kedua
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <a className="mr-5 text-AntiWhite" href="/contact-us">
            Menu Ketiga
          </a>
        </nav>

        {/* Sidebar Mobile */}
        <div
          className={`fixed top-0 left-0 h-full w-full bg-Gunmetal shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden z-50`}
        >
          <div className="flex flex-col p-5">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-medium text-AntiWhite">Menu</span>
              <button
                className="focus:outline-none"
                onClick={toggleSidebar}
                aria-label="Tutup menu"
              >
                <svg
                  className="w-6 h-6 text-AntiWhite"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a className="text-AntiWhite" href="#" onClick={toggleSidebar}>
                Menu Pertama
              </a>
              <div>
                <button
                  className="flex items-center text-AntiWhite w-full text-left"
                  onClick={toggleSecretMenu}
                  aria-expanded={isSecretMenuOpen}
                >
                  Menu Kedua
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isSecretMenuOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col pl-4 mt-2 space-y-2">
                    <div className="bg-white rounded-md shadow-md p-4">
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Judul menu 1
                      </h3>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 1
                      </a>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 2
                      </a>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4">
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Judul menu 2
                      </h3>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 1
                      </a>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 2
                      </a>
                    </div>
                    <div className="bg-white rounded-md shadow-md p-4">
                      <h3 className="text-lg font-semibold text-black mb-2">
                        Judul menu 3
                      </h3>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 1
                      </a>
                      <a
                        href="#"
                        className="block py-1 text-black hover:underline"
                        onClick={toggleSidebar}
                      >
                        Link 2
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="text-AntiWhite"
                href="/contact-us"
                onClick={toggleSidebar}
              >
                Menu Ketiga
              </a>
            </nav>
          </div>
        </div>

        {/* Overlay untuk mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>

      {/* Menu Rahasia untuk Desktop, di dalam Navbar */}
      <div
        className={`bg-Gunmetal hidden md:block overflow-hidden transition-all duration-700 ease-in-out ${
          isSecretMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-4 rounded-sm shadow-md">
              <h3 className="text-lg font-semibold text-Gunmetal mb-3">
                Judul Menu 1
              </h3>
              <a
                href="/menu-link-1"
                className="block py-2 text-black hover:underline"
              >
                Link 1
              </a>
              <a
                href="/menu-link-2"
                className="block py-2 text-black hover:underline"
              >
                Link 2
              </a>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-sm shadow-md">
              <h3 className="text-lg font-semibold text-Gunmetal mb-3">
                Judul Menu 2
              </h3>
              <a href="#" className="block py-2 text-black hover:underline">
                Link 1
              </a>
              <a href="#" className="block py-2 text-black hover:underline">
                Link 2
              </a>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-4 rounded-sm shadow-md">
              <h3 className="text-lg font-semibold text-Gunmetal mb-3">
                Judul Menu 3
              </h3>
              <a href="#" className="block py-2 text-black hover:underline">
                Link 1
              </a>
              <a href="#" className="block py-2 text-black hover:underline">
                Link 2
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
