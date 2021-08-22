import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <React.Fragment>
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

          <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div class="sidebar-brand-icon">
              <i class="fas fa-tree"></i>
            </div>
            <div tag={Link} class="sidebar-brand-text mx-3">WynTree</div>
          </a>

          <hr class="sidebar-divider my-0" />

          <li class="nav-item">
            <a class="nav-link" href="https://hackerspace.govhack.org/projects/wyntree">
              <i class="fas fa-fw fa-chart-area"></i>
              <span>GovHack Project and Team</span>
            </a>
          </li>

        </ul>
      </React.Fragment>
    );
  }
}
