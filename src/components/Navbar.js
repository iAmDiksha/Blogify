import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaPenNib } from "react-icons/fa";

const navItems = [
  { to: "/add-blogs", label: "Write" },
  { to: "/list", label: "Blogs" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClassName = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition duration-200 ${
      isActive
        ? "bg-blue-100 text-blue-700"
        : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <header className="z-50 border-b border-blue-100/80 bg-white/85 backdrop-blur-2xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-700 shadow-lg shadow-blue-100">
            <FaPenNib />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-500">
              Personal Publishing
            </p>
            <p className="text-xl font-extrabold tracking-tight text-slate-800 transition duration-200 group-hover:text-blue-700">
              Blogify
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-blue-100 bg-white/95 p-2 shadow-sm lg:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/add-blogs" className="ui-button-primary">
            New Post
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-white text-slate-700 transition duration-200 hover:border-blue-200 hover:bg-blue-50 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-blue-100 bg-white/95 px-4 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "bg-slate-50 text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/add-blogs" onClick={closeMenu} className="ui-button-primary mt-2">
              Write New Post
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
