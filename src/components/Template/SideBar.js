import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adam J. Weintraut</h2>
        <p><a href="mailto:adam@adamjerome.io">adam@adamjerome.io</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Adam. I am a Senior Data Scientist at <a href="https://target.com">Target </a>
        and a graduate student in the
        <a href="https://mids.berkeley.edu/"> Berkeley MIDS Program. </a>
        I went to UW-Madison for undergrad, where I earned
        B.S. degrees in Computer Engineering + Computer Science.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Adam J. Weintraut <Link to="/">adamjerome.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
