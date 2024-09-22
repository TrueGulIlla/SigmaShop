import React from 'react';
import s from './sneakersCards.css'
import {sneakersCards} from "../../data/sneakersCards.js";
import SneakersCard from "./SneakersCard/SneakersCard.jsx";

const SneakersCards = () => {
    return (
        <section className={s.sneakersCard}>
            <div className={`${s.sneakersCard__container} container`}>
                <div className="cards">
                    {sneakersCards.map((card) => (
                        <SneakersCard
                            key={card.id}
                            title={card.title}
                            category={card.category}
                            imageUrl={card.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SneakersCards;