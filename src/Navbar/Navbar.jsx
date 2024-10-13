// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import "./Navbar.css"
// import MenuIcon from '@mui/icons-material/Menu';

// const Navbar = () => {
//     // const [isNavbarOpen,setNavbarOpen] = useState(false);

//     // const toggleNavbar=()=>{
//     //     setNavbarOpen(!isNavbarOpen);
//     // };


//   return (
//     <div className="navbar">
//     <div className="left">
//       <Link to="/" className="link-home">
//         SPR
//       </Link>
//     </div>
//     {/* <div className="menuIcon"  onClick={toggleNavbar}>< MenuIcon/></div> */}
//     <div className="right">
//       <ul className="nav-right">
//         <li >
//           <Link to="/services" className="link-right" >Services</Link>
//         </li>
//         <li>
//           <Link to="/about"   className="link-right">About</Link>
//         </li>
//         <li>
//           <Link to="/contact"   className="link-right">Contact</Link>
//         </li>
//         <li>
//           <Link to="/book-now"  className="link-right">Book Now</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
//   )
// }


// export default Navbar







// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// const Navbar = () => {
//     const [isNavbarOpen, setNavbarOpen] = useState(false);

//     const toggleNavbar = () => {
//         setNavbarOpen(!isNavbarOpen);
//     };

//     return (
//         <div className="navbar">
//             <div className="left">
//                 <Link to="/" className="link-home">SPR</Link>
//             </div>
//             <div className="menuIcon" onClick={toggleNavbar}>
//                 {isNavbarOpen ? <CloseIcon /> : <MenuIcon />}
//             </div>
//             <div className={`right ${isNavbarOpen ? 'open' : ''}`}>
//                 <ul className="nav-right">
//                     <li>
//                         <Link to="/services" className="link-right">Services</Link>
//                     </li>
//                     <li>
//                         <Link to="/about" className="link-right">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact" className="link-right">Contact</Link>
//                     </li>
//                     <li>
//                         <Link to="/book-now" className="link-right">Book Now</Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);
    // const history = useHistory();

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };

    const handleLinkClick = () => {
        setNavbarOpen(false);
    };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" className="link-home" onClick={handleLinkClick}>SPR</Link>
            </div>
            <div className="menuIcon" onClick={toggleNavbar}>
                {isNavbarOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
            <div className={`right ${isNavbarOpen ? 'open' : ''}`}>
                <ul className="nav-right">
                    <li>
                        <Link to="/services" className="link-right" onClick={handleLinkClick}>Services</Link>
                    </li>
                    <li>
                        <Link to="/about" className="link-right" onClick={handleLinkClick}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link-right" onClick={handleLinkClick}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/book-now" className="link-right" onClick={handleLinkClick}>Book Now</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;