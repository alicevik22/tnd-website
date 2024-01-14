import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NisargPic from './images/nisargnayak.jpeg';
import './About.css';
function About() {
  return (
        <div class ="about-club">
            <h1>What is TND ?</h1>
            <p class="club-description">The New Developer (TND) club is the student led organization at Mohawk College dedicated to empowering emerging 
                programmers.
                TND serves students not only in their academics journey but also assists them to find their co-op, bridge the gap between 
                college learning and real life problems. 
                Our aim is not limitent to only skills development, we aim for  
            </p>
            <h3>"In the ralme of possibilities, we empower emerging programmers to script their success stories together"</h3>
        
          
            <div className="aim-statement">
            <h2>"We aim for"</h2><i className="fas fa-hand-point-right"></i>
            <ul className="goals-list">
            <li><span className="arrow">&rarr;</span>Skill Development</li>
            <li><span className="arrow">&rarr;</span>Industry Insights</li>
            <li><span className="arrow">&rarr;</span>Competition and Growth</li>
            <li><span className="arrow">&rarr;</span>Collaboration</li>
            </ul>
        </div>
        <div class="representative-container">
            <h1>Club Representatives</h1>
        <div class="introduction">
            <div class="club-representative-card">
                <img class="card-img-top" src={NisargPic} alt="Nisarg's Pic" />
            <div class="card-body">
            <h5 class="card-title">Nisarg Nayak [Title] </h5>
   
            <p class="card-text">Hi, I am Nisarg. I'm cureently in the second semester of Software Support course at Mohawk college.
            I am also serving to the college community as a Peer Tutor where I focus on learning simultaneously teaching to my fellow students.
            Besides of studying and tutoring, I love reading and travelling. I am passionate about coding and always keep myself updated
            with emerging technologies. Hope to see you all joining the TND and speed up your learning journey!
            </p>
            </div>

            <div class="card-body">
            <a href="https://www.linkedin.com/in/nisarg-nayak/" class="card-title ">LinkedIn</a>
            <a href="https://github.com/NisargNayak17/" class="card-title">GitHub</a>
            </div>
            </div>     

            <div class="club-representative-card">
                <img class="card-img-top" src={NisargPic} alt="Nish's Pic" />
            <div class="card-body">
            <h5 class="card-title">Nisarg Nayak [Title] </h5>
   
            <p class="card-text">Hi, I am Nisarg. I'm cureently in the second semester of Software Support course at Mohawk college.
            I am also serving to the college community as a Peer Tutor where I focus on learning simultaneously teaching to my fellow students.
            Besides of studying and tutoring, I love reading and travelling. I am passionate about coding and always keep myself updated
            with emerging technologies. Hope to see you all joining the TND and speed up your learning journey!
            </p>
            </div>

            <div class="card-body">
            <a href="https://www.linkedin.com/in/nisarg-nayak/" class="card-title">LinkedIn</a>
            <a href="https://github.com/NisargNayak17/" class="card-title">GitHub</a>
            </div>
            </div>  

            <div class="club-representative-card">
                <img class="card-img-top" src={NisargPic} alt="Pic of the third contributor" />
            <div class="card-body">
            <h5 class="card-title">Nisarg Nayak [Title] </h5>
   
            <p class="card-text">Hi, I am Nisarg. I'm cureently in the second semester of Software Support course at Mohawk college.
            I am also serving to the college community as a Peer Tutor where I focus on learning simultaneously teaching to my fellow students.
            Besides of studying and tutoring, I love reading and travelling. I am passionate about coding and always keep myself updated
            with emerging technologies. Hope to see you all joining the TND and speed up your learning journey!
            </p>
            </div>

            <div class="card-body">
            <a href="https://www.linkedin.com/in/nisarg-nayak/" class="card-title">LinkedIn</a>
            <a href="https://github.com/NisargNayak17/" class="card-title">GitHub</a>
            </div>
            </div>     

            <div class="club-representative-card">
                <img class="card-img-top" src={NisargPic} alt="Pic of the fourth contributor" />
            <div class="card-body">
            <h5 class="card-title">Nisarg Nayak [Title] </h5>
   
            <p class="card-text">Hi, I am Nisarg. I'm cureently in the second semester of Software Support course at Mohawk college.
            I am also serving to the college community as a Peer Tutor where I focus on learning simultaneously teaching to my fellow students.
            Besides of studying and tutoring, I love reading and travelling. I am passionate about coding and always keep myself updated
            with emerging technologies. Hope to see you all joining the TND and speed up your learning journey!
            </p>
            </div>

            <div class="card-body">
            <a href="https://www.linkedin.com/in/nisarg-nayak/" class="card-title">LinkedIn</a>
            <a href="https://github.com/NisargNayak17/" class="card-title">GitHub</a>
            </div>
            </div>     
        </div>
        </div>
        </div>
  )
}

export default About