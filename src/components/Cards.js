import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1> COURSES OFFERED</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                    <CardItem 
                    src="images/img-9.jpg"
                    text="COMPANY SECRETARY "  
                    label="Foundation Program"
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-2.jpg"
                    text="CHARTERED ACCOUNTANCY"  
                    label="CMA intermediate"
                    path='/services'
                    />
                    
                    <CardItem 
                    src="images/img-7.jpg"
                    text="SCHOOL OF MANAGEMENT STUDIES"  
                    label="BBA and MBA"
                    path='/services'
                    />
                   
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
