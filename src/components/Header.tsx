import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Droplets } from "lucide-react";
import NavLink from "./navigation/NavLink";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/analyze", label: "Crop Analysis" },
  { to: "/water-saving-tips", label: "Water Saving Tips" },
  { to: "/monitor", label: "Dam Monitor" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-white p-2 rounded-lg group-hover:bg-primary-50 transition-colors">
              <Droplets className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Agri Tech</h1>
              <p className="text-sm text-primary-100">
                Smart Agriculture Solutions
              </p>
            </div>
          </Link>

          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                isActive={location.pathname === item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
