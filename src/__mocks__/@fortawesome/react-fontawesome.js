import React from 'react'

export function FontAwesomeIcon(props) {
  const {icon, title} = props
  return <i className={`fa ${icon}`} title={title ? title : ''} />
}
