import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import axios from 'axios'
import { FaHome, FaBookOpen, FaCommentDollar, FaSearch, FaUserAlt } from "react-icons/fa";
import Navbar from '../Navbar/Navbar';

function Header() {
    const auth = useSelector(state => state.auth)
    
    const {user, isLogged} = auth 

    const handleLogout = async () => {
        try {
             await axios.get('/user/logout')
             localStorage.removeItem('firstLogin')
             window.location.href = "/";
        }catch (err) {
             window.location.href = "/";
        }
    }

    const userLink = () => {
        return <li className = "drop-nav">
            <Link to = "#" className ="avatar" >
            <img src={user.avatar} alt=""/> {user.name} <i className="fas fa-angle-down"></i>
            </Link>
            <ul className="dropdown">
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
            </ul>
        </li>
    }

    const transForm = {
        transform: isLogged ? "tranlateY(-5px)": 0
    }

    return(
       <header>
           <div className = "logo">
               <h3><Link to="/" style={{ textDecoration: 'none' }} >Island Wide Offers</Link></h3>
           </div>
       
             <ul style = {transForm}>
                 <li><Link to="/" style={{ textDecoration: 'none' }} > <FaHome/> Home</Link></li>
                 <li><Link to="/" style={{ textDecoration: 'none' }} ><FaBookOpen/> About US</Link></li>
                 <li><Link to="/" style={{ textDecoration: 'none' }} ><FaCommentDollar/> Offers</Link></li>

               
                <li> <input type ="search" placeholder="Search here" id="search"
                 /><Link to="/" style={{ textDecoration: 'none' }} > <FaSearch/></Link></li>

                <li><Navbar/></li>
                 
             </ul>


       </header>
    )
}

export default Header