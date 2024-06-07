import React from 'react';
import './FiverrInspire.css'

const FiverrInspire = ({item}) => {
    return (
        <>
        
            <div className="fiverr-inspire-card">
                <div className="fiverr-inspire-card-container">
                    <div className="fiverr-inspire-main-img">
                    <img src={item.img} alt="" />
                    </div>
                    <div className="fiverr-inspire-info">
                        <div className="fiverr-inspire-logo">
                            <img src={item.logo} alt="" />
                        </div>
                        <div className="fiverr-inspire-title">{item.title}</div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default FiverrInspire;
