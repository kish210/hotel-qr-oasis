
import { QrCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const QRCodeDisplay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-4">QR کد هتل</h1>
          <p className="text-lg text-amber-600">برای دسترسی سریع به خدمات هتل اسکن کنید</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-800 flex items-center justify-center gap-2">
                <QrCode className="h-8 w-8" />
                منوی رستوران
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-48 h-48 bg-white border-4 border-amber-300 rounded-lg flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-amber-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-800 flex items-center justify-center gap-2">
                <QrCode className="h-8 w-8" />
                فهرست شراب‌ها
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-48 h-48 bg-white border-4 border-amber-300 rounded-lg flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-amber-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-800 flex items-center justify-center gap-2">
                <QrCode className="h-8 w-8" />
                مینی‌بار
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-48 h-48 bg-white border-4 border-amber-300 rounded-lg flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-amber-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-amber-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-800 flex items-center justify-center gap-2">
                <QrCode className="h-8 w-8" />
                اطلاعات هتل
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <div className="w-48 h-48 bg-white border-4 border-amber-300 rounded-lg flex items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-amber-200 rounded flex items-center justify-center">
                  <QrCode className="h-24 w-24 text-amber-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
