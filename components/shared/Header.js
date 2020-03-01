
import React, { useState } from 'react';
import Link from 'next/link';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  //BootStrap nav link
const BsNavLink = (props) => {
    const { route, title } = props;
    return (
        <Link href={route}>
        <a className="nav-link"> {title} </a>
        </Link>
    )
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Tyrone Arthurs</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem>
            <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem>
            <BsNavLink route="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem>
            <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
            <NavItem>
            <BsNavLink route="/cv" title="CV" />
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/kevonx17/NextPortV1">GitHub</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Example;