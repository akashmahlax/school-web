// src/components/MatrixRain.jsx

import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const equations = [
  'E=mc²', 'πr²', 'a²+b²=c²', 'sin(θ)', '∫f(x)dx', 'Δy/Δx', 'λ', 'μ', 'Σ', 'θ', 'log(x)', 'x²+y²=z²', 'f(x)=y'
];

// Component for individual equation
const FallingEquation = ({ text, initialPosition, speed }) => {
  const ref = useRef();
  
  // Frame-by-frame update for falling effect
  useFrame(() => {
    ref.current.position.y -= speed;
    if (ref.current.position.y < -10) {
      ref.current.position.y = Math.random() * 10 + 5; // Reset to a random height above view
      ref.current.position.x = Math.random() * 12 - 6; // Reset to a random x position
    }
  });

  return (
    <Text ref={ref} position={initialPosition} fontSize={0.5} color="lime">
      {text}
    </Text>
  );
};

const MatrixRain = () => {
  const [equationsArray, setEquationsArray] = useState([]);

  // Generate an array of random equations with positions and speeds
  useEffect(() => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      const text = equations[Math.floor(Math.random() * equations.length)];
      const position = [Math.random() * 12 - 6, Math.random() * 10 - 5, Math.random() * -3];
      const speed = Math.random() * 0.03 + 0.02;
      array.push({ text, position, speed });
    }
    setEquationsArray(array);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ height: '100vh', background: 'black' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {equationsArray.map((eq, index) => (
        <FallingEquation key={index} text={eq.text} initialPosition={eq.position} speed={eq.speed} />
      ))}
    </Canvas>
  );
};

export default MatrixRain;