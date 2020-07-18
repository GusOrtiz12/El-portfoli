import React from 'react'

class Footer extends React.Component{
    render() {
      return (
  <>
        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://www.linkedin.com/in/gustavo-ortiz-9444521aa/" target="_blank"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://github.com/GusOrtiz12" target="_blank" ><i className="fa fa-github" /></a></li>
              </ul>
              <ul className="copyright">
                <li>Gustavo A. Ortiz © 2020</li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer> {/* Footer End*/}
        </>
      );
    }
  };

  export default Footer;