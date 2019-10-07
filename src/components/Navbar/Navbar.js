import React, {Component} from 'react'
import NavbarLink from './NavbarLink'
import './Navbar.css'

const HOME_PAGE_ID = 'Home'
const LOCATION_PAGE_ID = 'Location'
const SETTINGS_PAGE_ID = 'Settings'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activePage: HOME_PAGE_ID,
    }

    this.handleNavClick = this.handleNavClick.bind(this)
  }

  handleNavClick(pageId) {
    this.setState({activePage: pageId})
  }

  render() {
    const {activePage} = this.state

    return (
      <ul className="navbar">
        <NavbarLink
          link={'/home'}
          label={HOME_PAGE_ID}
          icon="home"
          activePage={activePage}
          onSelectNavLink={this.handleNavClick}
        />
        <NavbarLink
          link={'/location'}
          label={LOCATION_PAGE_ID}
          icon="compass"
          activePage={activePage}
          onSelectNavLink={this.handleNavClick}
        />
        <NavbarLink
          link={'/settings'}
          label={SETTINGS_PAGE_ID}
          icon="cog"
          activePage={activePage}
          onSelectNavLink={this.handleNavClick}
        />
      </ul>
    )
  }
}

export default Navbar
