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
                <NavLink to='/about'>О сайте</NavLink>
                <NavLink to='/posts'>Посты</NavLink>
            </div>
        </div>
    );
};

export default Navbar;