import React from 'react';
import Link from 'next/link';
import { NavContainer } from './styles';

const Navigation = () => (
  <NavContainer>
    <div className="container">
      <div className="nav-columns">
        <div className="nav-column">
          <div className="nav-label">Menu</div>

          <ul className="nav-links">
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>

            <li>
              <Link href="/approach">Approach</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="nav-column">
          <div className="nav-label">Contact</div>

          <div className="nav-infos">
            <ul className="nav-info">
              <li className="nav-info-label">Email</li>

              <li>
                <Link href="/contact">Get in touch with us.</Link>
              </li>

              <li>
                <Link href="/audit">Get a free audit</Link>
              </li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Headquarters</li>
              <li>ABCD</li>
              <li>ABCD</li>
              <li>ABCD</li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Phone</li>
              <li>+91 8898162324</li>
            </ul>

            <ul className="nav-info">
              <li className="nav-info-label">Legal</li>
              <li>Privacy and Cookie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </NavContainer>
);

export default Navigation;
