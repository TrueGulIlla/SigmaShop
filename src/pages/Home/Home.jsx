import React from 'react';
import s from './home.module.css'

import MySwiper from "../../components/MySwiper/MySwiper.jsx";

const Home = () => {
    return (
        <div className={s.home}>
            <MySwiper/>
        </div>
    );
};

export default Home;