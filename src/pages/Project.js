// src/pages/Project.js
import React, { useEffect } from 'react';
import './Project.css';

const Project = () => {
  useEffect(() => {
    document.title = "Project Page"; // Set the title here
}, []);
  const columns = [
    {
      id: 1,
      title: 'Grid Column 1',
      image: 'https://media.istockphoto.com/id/697705574/photo/3d-rendering-of-modern-cozy-house-summer-evening.jpg?s=170667a&w=0&k=20&c=9h15T9I1P49axM89BJuRQZbiyyo8Zu9BO_bgbsuz4Bc=',
      description: 'Description for grid column 1.',
    },
    {
      id: 2,
      title: 'Grid Column 2',
      image: 'https://images.adsttc.com/media/images/5db0/b532/3312/fd1d/e700/0002/newsletter/Melvin_H_J_Tan.jpg?1571861799',
      description: 'Description for grid column 2.',
    },
    {
      id: 3,
      title: 'Grid Column 3',
      image: 'https://images.adsttc.com/media/images/5f06/234e/b357/655d/4600/0284/newsletter/Kaunas-V-Plaza-Urban-Design-Architecture-Corner-Building-4364.jpg?1594237754',
      description: 'Description for grid column 3.',
    },
    {
      id: 4,
      title: 'Grid Column 4',
      image: 'https://images.unsplash.com/photo-1635007920024-80f02a758d4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJjaGl0dXJlfGVufDB8MHwwfHx8MA%3D%3D',
      description: 'Description for grid column 1.',
    },
    {
      id: 5,
      title: 'Grid Column 5',
      image: 'https://images.unsplash.com/photo-1645371319213-06bf97cd763d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGFyY2hpdHVyZXxlbnwwfDB8MHx8fDA%3D',
      description: 'Description for grid column 1.',
    },
    {
      id: 6,
      title: 'Grid Column 6',
      image: 'https://images.unsplash.com/photo-1610575490161-bfcfccf42ea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXJjaGl0ZWN0dXJlJTIwd2FsbHBhcGVyfGVufDB8MHwwfHx8MA%3D%3D',
      description: 'Description for grid column 1.',
    },
    {
      id: 7,
      title: 'Grid Column 7',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHwwfDB8fHww',
      description: 'Description for grid column 1.',
    },
    {
      id: 8,
      title: 'Grid Column 8',
      image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D',
      description: 'Description for grid column 1.',
    },
    {
      id: 9,
      title: 'Grid Column 9',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8MHwwfHx8MA%3D%3D',
      description: 'Description for grid column 1.',
    },
  ];
  return (
    <div className="three-column-grid-container">
      {columns.map((column) => (
        <div key={column.id} className="grid-column">
          <img src={column.image} alt={column.title} className="grid-column-image" />
          <h3 className="grid-column-title">{column.title}</h3>
          <p className="grid-column-description">{column.description}</p>
        </div>
      ))}
    </div>
  );
  
};


export default Project;
