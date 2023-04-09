import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Artist turned Progaming Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        I am Matt, I am new programmer and developer who is learning to code. I have experience in both front and back end development but I 
        want to say I have more aptitude, at this current moment, for front end. Back end is really fun to figure out and is really rewarding but i
        feel the most satisfaction from front end. I also have a cute dog named Baby!
      </p>
      <p className="content">
        I am pretty much the "product manager" for resources that will help teach users about what they need in specific moments 
        and circumstances. I help them explore content on their terms using videos, audio such as music, and documents from research
        or more entertainment based documents all of this is focused on advancing their learning.
      </p>
    </div>
  );
}

export default About;