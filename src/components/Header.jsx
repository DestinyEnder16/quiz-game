import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import React from 'react';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

function Header() {
  // to ensure the user's choice of theme is remembered by the browser.
  const logic = JSON.parse(window.localStorage.getItem('mode'));

  const [isOn, setIsOn] = useState(logic ? logic : false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  window.localStorage.setItem('mode', JSON.stringify(isOn));

  if (isOn) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <header className="header">
      <h1>Quiz Game</h1>
      <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
        <motion.div className="handle" layout transition={spring} />
      </div>
    </header>
  );
}

export default Header;
