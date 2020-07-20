import React from 'react';

class Projects extends React.Component{
    render() {
      return (
  <> 
        <section id="portfolio" className="portfolio_image">
        <h2 className="white"> Projects </h2>
          <div className="row">
            <div className="twelve columns collapsed">
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://github-cards-2020.netlify.app/" target="_blank" title>
                      <img alt="" src="images/GithubCards.png"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Github Cards</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://tic-tac-toe2020.netlify.app" target="_blank" title>
                      <img alt="" src="images/Tictactoe.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Tic-Tac-Toe</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://thirsty-booth-f23601.netlify.app/" target="_blank" title>
                      <img alt="" src="images/to-do.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>To-Do List</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://pedantic-ptolemy-682cb2.netlify.app/" target="_blank" title>
                      <img alt="" src="images/FriendsList.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Friends List</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://competent-minsky-a51fbe.netlify.app/" target="_blank" title>
                      <img alt="" src="images/GATEWAY.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Gateway</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://glacial-refuge-25064.herokuapp.com/" target="_blank" title>
                      <img alt="" src="images/instarede.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Instagram Redesign</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div> {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://zen-lovelace-c766bf.netlify.app/#" target="_blank" title>
                      <img alt="" src="images/Hamburgerr.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Hamburger Menu</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="https://hopeful-bardeen-4d3c54.netlify.app/" target="_blank" title>
                      <img alt="" src="images/HotelApp.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Hotel App</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>  {/* item end */}
              </div> {/* portfolio-wrapper end */}
            </div> {/* twelve columns end */}
          </div></section>
          </>
      );
    }
  };

export default Projects;