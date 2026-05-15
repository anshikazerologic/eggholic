import React from 'react';
import './MoonCatering.css';

const MoonCatering = () => {
    return (
        <section className='moon-catering-cd' id='moon'>
            {/* Card 1 */}
            <div className="moon-card-wrapper">
                <img src='./CLASSIC.svg' alt="Classic" />
                <div className='moon-cateringBox'>
                    <li>1x Appetizer </li>
                    <li>2x Entrees (2 Curries)</li>
                    <li>1x Bread/Roti/Naan </li>
                    <li>1x Beverage </li>
                    <li>1x Dessert </li>
                </div>
                <div className='moon-price-p mobil-cat'>
                    $15/PERSON
                    <div className="moon-lkjo">(Minimum 15 people)</div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="moon-card-wrapper">
                <img src='./GRAND.svg' alt="Grand" />
                <div className='moon-cateringBox-2'>
                    <li>2x Appetizer </li>
                    <li>3x Entrees (3 Curries)</li>
                    <li>1x Bread/Roti/Naan </li>
                    <li>1x Beverage </li>
                    <li>1x Dessert </li>
                </div>
                <div className='moon-price-p-2 mobil-cat'>
                    $18/PERSON
                    <div className="moon-lkjo">(Minimum 15 people)</div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="moon-card-wrapper">
                <img src='./SIGNATURE.svg' alt="Signature" />
                <div className='moon-cateringBox-3'>
                    <li>3x Appetizer </li>
                    <li>4x Entrees (3 Curries + 1 Rice)</li>
                    <li>1x Bread/Roti/Naan </li>
                    <li>1x Beverage </li>
                    <li>1x Dessert </li>
                </div>
                <div className='moon-price-p-3 mobil-cat'>
                    $22/PERSON
                    <div className="moon-lkjo">(Minimum 15 people)</div>
                </div>
            </div>
        </section>
    );
};

export default MoonCatering;