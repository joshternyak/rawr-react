import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import DarkLogo from '../../static/images/dark-logo.svg';
import LightLogo from '../../static/images/light-logo.svg';
import Button from '../Button';

function Menu(props) {
  const Logo = props.theme === 'light' ? DarkLogo : LightLogo;
  return (
    <div
      className={`Menu ${props.theme === 'dark' ? 'Menu--dark' : ''} 
        ${props.mode === 'vertical' ? 'Menu--vertical' : ''} 
      `}
    >
      <a href="/">
        <img src={Logo} alt="logo" className="Menu__logo" />
      </a>
      <ul
        className={`Menu__list ${props.mode === 'vertical' ? 'Menu__list--vertical' : ''}`}>
        {props.links.map((link, index) => {
          return (
            <li
              className={`Menu__list-item ${props.mode === 'vertical' ? 'Menu__list-item--vertical' : ''}`}
              key={index}>
              <a
                href={link.url}
                className={`Menu__list-item-link 
                 ${props.theme === 'dark' ? 'Menu__list-item-link--dark' : ''}
              `}>
                {link.text}
              </a>
            </li>
          );
        })}
        {props.btn !== '' &&
        <Button className="Menu__btn">
          {props.btn}
        </Button>
        }
      </ul>
    </div>
  );
}

Menu.propTypes = {
  mode: PropTypes.string,
  theme: PropTypes.string,
  links: PropTypes.array,
  btn: PropTypes.string,
};

Menu.defaultProps = {
  mode: 'horizontal',
  theme: 'light',
  links: [
    {
      url: '#',
      text: 'Home',
    },
    {
      url: '#',
      text: 'About',
    },
    {
      url: '#',
      text: 'Contact',
    },
  ],
  btn: '',
};

export default Menu;
