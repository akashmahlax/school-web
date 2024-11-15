// src/pages/EventsCalendar.jsx

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, Text } from '@react-three/drei';
import { motion } from 'framer-motion';

const EventCard = ({ title, description, month, position, color }) => (
  <group position={position}>
    <mesh>
      <boxGeometry args={[2, 2.5, 0.5]} />
      <meshStandardMaterial color={color} />
    </mesh>
    <Html center>
      <motion.div
        className="p-4 bg-white bg-opacity-90 rounded-lg shadow-lg text-center text-gray-800"
        style={{ width: '150px' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{month}</p>
      </motion.div>
    </Html>
  </group>
);

const EventsScene = () => {
  const eventsData = [
    { title: 'Science Fair', description: 'Discover amazing science projects', month: 'January', position: [-3, 3, 0], color: '#2a9d8f' },
    { title: 'Sports Meet', description: 'Athletics and games for all grades', month: 'February', position: [3, 3, 0], color: '#e63946' },
    { title: 'Art Exhibition', description: 'Showcasing students’ art projects', month: 'March', position: [-3, -3, 0], color: '#457b9d' },
    { title: 'Music Concert', description: 'Annual school music concert', month: 'April', position: [3, -3, 0], color: '#2a9d8f' },
    { title: 'Music Concert', description: 'Annual school music concert', month: 'April', position: [3, -3, 0], color: '#2a9d8f' },
    { title: 'Music Concert', description: 'Annual school music concert', month: 'April', position: [3, -3, 0], color: '#2a9d8f' },

  ];

  return (
    <>
      {eventsData.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          description={event.description}
          month={event.month}
          position={event.position}
          color={event.color}
        />
      ))}
    </>
  );
};

const EventsCalendar = () => {
  return (
    <section className="relative h-screen bg-gradient-to-b from-indigo-600 to-blue-900">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <EventsScene />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
        <motion.h1
          className="text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Events & Calendar
        </motion.h1>
        <motion.p
          className="text-lg text-white mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Browse through our school's upcoming events month-by-month!
        </motion.p>
      </div>
    </section>
  );
};

export default EventsCalendar;