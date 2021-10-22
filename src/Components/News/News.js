import React from 'react';

const News = (props) => {
    const {title,urlToImage,description}=props.bNews;
    return (
            <div className='w-96 border border-green-300 rounded p-2 shadow-2xl'>
                <img className='w-96 h-60' src={urlToImage} alt="" />
                <h3 className='text-3xl'>{title}</h3>
                <p className='mt-2 text-xl'>{description}</p>
            </div>
    );
};

export default News;