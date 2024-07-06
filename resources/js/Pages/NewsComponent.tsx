import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NewsItem } from '../types';

interface NewsComponentProps {
  newsdata: NewsItem[];
}

const NewsComponent: React.FC<NewsComponentProps> = ({ newsdata }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Set the initial theme based on the state
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <div className="p-5">
      <div className="navbar bg-base-100 shadow-md mb-5">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Wakanda News Portal</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          <button className="btn btn-ghost" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>

      {newsdata.map((news, index) => (
        <div className="card card-side bg-base-100 shadow-xl my-5" key={index}>
          <figure>
            <img
              src={news.urlToImage}
              alt="News"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{news.title}</h2>
            <p>{news.content}</p>
            <p>
              <small className="text-muted">
                Publish Date: {new Date(news.publishedAt).toLocaleDateString()}
              </small>
            </p>
            <p>
              <small className="text-muted">Author: {news.author}</small>
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a  target="_blank" rel="noopener noreferrer" href={news.url}>
                Read More
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
