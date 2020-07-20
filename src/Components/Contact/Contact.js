import React from 'react'

class Contact extends React.Component{
  render() {
    return (
<>
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Feel free to contact me. Would love your feedback.</p>
          </div>
        </div>
        <section className="contact-page-container">
                    <form name="contact" className="form-container"  method='post'>
                        <input type="hidden"  name="form-name" value="contact" />
                        <input type="text"  placeholder="Full Name" className="text-container" name="name"  required/>
                        <input type="email"  required placeholder="Email" className="text-container" name="email" />
                        <textarea  required  placeholder="Message" className="text-area"  name="message"></textarea>
                        <input type="submit" value="Send"/>
                    </form>
                </section>
      </section>
      </>
    );
  }
};

export default Contact;