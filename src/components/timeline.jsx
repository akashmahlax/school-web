// src/components/TimelineScene.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';

const EventCard = ({ position, event }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1.5, 0.1]} />
      <meshStandardMaterial color="skyblue" />
      <Html distanceFactor={10}>
        <div className="event-info" style={{ display: 'none' }}>
          <h3>{event.name}</h3>
          <p>{event.date}</p>
        </div>
      </Html>
    </mesh>
  );
};

const Timeline = ({ events }) => {
  const timelineRef = useRef();

  // Auto-rotate the timeline
  useFrame(() => {
    timelineRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={timelineRef}>
      {events.map((event, index) => (
        <EventCard key={index} position={[index * 2 - (events.length - 1), 0, 0]} event={event} />
      ))}
    </group>
  );
};

const TimelineScene = () => {
  const events = [
    { name: 'Science Fair', date: '2024-05-12' },
    { name: 'Sports Day', date: '2024-06-23' },
    { name: 'Art Exhibition', date: '2024-07-15' },
  ];

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <OrbitControls />
      <Timeline events={events} />
    </Canvas>
  );
};

export default TimelineScene;