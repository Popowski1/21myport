import React, { Component } from 'react';

class Contact extends Component {
  render() { if(this.props.data){
  }

  return (
<div>
<section id="contact">
            <h3>Contact Info</h3>

            <ul>
                <li id="email">Email: <a href="mailto:Shanepopowski@yahoo.com">shanepopowski@yahoo.com</a></li>
                <li id="github">Github: <a href="https://github.com/Popowski1">Popowski1</a></li>
            </ul>
            </section>
</div>
  );
  }
}

export default Contact;