
import { useState } from 'react';
import { Menu, Hotel, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'خانه', icon: Hotel },
    { id: 'menu', label: 'منوی رستوران' },
    { id: 'wine', label: 'فهرست شراب‌ها', icon: Wine },
    { id: 'minibar', label: 'مینی‌بار' },
    { id: 'qr', label: 'QR کد' },
    { id: 'info', label: 'اطلاعات هتل' }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Hotel className="h-8 w-8 text-blue-300" />
            <span className="ml-2 text-xl font-bold text-white">هتل لوکس</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => onSectionChange(section.id)}
                className={`${
                  activeSection === section.id 
                    ? 'bg-blue-900 text-white border-blue-700' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                } transition-all duration-200`}
              >
                {section.label}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "ghost"}
                onClick={() => {
                  onSectionChange(section.id);
                  setIsOpen(false);
                }}
                className={`w-full justify-start ${
                  activeSection === section.id 
                    ? 'bg-blue-900 text-white' 
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {section.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
