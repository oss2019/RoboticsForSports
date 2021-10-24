import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiProbot } from 'react-icons/si';


class Testimonials extends Component {
  render() {

    return (
      <section id="timeline" style={{paddingTop : '80px', marginLeft : 'auto'}}>
        <div style={{ textAlign : 'center', color: '#fff', fontSize : '40px', marginBottom: '40px'}}>TIMELINE</div> 
     <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Contest Begins</h3>
    <h4 className="vertical-timeline-element-subtitle">1st October</h4>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Mid-Evaluation Submission</h3>
    <h4 className="vertical-timeline-element-subtitle">14th October</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Mid-Evaluation Submission Feedback</h3>
    <h4 className="vertical-timeline-element-subtitle">16th October</h4>
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Final Submission Link</h3>
    <h4 className="vertical-timeline-element-subtitle">31st October</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Results</h3>
    <h4 className="vertical-timeline-element-subtitle">7th November</h4>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    iconStyle={{ background: "#000524", color: '#fff' }}
    icon={<SiProbot />}
  >
    <h3 className="vertical-timeline-element-title">Prize Distribution</h3>
    <h4 className="vertical-timeline-element-subtitle">2nd Week of November</h4>
  </VerticalTimelineElement>
</VerticalTimeline>
</section>
    );
  }
}

export default Testimonials;
