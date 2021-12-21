import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Title from '../components/title';


function Home() {
  type HOT = {
    title: string,
    path: string,
    author: string,
    img: string,
  }
  const hotData: HOT[] = [];
  const [data, setData] = useState(hotData);

  const newUrl = "https://news.naver.com";

  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get("http://localhost:5000/top");
      setData(datas.data);
      console.log(datas.data);
    };
    getData();
  }, []);

  return (
    <div className='main-content'>
      <div className='main-container'>
        <div>
          <Title title={'Top5'} room={'top'}/>
        </div>
        <hr />
        <div className='hot-list'>  
          {
            data.map( (data, i) => 
              <div key={i} style={{ width: '70%',minWidth: '10rem' }}>
                <button 
                  onClick={() => {window.location.href = newUrl + data.path;}}
                >
                  <div style={{ padding: '4% 0 0 4%'}}>
                    <div className='title'>{data.title}</div>
                    <div className='author'>{data.author}</div>
                  </div>
                  <img src={data.img} alt='none' />
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home;