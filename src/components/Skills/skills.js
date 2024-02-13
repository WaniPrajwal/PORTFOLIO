import React from "react";
import'./skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
    return (
        <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.I have a strong understanding of design and a keen eye for detail.I am proficient in HTML,CSS,and JavaScript,as well as design software such as Adobe Photoshop and Illustrator. </span>
        <div className="skillBars">
         <div className="skillBar">
         <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
         <div className="skillBarText">
            <h2>UI/UX/Design</h2>
            <p>This is a demo text,you can write your own content here.</p>
         </div>
         </div> 
         <div className="skillBar">
         <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
         <div className="skillBarText">
            <h2>Website Design</h2>
            <p>This demo text can be change while making the production ready website.</p>
         </div>
         </div> 
         <div className="skillBar">
         <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
         <div className="skillBarText">
            <h2>AppDesign</h2>
            <p>You can write text related to mobile app developement.</p>
         </div>
         </div>       
        </div>
        </section>
    );
}

export default skills;