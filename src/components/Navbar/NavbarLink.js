import React from 'react'
import PropTypes from 'prop-types'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const navbarLink = props => {
  const {link, label, icon, activePage, onSelectNavLink} = props
  const highlighterClass =
    activePage === label ? 'highlighter active' : 'highlighter'

  return (
    <li onClick={() => onSelectNavLink(label)}>
      <a href={link}>
        <FontAwesomeIcon icon={icon} />
        <p>{label}</p>
        <div className={highlighterClass}></div>
      </a>
    </li>
  )
}

export default navbarLink

navbarLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onSelectNavLink: PropTypes.func.isRequired,
}
