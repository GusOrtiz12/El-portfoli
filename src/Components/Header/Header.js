import React from 'react';

class Header extends React.Component{
    render() {
      return (
  <>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul> {/* end #nav */}
          </nav> {/* end #nav-wrap */}
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Gus Ortiz.</h1>
              <h3>Road to Hire graduate with skills on <span>web development</span> languages such as, <span> javascript,</span> <span> node, </span><span> react.</span> </h3>
              <ul className="social">
                <li><a href="https://www.linkedin.com/in/gustavo-ortiz-9444521aa/" ><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/GusOrtiz12" ><i className="fa fa-github" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
          </p>
        </header> {/* Header End */}
        </>
      );
    }
  };

  export default Header;