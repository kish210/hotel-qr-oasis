
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MinibarMenu = () => {
  const minibarCategories = [
    {
      title: "نوشیدنی‌های الکلی",
      items: [
        { name: "ویسکی", brand: "جک دنیلز", size: "50ml", price: "45,000 تومان" },
        { name: "ووکا", brand: "اسمیرنوف", size: "50ml", price: "35,000 تومان" },
        { name: "رم", brand: "باکاردی", size: "50ml", price: "40,000 تومان" },
        { name: "جین", brand: "بمبی", size: "50ml", price: "38,000 تومان" }
      ]
    },
    {
      title: "شراب و شامپاین",
      items: [
        { name: "شراب قرمز", brand: "کابرنه", size: "187ml", price: "55,000 تومان" },
        { name: "شراب سفید", brand: "شاردونه", size: "187ml", price: "50,000 تومان" },
        { name: "شامپاین", brand: "دوم پریگنون", size: "200ml", price: "85,000 تومان" },
        { name: "پروسکو", brand: "مارتینی", size: "200ml", price: "40,000 تومان" }
      ]
    },
    {
      title: "نوشیدنی‌های غیرالکلی",
      items: [
        { name: "آب معدنی", brand: "اوین", size: "500ml", price: "3,000 تومان" },
        { name: "نوشابه", brand: "کوکاکولا", size: "330ml", price: "5,000 تومان" },
        { name: "آب پرتقال", brand: "سان‌کیست", size: "250ml", price: "8,000 تومان" },
        { name: "انرژی‌زا", brand: "ردبول", size: "250ml", price: "12,000 تومان" }
      ]
    },
    {
      title: "تنقلات",
      items: [
        { name: "چیپس", brand: "لیز", size: "50g", price: "6,000 تومان" },
        { name: "شکلات", brand: "کیت‌کت", size: "45g", price: "8,000 تومان" },
        { name: "آجیل", brand: "مخلوط", size: "100g", price: "15,000 تومان" },
        { name: "بیسکویت", brand: "اوریو", size: "pack", price: "7,000 تومان" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">منوی مینی‌بار</h1>
          <p className="text-lg text-amber-600">نوشیدنی‌ها و تنقلات موجود در اتاق شما</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {minibarCategories.map((category, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                <CardTitle className="text-2xl text-amber-800 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gradient-to-r from-white to-amber-50 p-4 rounded-lg border border-amber-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 transition-all duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-amber-800">{item.name}</h3>
                          <p className="text-amber-600 text-sm">{item.brand} - {item.size}</p>
                        </div>
                        <Badge className="bg-amber-600 text-white">
                          {item.price}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Card className="bg-amber-100/50 border-amber-300">
            <CardContent className="p-4">
              <p className="text-amber-800 font-medium">
                تمامی اقلام در دسترس شما در اتاق می‌باشد. لطفاً استفاده از هر کدام را هنگام خروج اعلام کنید.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MinibarMenu;
