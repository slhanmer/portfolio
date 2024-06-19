import React from 'react';

type TimelineProps = {};

const Timeline: React.FC<TimelineProps> = () => {
  return (
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-date">2025</div>
        <div className="timeline-content">
          <p>Start my Graduate Program @ Sime-Darby</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2024</div>
        <div className="timeline-content">
          <p>Graduate my BSC of IT ... I hope</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2022</div>
        <div className="timeline-content">
          <p>Junior Web Developer @ BPA Analytics</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2021</div>
        <div className="timeline-content">
          <p>Began a BSC of IT @ QUT</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2020</div>
        <div className="timeline-content">
          <p>Opening Executive Chef @ Southside</p>
          <p>Lockdown inspired semi-pro sourdough Baker</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2018</div>
        <div className="timeline-content">
          <p>Opening Sous Chef @ Little Valley</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2018</div>
        <div className="timeline-content">
          <p>Head Chef @ SpiceBar</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2016</div>
        <div className="timeline-content">
          <p>Opening Sous Chef @ Rick Shores</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;