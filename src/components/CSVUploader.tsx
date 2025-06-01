
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

interface CSVUploaderProps {
  onDataLoaded: (data: MenuItem[]) => void;
}

const CSVUploader = ({ onDataLoaded }: CSVUploaderProps) => {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const csv = e.target?.result as string;
        const lines = csv.split('\n');
        const headers = lines[0].split(',').map(h => h.replace(/"/g, '').trim());
        
        const data: MenuItem[] = [];
        
        for (let i = 1; i < lines.length; i++) {
          if (lines[i].trim()) {
            const values = lines[i].split(',').map(v => v.replace(/"/g, '').trim());
            if (values.length >= 4) {
              data.push({
                name: values[0] || '',
                description: values[1] || '',
                price: values[2] || '',
                category: values[3] || ''
              });
            }
          }
        }
        
        onDataLoaded(data);
        console.log('CSV Data loaded:', data);
      } catch (error) {
        console.error('Error parsing CSV:', error);
      } finally {
        setLoading(false);
      }
    };

    reader.readAsText(file, 'UTF-8');
  };

  return (
    <Card className="bg-black/70 backdrop-blur-sm shadow-2xl border-slate-700 mb-6">
      <CardHeader className="bg-gradient-to-r from-slate-800 to-blue-900">
        <CardTitle className="text-white text-center flex items-center justify-center gap-2">
          <Upload className="w-5 h-5" />
          آپلود فایل CSV منو
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <p className="text-slate-300 text-sm text-center">
            فایل CSV با ستون‌های: نام غذا، توضیحات، قیمت، دسته‌بندی
          </p>
          <Input
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            disabled={loading}
            className="bg-slate-800 border-slate-600 text-white"
          />
          {loading && <p className="text-blue-400 text-center">در حال خواندن فایل...</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default CSVUploader;
