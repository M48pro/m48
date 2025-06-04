import React from 'react';
import { useNavigate } from 'react-router-dom'; // или next/navigation если это Next.js

const WebDevelopmentPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="web-development-page max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Веб-разработка</h1>
      <p className="text-lg mb-6">
        Мы создаём современные, адаптивные и функциональные сайты и веб-приложения под ключ.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Что мы делаем:</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Разработка лендингов и корпоративных сайтов</li>
        <li>Создание интернет-магазинов (на Shopify, WooCommerce, или custom)</li>
        <li>Индивидуальные CRM, ERP, внутренние инструменты</li>
        <li>Мобильные версии сайтов и кросс-браузерная верстка</li>
        <li>Интеграция с CMS (WordPress, Strapi и др.)</li>
        <li>SEO-оптимизация и высокая производительность</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Технологии, которые мы используем:</h2>
      <p className="mb-6">
        Vue.js, React, TypeScript, Node.js, Express, NestJS, Django, Laravel, MongoDB, PostgreSQL, Supabase.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Почему стоит выбрать нас?</h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Профессиональная команда разработчиков</li>
        <li>Индивидуальный подход к каждому клиенту</li>
        <li>Гарантия качества и соблюдения сроков</li>
        <li>Поддержка после запуска проекта</li>
      </ul>

      <button
        onClick={() => navigate('/contact')}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Оставить заявку
      </button>
    </div>
  );
};

export default WebDevelopmentPage;