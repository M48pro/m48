import React from 'react';
import { useNavigation } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './AnimatedOutlet.css';

const AnimatedOutlet: React.FC = () => {
  const navigation = useNavigation();

  return (
    <CSSTransition
      key={location.pathname}
      in={navigation.state === 'idle'}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      <div className="page">
        <Outlet />
      </div>
    </CSSTransition>
  );
};

export default AnimatedOutlet;