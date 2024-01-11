import React, { useState } from 'react';
import './Ass2.css';

export default function Ass2() {
    const [searchRobot, setSearchRobot] = useState('');
    const [robots, setRobots] = useState([]);

    const handleSearch = async () => {
        try {
            let url = `https://robohash.org/ ${searchRobot}`;
            let response = await fetch(url);
            let robotUrl = await response.url;
            setRobots([robotUrl]);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <>
        <div className="robot">
        <div className='search'>
                <input type='text' value={searchRobot} onChange={(element) => setSearchRobot(element.target.value)} />
                <button onClick={handleSearch}> Search Robot</button>
        </div>
            {/* <h2>Robots List:</h2> */}
            <div className='display'>
                
                    {robots.map((robotUrl, index) => (
                    
                        <img key ={index} src={robotUrl} alt=""  />
                    
                    ))}

            </div>
        </div>
            
        </>
    )
}
