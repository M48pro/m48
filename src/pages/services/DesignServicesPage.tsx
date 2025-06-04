import React from 'react';
import { motion } from 'framer-motion';

const DesignPage: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6"
        >
          UI/UX Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-3xl mb-12"
        >
          Создание дизайна, который привлекает внимание и конвертирует пользователей.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-2">User Research</h3>
            <p className="text-gray-400">Изучение целевой аудитории и поведения пользователей.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-2">Wireframing</h3>
            <p className="text-gray-400">Создание прототипов до начала разработки.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-2">UI Kit & Branding</h3>
            <p className="text-gray-400">Разработка брендинга и набора компонентов.</p>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition">
            <h3 className="text-2xl font-semibold mb-2">Interactive Prototypes</h3>
            <p className="text-gray-400">Анимированные прототипы для презентации.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;