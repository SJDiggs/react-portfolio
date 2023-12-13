// PATH:  pages/about.jsx
import { useState, useEffect } from "react"
import "./About.css"

function About() {
    // 1. create state to hold about data
    const [about, setAbout] = useState(null);
  
    // 2. create function to make api call
    const getAboutData = async () => {
  
      // 3a. make api call and get response
      const response = await fetch("./about.json")

      // 3b. turn response into javascript object
      const data = await response.json();

    // 3c. set the about state to the data
      setAbout(data);
};

// 3. make an initial call for the data inside a useEffect, so it only happens once on component load
useEffect(() => { getAboutData() } , []);

// define a function that will return the JSX needed once we get the data
const loaded = () => (
  
  <div className="my-info">
    <div className="bioPic">
      <img src={about.headshot} className="headshot"/>
    </div>
    {/* <h2>{about.name}</h2>
    <h3>{about.email}</h3> */}
    <p>{about.bio}</p>
  </div>
);

// if data arrives return the result of loaded, if not, an h1 that says loading
return about ? loaded() : <h1>Loading...</h1>;
}

export default About;