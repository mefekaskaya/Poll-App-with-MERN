import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../store/actions';

const Navbar = ({auth,logout}) => (
<div>
    <ul>
        <Fragment>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>   
        <li>
            <a onClick={logout}>Logout</a>
        </li>
        </Fragment>
    </ul>
    {auth.isAuthenticated && (<p>Logged in as {auth.user.username}</p>)}    
</div>);

export default connect(store=>({auth:store.auth}),{logout},)(Navbar);