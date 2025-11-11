import React from 'react';
import { NAV_LINKS, FlagIcon, SettingsIcon } from '../constants.tsx';
import type { NavLink } from '../types.ts';

interface NavItemProps {
  link: NavLink;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ link, isActive, onClick }) => {
  const Icon = link.icon;
  return (
    <a
      href={link.href}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
        isActive
          ? 'font-semibold bg-indigo-600 text-white shadow-sm'
          : 'text-slate-400 hover:bg-slate-700 hover:text-white'
      }`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="font-medium">{link.name}</span>
    </a>
  );
};

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  return (
    <aside className="w-64 flex-shrink-0 bg-slate-800 border-r border-slate-700 flex flex-col p-4">
      <div className="flex items-center mb-8 px-2">
        <FlagIcon className="w-8 h-8 text-indigo-600" />
        <h1 className="text-2xl font-bold ml-2 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            RaceHub
          </span>
        </h1>
      </div>
      <nav className="flex-1 space-y-2">
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.name}
            link={link}
            isActive={activePage === link.name}
            onClick={() => setActivePage(link.name)}
          />
        ))}
      </nav>
      <div className="mt-auto">
        <div className="space-y-2">
          <NavItem
            key="Settings"
            link={{ name: 'Settings', href: '#', icon: SettingsIcon }}
            isActive={activePage === 'Settings'}
            onClick={() => setActivePage('Settings')}
          />
        </div>
        <div className="flex items-center p-2 mt-4 rounded-lg transition-colors hover:bg-slate-700">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://picsum.photos/seed/avatar/100/100"
            alt="User avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-semibold text-white">
              S. Kuncio
            </p>
            <p className="text-xs text-slate-400">
              seb@racehub.dev
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;