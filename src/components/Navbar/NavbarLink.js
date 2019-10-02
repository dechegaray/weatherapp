import React from 'react'
import PropTypes from 'prop-types'

const navbarLink = props => {
  const {link, label, icon, onSelectNavLink} = props

  return (
    <li onClick={() => onSelectNavLink(label)}>
      <a href={link}>
        <i className={icon}></i>
        {label}
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
