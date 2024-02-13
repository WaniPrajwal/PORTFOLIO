import React from 'react';
import'./works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';
const works = () => {
    return (
        <section id='works'> 
           <h2 className="worksTitle">My Portfolio</h2>
           <span className="worksDesc">I take pride in paying attention to the smallest detail and making sure that my work is pixel perfect.I am exicited to bring my skills and experience to help business achieve their goals and create a strong a strong online presence.  </span>
        <div className="worksImgs">
            <img src={Portfolio1} alt=""className="workImg"/>
            <img src={Portfolio2} alt=""className="workImg"/>
            <img src={Portfolio3} alt=""className="workImg"/>
            <img src={Portfolio4} alt=""className="workImg"/>
            <img src={Portfolio5} alt=""className="workImg"/>
            <img src={Portfolio6} alt=""className="workImg"/>
            
        </div>
        <button className="workBtn">See More</button>
        </section>
    );
}

export default works 