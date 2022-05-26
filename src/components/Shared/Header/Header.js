import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../resources/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import avatar from '../../../resources/avatar.png'
import { signOut } from 'firebase/auth';
const Header = ({ navClick }) => {
    const [user] = useAuthState(auth);

    const changeBgScroll = async () => {
        const navbar = document.getElementsByClassName('navbar')[0];
        if (window.scrollY >= 100) {
            await navbar.classList.add('nav-bg')
        }
        if (!window.scrollY || window.scrollY <= 99) {
            try {
                navbar.classList.remove('nav-bg')
            } catch {

            }
        }
    }
    window.addEventListener('scroll', changeBgScroll);

    const hanvleSignout = () => {
        signOut(auth);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container">
                {/* <a className="navbar-brand" href='#'> */}
                <img src={logo} className="img-fluid logo-width" alt="Website Logo" />
                {/* </a> */}
                <button onClick={navClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-start align-items-lg-center">

                        <li className="nav-item">
                            <NavLink className="nav-link " to='/home'>Home</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink to="/inventory" className="nav-link" >Inventory</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" >Blog</NavLink>
                        </li>

                        {
                            user ?
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/manageItems" className="nav-link" >Manage Items</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/addItem" className="nav-link" >Add Item</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/myItem" className="nav-link" >My Items</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <button onClick={hanvleSignout} className="nav-link signOut" >Sign Out</button>
                                    </li>

                                    <li className="nav-item dpImage">
                                        <img src={user.photoURL ? user.photoURL : avatar} className="img-fluid rounded-circle" alt="" />
                                    </li>

                                </>
                                :
                                <li className="nav-item">
                                    <NavLink to="/join" className="nav-link" >Join</NavLink>
                                </li>

                        }

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;