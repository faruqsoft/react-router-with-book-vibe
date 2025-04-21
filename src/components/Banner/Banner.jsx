import React from 'react';
import BookImage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="flex  justify-between items-center  bg-white p-20">
            <div>
                <h1>Lorem ipsum dolor sit amet.</h1>
                <button className="btn btn-primary">Test Test</button>
            </div>
            <div>
                <img className='' src={BookImage} alt=""/>
            </div>
        </div>
    );
};

export default Banner;