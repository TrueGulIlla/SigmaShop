import React from 'react';
import s from './header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={`${s.header__container} container`}>
                <div className={s.header__logo}>SIGMA.shop</div>
                <nav className={s.header__navbar}>
                    <ul className={s.header__list}>
                        <li className={s.header__item}>HOME</li>
                        <li className={s.header__item}>SHOP</li>
                        <li className={s.header__item}>ABOUT</li>
                    </ul>
                </nav>
            </div>

        </header>
    );
};

export default Header;