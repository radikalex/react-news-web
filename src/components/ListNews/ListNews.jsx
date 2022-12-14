import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Loading from "../Loading/Loading";
import News from "../News/News";
import './ListNews.scss'

const ListNews = () => {
  const { getArticles, loading } = useContext(GlobalContext);
  const [section, setSection] = useState('arts');
  const [titleFilter, setTitleFilter] = useState('');
  
  useEffect(() => {
    getArticles(section);
    // eslint-disable-next-line
  }, [section]);

  const handleSelectChange = (e) => {
    setSection(e.target.value);
    setTitleFilter('');
  }

  const handleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  }

  return (
    <main>
      <div className="newspaper-container">
        <form className="form-section">
          <h1>Filters</h1>
          <div className="filters-container">
            <div className="section-filter">
              <label htmlFor="section" className="label-section">Section: </label>
              <select name="section" id="section" className="section" onChange={handleSelectChange} value={section}>
                <option value="arts">Arts</option>
                <option value="books">Books</option>
                <option value="business">Business</option>
                <option value="fashion">Fashion</option>
                <option value="food">Food</option>
                <option value="health">Health</option>
                <option value="home">Home</option>
                <option value="insider">Insider</option>
                <option value="magazine">Magazine</option>
                <option value="movies">Movies</option>
                <option value="nyregion">NY Region</option>
                <option value="obituaries">Obituaries</option>
                <option value="opinion">Opinion</option>
                <option value="politics">Politics</option>
                <option value="realestate">Real Estate</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="sundayreview">Sunday Review</option>
                <option value="technology">Technology</option>
                <option value="theater">Theater</option>
                <option value="t-magazine">T-Magazine</option>
                <option value="travel">Travel</option>
                <option value="upshot">Upshot</option>
                <option value="us">US</option>
                <option value="world">World</option>
              </select>
            </div>
            <div className="title-filter">
              <label htmlFor="title" className="label-title">Title: </label>
              <input type='text' className="filter" id='filter' placeholder='Filter by title name...' value={titleFilter} onChange={handleFilterChange}/>
            </div>
          </div>
        </form>
        { loading 
          ? <Loading /> 
          : <div className="newspaper">
              <div className="newspaper-header">Radikalex Post</div>
              <div className="newspaper-subhead">{Date().slice(0, 16)}</div>
              <News filter={titleFilter}/>
            </div>
        }
      </div>
    </main>
  )
}

export default ListNews