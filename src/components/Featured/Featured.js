import './Featured.css';
import axios from 'axios';
import BTC from '../../assets/btc-img.png';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const Featured = () => {
      const [data , setData] = useState(null);
      const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'
	
      useEffect(() => {
            axios.get(url).then((response) => {
                  setData(response.data);
            }).catch((error) => {
                  console.log(error);
            })
      } , [])

      console.log(data);

      if (!data) return null;

      return (
            <div className='featured'>
                  <div className='container'>
                        {/* Left Section */}
                        <div className='left'>
                              <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                              <p>See all available assets: Cryptocurrencies and NFT's</p>
                              <button className='btn'>See More Coins</button>
                        </div>
                        {/* Right Section */}
                        <div className='right'>
                              {data.map((card) => (
                                    <div className='card'>
                                          <div className='top'>
                                                <img src={card.image} alt='/' />
                                          </div>
                                          <div>
                                                <h5>{card.name}</h5>
                                                <p>${card.current_price.toLocaleString()}</p>
                                          </div>
                                          {card.price_change_percentage_24h < 0 ? (
                                                <span className='red'>
                                                      <FiArrowDown className='icon'/>
                                                      {card.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                          ) : (
                                                <span className='green'>
                                                      <FiArrowUpRight className='icon'/>
                                                      {card.price_change_percentage_24h.toFixed(2)}%
                                                </span>
                                          )}
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
};

export default Featured;
