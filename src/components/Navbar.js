import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { translations } from '../utils/translations';
import { Moon, Sun, Languages, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { path: '/', label: t(translations.nav.home) },
    { path: '/about', label: t(translations.nav.about) },
    { path: '/courses', label: t(translations.nav.courses) },
    { path: '/admissions', label: t(translations.nav.admissions) },
    { path: '/contact', label: t(translations.nav.contact) }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold ${language === 'ur' ? 'urdu-font' : 'heading-font'} text-primary`}>
              {language === 'en' ? 'Jamia Ishatul Khair' : 'جامعہ اشاطۃ الخیر'}
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium px-6 transition-colors hover:text-primary ${isActive(link.path)
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-foreground/70'
                  } ${language === 'ur' ? 'urdu-font text-base' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="theme-toggle-button"
              className="rounded-full hover:bg-accent"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              data-testid="language-toggle-button"
              className="rounded-full hover:bg-accent"
            >
              <Languages className="h-5 w-5" />
              <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              data-testid="mobile-menu-button"
              className="md:hidden rounded-full hover:bg-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border" data-testid="mobile-menu">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground/70 hover:bg-accent'
                  } ${language === 'ur' ? 'urdu-font text-base' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
