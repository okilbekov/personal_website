import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SchoolIcon from '@material-ui/icons/School'

const Education = () => {
  return (
    <div className='education'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2018-2020'
          iconStyle={{ background: '#3e497a', color: '#fff'}}
          icon={ <SchoolIcon /> }
          >
            <h3 className='vertical-timeline-element-title'>
              Academic Lyceum of NamSU
            </h3>
            <h4>
              Namangan, Uzbekistan
            </h4>
            <p>Academic Lyceum Diploma, GPA: 4.8/5</p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='August 2021 - May 2025 (expected)'
          iconStyle={{ background: '#3e497a', color: '#fff'}}
          icon={ <SchoolIcon /> }
          >
            <h3 className='vertical-timeline-element-title'>
              University of South Florida
            </h3>
            <h4>
              Tampa, FL
            </h4>
            <p>Bachelor of Science in Computer Science, GPA: 3.9/4.0</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Education