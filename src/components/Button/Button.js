// src/components/Button/Button.js
import React from 'react';
import './index.css';

const Button = ({ children }) => {
  return <button className="my-button">{children}</button>;
};

export default Button;