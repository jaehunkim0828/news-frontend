import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Title from '../components/title';
import { Economy } from './finance';

function Securities() {
  const [data, setData] = useState<Economy[]>([]);
  
  const getData = async () => {
    const datas = await axios.get("http://localhost:5000/securities");
    setData(datas.data);
  };

  useEffect(() => { 
    getData();
  }, []);
  return (
    <div className='main-content'>
      <div className='main-container'>
        <Title title={'증권'} room={'securities'}/>
        <div>
          <hr />
          <div className='hot-list'>  
            {
              data.map( (data, i) => 
                <div key={i} style={{ width: '70%',minWidth: '10rem' }}>
                  <button 
                    onClick={() => {window.location.href = data.path;}}
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
    </div>
  )
}

export default Securities;