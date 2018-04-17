import React from 'react';
import CodepenIcon from './icons/CodepenIcon';
import EmailIcon from './icons/EmailIcon';
import FacebookIcon from './icons/FacebookIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';

class Socials extends React.Component {
  render() {
    return (
      <div className="socials__container">
        <footer className="socials">
          <ul className="socials__list">
            <li className="socials__list-item">
              <a className="socials__list-link" href="#">
                <CodepenIcon />
              </a>
            </li>
            <li className="socials__list-item">
              <a className="socials__list-link" href="#">
                <EmailIcon />
              </a>
            </li>
            <li className="socials__list-item">
              <a className="socials__list-link" href="#">
                <GithubIcon />
              </a>
            </li>
            <li className="socials__list-item">
              <a className="socials__list-link" href="#">
                <FacebookIcon />
              </a>
            </li>{' '}
            <li className="socials__list-item">
              <a className="socials__list-link" href="#">
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default Socials;
