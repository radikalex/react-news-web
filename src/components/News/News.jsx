import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './News.scss'

const News = () => {
    const { articles } = useContext(GlobalContext);

    const news = articles.filter(article => article.title !== '').map((article) => {
        return (
          <div className='new-card'>
            <div className='new-card-title'>{ article.title }</div>
            <div className='new-card-byline'>{ article.byline }</div>
            <div className='new-card-body'>
                { article.multimedia ? <img className='new-card-image' src={article.multimedia[0].url} alt="Article multimedia" /> : null }
                <p>{ article.abstract }</p>
                <p>{ article.abstract }</p>
                <p>{ article.abstract }</p>
            </div>
          </div>
        );
    });

    return (
        <div className="news-container">
            {news}
        </div>
    )
}

export default News