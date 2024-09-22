import React from 'react';
import s from './welcome.module.css'

const Welcome = ({subtitle, title,text,img}) => {
    return (
        <section className={s.welcom}>
            <div style={{backgroundImage: `url(${img})`}} className={s.welcom__slide}>
                <div className={`${s.welcom__container} container`}>
                    <div className={s.welcom__content}>
                        <h1 className={s.welcom__title}>{title}</h1>
                        <p className={s.welcom__subtitle}>{subtitle}</p>
                    </div>
                    <div className={s.welcom__text}>{text}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;