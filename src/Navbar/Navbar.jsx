import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    // const [isNavbarOpen,setNavbarOpen] = useState(false);

    // const toggleNavbar=()=>{
    //     setNavbarOpen(!isNavbarOpen);
    // };


  return (
    <div className="navbar">
    <div className="left">
      <Link to="/" className="link-home">
        SPR
      </Link>
    </div>
    {/* <div className="menuIcon"  onClick={toggleNavbar}>< MenuIcon/></div> */}
    <div className="right">
      <ul className="nav-right">
        <li >
          <Link to="/services" className="link-right" >Services</Link>
        </li>
        <li>
          <Link to="/about"   className="link-right">About</Link>
        </li>
        <li>
          <Link to="/contact"   className="link-right">Contact</Link>
        </li>
        <li>
          <Link to="/book-now"  className="link-right">Book Now</Link>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar






// import React, { useState } from 'react';
//import './navbar.css'; // Adjust the import according to your file structure

// const Navbar = () => {
//     const [isNavbarOpen, setNavbarOpen] = useState(false); // State to manage navbar visibility

//     const toggleNavbar = () => {
//         setNavbarOpen(!isNavbarOpen); // Toggle the state
//     };

//     return (
//         <div className="navbar">
//             <div className="left">Logo</div>
//             <div className="hamburger" onClick={toggleNavbar}>
//                 &#9776; {/* Hamburger icon (three horizontal lines) */}
//             </div>
//             <ul className={`nav-right ${isNavbarOpen ? 'show' : ''}`}>
//                 <li className="link-home">Home</li>
//                 <li className="link-right">Link 1</li>
//                 <li className="link-right">Link 2</li>
//                 <li className="link-right">Link 3</li>
//             </ul>
//         </div>
//     );
// }

// export default Navbar;
