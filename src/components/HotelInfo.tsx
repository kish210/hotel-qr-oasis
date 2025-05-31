
import { Hotel, MapPin, Phone, Mail, Clock, Car, Wifi, Coffee, Dumbbell, Waves } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HotelInfo = () => {
  const hotelFeatures = [
    { icon: Wifi, title: "WiFi رایگان", description: "اینترنت پرسرعت در تمام نقاط هتل" },
    { icon: Car, title: "پارکینگ", description: "پارکینگ امن و رایگان" },
    { icon: Coffee, title: "کافی شاپ", description: "کافی شاپ 24 ساعته" },
    { icon: Dumbbell, title: "باشگاه ورزشی", description: "مجهز به آخرین تجهیزات" },
    { icon: Waves, title: "استخر", description: "استخر داخلی گرم" }
  ];

  const contactInfo = [
    { icon: Phone, title: "تلفن", value: "021-88776655" },
    { icon: Mail, title: "ایمیل", value: "info@luxuryhotel.com" },
    { icon: MapPin, title: "آدرس", value: "تهران، خیابان ولیعصر، کوچه لوکس، پلاک 123" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4 flex items-center justify-center gap-3">
            <Hotel className="h-10 w-10" />
            هتل لوکس
          </h1>
          <p className="text-lg text-amber-600">بهترین تجربه اقامت در دل شهر</p>
        </div>

        {/* Hero Section */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200 mb-8">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-amber-800 mb-4">خوش آمدید</h2>
                <p className="text-amber-700 leading-relaxed mb-4">
                  هتل لوکس با بیش از 20 سال سابقه، یکی از معتبرترین هتل‌های تهران محسوب می‌شود. 
                  ما با ارائه خدمات درجه یک و تجهیزات مدرن، تجربه‌ای فراموش‌نشدنی برای شما فراهم می‌کنیم.
                </p>
                <Badge className="bg-amber-600 text-white text-lg px-4 py-2">
                  5 ستاره
                </Badge>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center">
                  <Hotel className="h-32 w-32 text-amber-700" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200 mb-8">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-2xl text-amber-800 text-center">
              امکانات هتل
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelFeatures.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-amber-50 p-4 rounded-lg border border-amber-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                    <h3 className="text-lg font-semibold text-amber-800">{feature.title}</h3>
                  </div>
                  <p className="text-amber-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200 mb-8">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-2xl text-amber-800 text-center">
              اطلاعات تماس
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-amber-50 p-4 rounded-lg border border-amber-200 text-center">
                  <contact.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-amber-800 mb-1">{contact.title}</h3>
                  <p className="text-amber-600 text-sm">{contact.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Hours */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-amber-200">
          <CardHeader className="bg-gradient-to-r from-amber-100 to-orange-100">
            <CardTitle className="text-2xl text-amber-800 text-center flex items-center justify-center gap-2">
              <Clock className="h-8 w-8" />
              ساعات کاری
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">پذیرش</h3>
                <p className="text-amber-600">24 ساعته</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">رستوران</h3>
                <p className="text-amber-600">6:00 صبح - 12:00 شب</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HotelInfo;
