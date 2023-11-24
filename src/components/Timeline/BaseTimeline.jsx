import React from 'react'

const BaseTimeline = (props) => {
  return (
    <ul className={`timeline timeline-vertical timeline-compact timeline-snap-icon ${props.className}`}>
      {props.children}
    </ul>
  )
}

export default BaseTimeline