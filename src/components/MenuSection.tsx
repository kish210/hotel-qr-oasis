
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">منوی رستوران</h1>
          <p className="text-lg text-amber-600">بهترین غذاهای ایرانی و بین‌المللی</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {menuCategories.map((category, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200 hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
                <CardTitle className="text-2xl text-amber-800 text-center">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-b border-amber-100 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold text-amber-800">{item.name}</h3>
                        <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                          {item.price}
                        </Badge>
                      </div>
                      <p className="text-amber-600 text-sm">{item.description}</p>
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
