import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import event from '../public/events.json'
import {
  Flex,
} from '@chakra-ui/react'
export default function Timelines(){
  const { events } = event
  return(
    <Flex bgColor='purple.100'>
      <VerticalTimeline >
      {events.map(event => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date= {event.date}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={< HiAcademicCap/>}
                >
                <h3 className="vertical-timeline-element-title">{event.event}</h3>
                <p>
                {event.description}
                </p>
              </VerticalTimelineElement>
      )})}
    </VerticalTimeline>
    </Flex>
  );
}