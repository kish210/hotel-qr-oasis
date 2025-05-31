
import { Wine } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const WineList = () => {
  const wineCategories = [
    {
      title: "شراب‌های قرمز",
      color: "from-red-100 to-red-200",
      wines: [
        { name: "کابرنه سووینیون", origin: "فرانسه", year: "2018", price: "120,000 تومان", description: "شرابی پرطعم با عطر میوه‌های قرمز" },
        { name: "مرلو", origin: "ایتالیا", year: "2019", price: "95,000 تومان", description: "شراب ملایم با طعم توت‌ها" },
        { name: "پینو نوآر", origin: "آلمان", year: "2020", price: "110,000 تومان", description: "شراب ظریف با عطر گل‌ها" }
      ]
    },
    {
      title: "شراب‌های سفید", 
      color: "from-yellow-100 to-yellow-200",
      wines: [
        { name: "شاردونه", origin: "فرانسه", year: "2020", price: "85,000 تومان", description: "شراب تازه با طعم میوه‌های استوایی" },
        { name: "ساویون بلان", origin: "نیوزلند", year: "2021", price: "75,000 تومان", description: "شراب سبک و تازه" },
        { name: "ریزلینگ", origin: "آلمان", year: "2019", price: "90,000 تومان", description: "شراب شیرین با عطر گل‌ها" }
      ]
    },
    {
      title: "شراب‌های اسپارکلینگ",
      color: "from-blue-100 to-blue-200", 
      wines: [
        { name: "شامپاین", origin: "فرانسه", year: "2017", price: "200,000 تومان", description: "شامپاین لوکس با حباب‌های ریز" },
        { name: "پروسکو", origin: "ایتالیا", year: "2020", price: "65,000 تومان", description: "شراب حبابدار سبک و شیرین" },
        { name: "کاوا", origin: "اسپانیا", year: "2019", price: "55,000 تومان", description: "شراب حبابدار خشک" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
            <Wine className="h-10 w-10" />
            فهرست شراب‌ها
          </h1>
          <p className="text-lg text-amber-600">مجموعه‌ای منتخب از بهترین شراب‌های جهان</p>
        </div>

        <div className="space-y-8">
          {wineCategories.map((category, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200">
              <CardHeader className={`bg-gradient-to-r ${category.color}`}>
                <CardTitle className="text-2xl text-amber-800 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.wines.map((wine, wineIndex) => (
                    <div key={wineIndex} className="bg-gradient-to-br from-white to-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-amber-800">{wine.name}</h3>
                        <Badge variant="outline" className="border-amber-300 text-amber-700">
                          {wine.year}
                        </Badge>
                      </div>
                      <p className="text-amber-600 text-sm mb-2">{wine.origin}</p>
                      <p className="text-amber-700 text-sm mb-3">{wine.description}</p>
                      <div className="flex justify-between items-center">
                        <Badge className="bg-amber-600 text-white">
                          {wine.price}
                        </Badge>
                      </div>
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

export default WineList;
