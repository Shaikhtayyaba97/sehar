import Image from "next/image";

export default function Be() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start bg-gray-50 p-6 lg:p-12">
      {/* Image Section */}
      <div className="p-6 lg:p-16">
        <Image
          src="/dry.jpg"
          alt="Dry Fruits"
          width={300}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Text Section */}
      <div className="bg-gray-100 w-full lg:w-3/4 text-gray-900 text-right font-serif p-6 sm:p-10 rounded-lg shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          پنجیری کے فوائد
        </h1>
        <ul className="list-inside space-y-4">
          <li>پنجیری جسم کو توانائی فراہم کرتی ہے اور تھکن دور کرتی ہے۔</li>
          <li>یہ سردیوں میں جسم کو گرم رکھنے میں مدد دیتی ہے۔</li>
          <li>ہڈیوں کو مضبوط بنانے کے لیے پنجیری بہترین ہے۔</li>
          <li>یہ خواتین کے لیے بعد از زچگی صحت یابی میں مددگار ہے۔</li>
          <li>پنجیری نظامِ ہاضمہ کو بہتر بناتی ہے۔</li>
          <li>یہ بچوں اور بزرگوں کے لیے غذائیت سے بھرپور ہے۔</li>
          <li>جسمانی کمزوری کو دور کرنے کے لیے بہترین ہے۔</li>
          <li>بالوں اور جلد کی صحت کے لیے مفید ہے۔</li>
          <li>یہ قوت مدافعت کو بڑھاتی ہے اور بیماریوں سے بچاتی ہے۔</li>
          <li>ذہنی سکون فراہم کرتی ہے اور نیند کو بہتر بناتی ہے۔</li>
        </ul>
      </div>
    </div>
  );
}