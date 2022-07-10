import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018-2020'
          iconStyle={{ background: '#3e497a', color: '#fff'}}
          icon={ <SchoolIcon /> }
          >
            <h3 className='vertical-timeline-element-title'>
              Academic Lyceum of NamSU, Namangan, Uzbekistan
            </h3>
            <p>Academic Lyceum Diploma, GPA: 4.8/5</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience