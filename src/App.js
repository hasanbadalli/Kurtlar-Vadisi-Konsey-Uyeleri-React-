import React, { useState } from 'react';
import './style.css';
import Data from './Data.json';

export default function App() {
  const [searchMem, setSearchMem] = useState('');
  return (
    <div>
      <div className="container">
        <h1>Kurtlar vadisi konsey uyeleri</h1>
        <div className="input-container">
          <input
            classNam="search"
            type="text"
            placeholder="Konsey uyesi giriniz..."
            onChange={(e) => setSearchMem(e.target.value)}
          />
        </div>
        <div className="member-container">
          {Data.filter((val) => {
            if (searchMem == '') return val;
            else if (val.title.toLowerCase().includes(searchMem.toLowerCase()))
              return val;
          }).map((val) => {
            return (
              <div className="data">
                <img src={val.imgage} alt="" />
                <h3>{val.title}</h3>
                <p>{val.Description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
