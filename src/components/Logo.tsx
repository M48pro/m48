import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Layers className="w-8 h-8 text-primary-600 mr-2" />
      <span className="text-xl font-bold">
        <span className="text-primary-600">M</span>
        <span className="text-neutral-800">48</span>
      </span>
    </div>
  );
};

export default Logo;