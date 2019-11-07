import React from "react";

export default class About extends React.Component {
  render() {
    return (
      
      <div className="AboutUs">
      <div className="container">
          <h1>About Us</h1>
          <div className="row">
            <div className="col-md-6">
              <h2>Matt Ho</h2>
              <img className="Matt" src={require("../aboutme/matt.jpg")} alt="matt" width="215" height="215" ></img>
              <div>
                Hey Guys, this is Matt Ho. I'm the team lead for this project.I love
                music, fitness, and sports. <br />
                I'm an aspiring full stack developer.
                <br />
                <br />
              </div>
              </div>
              <div className="col-md-6">
              <h2>Justin Shee</h2>
              <img className="Justin" src={require("../aboutme/justin.jpg")} alt="justin" width="215" height="215" ></img>
              <div>
                Backend Lead for team11 of CSC648. I'm working towards a computer
                science major at San Francisco <br />
                State University. I've had many experiences with java but recently
                have started learning many other language <br />
                such as ruby and swift. My dream job would be anything that has to do
                with servers because it's something I <br />
                have worked with before even thinking about being a computer major{" "}
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Jason Chow</h2>
              <img className="Jason" src={require("../aboutme/jason.jpg")} alt="jason" width="215" height="215" ></img>
              <div>
                Senior SFSU student majoring in Computer Science I am interested in
                designing UI and iOS applications <br />
                Currently, I am still developing my skills and testing the waters to
                see if iOS developmemnt is the right fit for me <br />
                This semester I am actively learning swift and javascript and hope to
                learn ruby by the end of the semester <br />
                <br />
              </div>
            </div>
            <div className="col-md-6">
              <h2>Dian Zhu</h2>
              <img className="Dian" src={require("../aboutme/dian.jpg")} alt="dian" width="215" height="215" ></img>
              <div>
                I was born in China. I am proficient in two languages: Chinese and
                English. I immigrated to United States with
                <br />
                my family when I was 15 years old. I has lived in San Francisco since
                I immigrated to Unites States. I has
                <br />
                become an U.S. citizen since June 07th, 2018. I have studied at San
                Francisco State University since January 2017.
                <br />I major in computer science. I was a 2018 summer intern at
                Southern California Earthquake Center. I worked the software <br />
                development project during the summer internship. I learned computer
                programming skills and software development experience <br />
                from this summer internship. Now I am a senior undergraduate student
                at my university. I will graduate from university in 2019. <br />I
                hope that I can become an excellent software developer for future
                career.
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2>Ghulam Khan</h2>
              <img className="Ghulam" src={require("../aboutme/ghulam.JPG")} alt="ghulam" width="215" height="215" ></img>
              <div>
                My name is Mustafa and i am really passionate about building new
                products with the user mindset. I like to explore different
                <br />
                techniques on how to approach a product when developing.
                <br />
                <br />
              </div>
            </div>
            <div className="col-md-6">
              <h2>Riza Shrestha</h2>
              <img className="Riza" src={require("../aboutme/riza.jpg")} alt="riza" width="215" height="215" ></img>
              <div>
                I'm Riza Shrestha, student of San Francisco State University. I am
                originally from Nepal and moved to U.S 7 years ago. Currently
                <br />
                pursuing my Computer Science degree and expected to graduate coming
                fall.
                <br />
                <br />
                In my free time i like to go hiking and learn new stuffs. I was really
                interested in computer science from my high school days <br />
                due to which i choose computer science as my major.
                <br />
                <br />
              </div>
            </div>
          </div>
          <h2>Juan Valdez</h2>
          <img className="Juan" src={require("../aboutme/person.jpg")} alt="juan" width="215" height="215" ></img>
          <p>
            I'm Juan Valdez, a Computer Science student at San Francisco State
            University. I have experience in C, C++, Java, html, CSS, and
            JavaScript and always willing to learn more new languages. When I'm
            not studying or coding, I'm skateboarding for fun.
          </p>
        </div>
        </div>
    );
  }
}
