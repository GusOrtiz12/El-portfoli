import React from 'react';

class About extends React.Component{
    render() {
      return (
  <>
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/gus.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>Analytical, intuitive, resourceful, hands on intern, with great interpersonal relations skills. Driven individual, with a ​history of working in the non-profit organization management industry,​ excels in a fast-paced environment with a strong passion to learning and gaining new experiences​. Skilled in advertising​ and currently seeking an opportunity to contribute with a team as a full-stack engineer.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Me</h2>
                  <p className="address">
                    <span>Gus Ortiz</span><br />
                    <span>gaortizpr@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="https://docs.google.com/document/d/1pu_juGuETNWFEuSD11vkNlR-giJQhRdDiE2CdS0ddzU/edit" target="_blank" className="button" download="https://docs.google.com/document/d/1pu_juGuETNWFEuSD11vkNlR-giJQhRdDiE2CdS0ddzU/edit" ><i className="fa fa-download" />Resumé</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
    </>
      );
    }
  };
  
  export default About;