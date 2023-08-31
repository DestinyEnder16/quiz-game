import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

function Header() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    document.body.classList.toggle('dark');
  };

  return (
    <header className="header">
      <h1>Quiz App</h1>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </header>
  );
}

export default Header;
