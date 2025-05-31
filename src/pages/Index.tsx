
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import MenuSection from '@/components/MenuSection';
import WineList from '@/components/WineList';
import MinibarMenu from '@/components/MinibarMenu';
import HotelInfo from '@/components/HotelInfo';
import { Hotel, QrCode, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'menu':
        return <MenuSection />;
      case 'wine':
        return <WineList />;
      case 'minibar':
        return <MinibarMenu />;
      case 'qr':
        return <QRCodeDisplay />;
      case 'info':
        return <HotelInfo />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      {renderSection()}
    </div>
  );
};

const HomeSection = ({ onSectionChange }: { onSectionChange: (section: string) => void }) => {
  const quickLinks = [
    { id: 'menu', title: 'منوی رستوران', description: 'غذاهای خوشمزه ایرانی و بین‌المللی', color: 'from-green-100 to-green-200' },
    { id: 'wine', title: 'فهرست شراب‌ها', description: 'مجموعه‌ای منتخب از بهترین شراب‌ها', color: 'from-purple-100 to-purple-200', icon: Wine },
    { id: 'minibar', title: 'مینی‌بار', description: 'نوشیدنی‌ها و تنقلات اتاق', color: 'from-blue-100 to-blue-200' },
    { id: 'qr', title: 'QR کدها', description: 'دسترسی سریع به همه خدمات', color: 'from-gray-100 to-gray-200', icon: QrCode },
    { id: 'info', title: 'اطلاعات هتل', description: 'درباره هتل و امکانات', color: 'from-amber-100 to-amber-200', icon: Hotel }
  ];

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 py-16">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center shadow-2xl">
              <Hotel className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-amber-800 mb-4">
            هتل لوکس
          </h1>
          <p className="text-xl text-amber-600 mb-8 max-w-2xl mx-auto">
            خوش آمدید به بهترین تجربه اقامت. همه چیز برای راحتی شما آماده است.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => onSectionChange('menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg"
            >
              مشاهده منو
            </Button>
            <Button 
              onClick={() => onSectionChange('qr')}
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 text-lg"
            >
              QR کدها
            </Button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {quickLinks.map((link) => (
            <Card 
              key={link.id} 
              className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200 hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => onSectionChange(link.id)}
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {link.icon && <link.icon className="h-8 w-8 text-gray-700" />}
                </div>
                <h3 className="text-xl font-bold text-amber-800 text-center mb-2">
                  {link.title}
                </h3>
                <p className="text-amber-600 text-center text-sm">
                  {link.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Welcome Message */}
        <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300 shadow-xl">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">
              به هتل لوکس خوش آمدید!
            </h2>
            <p className="text-amber-700 max-w-3xl mx-auto leading-relaxed">
              ما افتخار داریم که میزبان شما باشیم. برای دسترسی سریع به منوهای غذا، نوشیدنی و اطلاعات هتل، 
              از منوی بالا استفاده کنید یا QR کدهای موجود را اسکن کنید. تیم ما 24 ساعته در خدمت شماست.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
