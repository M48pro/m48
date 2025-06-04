import { motion } from 'framer-motion';

const TestMotion = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-32 h-32 bg-blue-500"
    >
      Анимация работает!
    </motion.div>
  );
};

export default TestMotion;