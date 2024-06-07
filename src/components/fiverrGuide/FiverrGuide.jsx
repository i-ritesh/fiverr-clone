import React from 'react';
import "./FiverGuide.css"

const FiverGuide = ({item}) => {
    return (
        <>
        
            <div className="fiverr-guide-card">
                <div className="fiverr-guide-card-container">
                    <div className="fiverr-guide-main-img">
                    <img src={item.img} alt="" />
                    </div>
                    <div className="fiverr-guide-info">
                        
                        <div className="fiverr-guide-title">{item.title}</div>
                    </div>
                </div>
            </div>
        
        </>
    );
}

export default FiverGuide;
