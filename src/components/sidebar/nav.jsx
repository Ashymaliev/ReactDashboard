import React from 'react'; 
import { navNames, navIcons } from './const';
import {Link} from 'react-router-dom' 

const Nav = () => {
  const [itemActive, setItemActive] = React.useState(0);
  const handleClick = (index) => {
    setItemActive(index)
  };

  return (
    <nav className='sidebar__nav'>
      <ul>
        {navNames.map((item, index) => {
          return (
            // onclick={() => handleClick(index)}
            <li className='sidebar__item'>
              <a className='sidebar__link' href='#'>
                <img src={navIcons[index]} alt='nav-icon' />
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;