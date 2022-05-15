import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';
import classes from './Navbar.module.css';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };
    
    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>
                Выйти
            </MyButton>
            <div className={classes.links}>
                <NavLink className={classes.link} to='/about'>О сайте</NavLink>
                <NavLink className={classes.link} to='/posts'>Посты</NavLink>
                <NavLink className={classes.link} to='/redux'>Redux</NavLink>
                <NavLink className={classes.link} to='/redux-saga'>Redux-saga</NavLink>
            </div>
        </div>
    );
};

export default Navbar;