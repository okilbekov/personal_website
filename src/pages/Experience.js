import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from '@material-ui/icons/Work';

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='June 2022 - present'
          iconStyle={{ background: '#3e497a', color: '#fff'}}
          icon={ <WorkIcon /> }
          >
            <h3 className='vertical-timeline-element-title'>
              USF Engineering Learning Team, Peer Mentor
            </h3>
            <h4>Tampa, FL</h4>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience