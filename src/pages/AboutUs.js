// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css'; // Include your CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* First Section */}
      <h1 className='logoamb'>Team</h1>
      <section className="principal-architect">
        <h2 className="title">Principal Architect</h2>
        <div className="content">
          <div className="image-container">
            <img src="https://blog.novatr.com/hs-fs/hubfs/norman%20foster.jpeg?width=1800&height=1017&name=norman%20foster.jpeg" alt="Principal Architect" />
          </div>
          <div className="text-container">
            <h3>Norman Foster</h3>
            <p>
            Architect Norman Foster was born in Reddish, Stockport, in 1935. By the early 1970s, he had already made his name in the British architectural industry. Known for his clean lines, his style is often praised for its sleek, modern nature, and has earned the tag of “High Tech” architecture. He works with glass and steel significantly, and some of his famous buildings include The Gherkin, the Apple Park, and Crystal Island.

He has earned the reputation of being the “Father of High Tech Architecture”, but Foster is also an advocate of something he calls the “responsibility framework”. This framework outlines his design philosophy: sustainable architecture with a focus on visitor experience. Due to these facts, he is often called one of the greatest architects of all time.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section - Team */}
      <section className="team-section">
        <h2 className="team-title">Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://blog.novatr.com/hs-fs/hubfs/gehry.jpeg?width=1800&height=1017&name=gehry.jpeg" alt="Frank Gehry " />
            <h3>Frank Gehry</h3>
          </div>
          <div className="team-member">
            <img src="https://blog.novatr.com/hs-fs/hubfs/flwww%20(1).jpg?width=2346&height=1553&name=flwww%20(1).jpg" alt="Frank Lloyd Wright" />
            <h3>Frank Lloyd Wright</h3>
          </div>
          <div className="team-member">
            <img src="https://blog.novatr.com/hs-fs/hubfs/renzo.jpg?width=1266&height=713&name=renzo.jpg" alt="Renzo Piano" />
            <h3>Renzo Piano</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

