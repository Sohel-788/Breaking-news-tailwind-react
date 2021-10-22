import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=Apple&from=2021-10-21&sortBy=popularity&apiKey=e892ab7de87f4bc9a1d2e35c9c17e50e')
            .then(res => res.json())
            .then(data => setNews(data.articles))
    }, [])
    return (
            <div class="box-content p-4 mt-5 flex flex-wrap gap-8 justify-center">
            {
                news.map(bNews => <News bNews={bNews}></News>)
            }
            </div>
    );
};

export default Newspaper;