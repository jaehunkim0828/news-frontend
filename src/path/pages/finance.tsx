import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Title from '../components/title';

export type Economy = {
  title: string,
  subTitle: string,
  path: string,
  author: string,
  img: string,
}

function Finance() {

  const economyData: Economy[] = [];

  const [data, setData] = useState(economyData);

  useEffect(() => {
    const getData = async () => {
      const datas = await axios.get("http://localhost:5000/finance");
      setData(datas.data);
      console.log(datas.data);
    };
    getData();
  }, []);
  
  return (
    <div className='main-content'>
      <div className='main-container'>
        <Title title={'금융'} room={'finance'}/>
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

export default Finance;