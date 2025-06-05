import React from 'react';

const ServicesPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Наши услуги</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Веб-разработка</h2>
          <p>Создание современных сайтов и приложений</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Дизайн</h2>
          <p>UI/UX, брендинг, анимация интерфейсов</p>
        </div>
        <div className="border p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Поддержка</h2>
          <p>Обслуживание, обновления, техническая помощь</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;