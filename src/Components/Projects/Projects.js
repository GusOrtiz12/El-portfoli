import React from 'react';

class Projects extends React.Component{
    render() {
      return (
  <> 
        <section id="portfolio" className="portfolio_image">
        <h2> Projects </h2>
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
                    <a href="#modal-05" title>
                      {/* <img alt="" src="images/GuessingGame.png"/> */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>hi</h5>
                        </div>
                      </div>
                      <div className="link-icon"><i className="icon-plus" /></div>
                    </a>
                  </div>
                </div>
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-06" target="_blank" title>
                      <img alt="" src="images/GuessingGame.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Guessing Game</h5>
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
                    <a href="#modal-09" target="_blank" title>
                      <img alt="" src="images/GuessingGame.png" />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>Project 8</h5>
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