import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navvbare.css';
function Navvbare() {
  const [click, setClick] = useState(false);
  const [button, setButton]= useState (true);
  const handleClick =() => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
      if (window.innerWidth<=960){
          setButton(false);
      } else {
          setButton (true);
      }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize',showButton);

  return (
      <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            TRVL <i className='fab fa-typo3' />
          </Link>
         <div className='menu-icon' onclick={handleClick}>
           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/comunity' className='nav-links' onClick={closeMobileMenu}>
                comunity
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Offers' className='nav-links' onClick={closeMobileMenu}>
                Offers
              </Link>
            </li>
         <li className='nav-item'>
              <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
          <li className='nav-item'>
              <Link to='/Profil' className='nav-links' onClick={closeMobileMenu}>
                Profile
              </Link>
            </li>
	         <li>
              <Link to='/Signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign up
              </Link>
            </li>
         </ul>

            {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}

        </div>
      </nav>
     </>
    );
  } 
  export default Navvbare;