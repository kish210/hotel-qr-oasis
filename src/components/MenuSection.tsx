
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const MenuSection = () => {
  const menuCategories = [
    {
      title: "پیش غذاها",
      items: [
        { name: "سوپ جو", description: "سوپ خوشمزه با جو و سبزیجات تازه", price: "15,000 تومان" },
        { name: "کوکو سبزی", description: "کوکوی سنتی با سبزیجات معطر", price: "12,000 تومان" },
        { name: "کاشک بادمجان", description: "بادمجان کبابی با کاشک خوشمزه", price: "18,000 تومان" }
      ]
    },
    {
      title: "غذاهای اصلی",
      items: [
        { name: "چلو کباب کوبیده", description: "کباب کوبیده مخصوص با برنج ایرانی", price: "45,000 تومان" },
        { name: "فسنجان", description: "خورش فسنجان با مرغ و آلو", price: "38,000 تومان" },
        { name: "قورمه سبزی", description: "خورش قورمه سبزی با لوبیا قرمز", price: "35,000 تومان" },
        { name: "زرشک پلو با مرغ", description: "برنج با زرشک و مرغ طعم‌دار", price: "40,000 تومان" }
      ]
    },
    {
      title: "دسرها",
      items: [
        { name: "بستنی سنتی", description: "بستنی خانگی با طعم‌های مختلف", price: "8,000 تومان" },
        { name: "فالوده شیرازی", description: "فالوده سنتی با آب لیمو", price: "10,000 تومان" },
        { name: "شیر برنج", description: "شیر برنج خوشمزه با دارچین", price: "7,000 تومان" }
      ]
    }
  ];

  const downloadExcel = () => {
    // Create CSV content (Excel compatible)
    let csvContent = "نام غذا,توضیحات,قیمت,دسته‌بندی\n";
    
    menuCategories.forEach(category => {
      category.items.forEach(item => {
        csvContent += `"${item.name}","${item.description}","${item.price}","${category.title}"\n`;
      });
    });

    // Create and download file
    const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'menu-restaurant.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-navy-900 p-4" style={{background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #1e3a8a 100%)'}}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">منوی رستوران</h1>
          <p className="text-lg text-slate-300 mb-6">بهترین غذاهای ایرانی و بین‌المللی</p>
          
          <Button 
            onClick={downloadExcel}
            className="bg-blue-900 hover:bg-blue-800 text-white border border-blue-700"
          >
            <Download className="w-4 h-4 mr-2" />
            دانلود فایل Excel
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-black/70 backdrop-blur-sm shadow-2xl border-slate-700 hover:shadow-blue-900/50 transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-blue-900">
                <CardTitle className="text-2xl text-white text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-slate-600 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <Badge variant="secondary" className="bg-blue-900 text-blue-100 border-blue-700">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
