import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  isActive: boolean;
  children: React.ReactNode;
}

export default function NavLink({ to, isActive, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className={`hover:text-primary-100 transition-colors ${isActive ? 'text-primary-100 font-medium' : 'text-white'}`}
    >
      {children}
    </Link>
  );
}