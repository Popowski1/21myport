import React, { Component } from 'react';

class About extends Component {
  render() { if(this.props.data){
  }

  return (
<div>
    <article id="aboutme">
    <h1>About me !</h1>
   <p>Hello! I am Shane and I am a 21 year old instrument builder for Emerson Electric Co.
                I work in a clean room to produce pressure sensors. I have a hand in sputtering pins, dry and wet etching silicone boards, and physically assembling the pieces to blank sensors!
                I love my current job and my coworkers, but I'd like to do more with myself than build metal sensors.
                I've always had an affinity towards computers and I figured this would be a good lane for me to move forward in.
                I would eventually like to learn all different types of computing languages, starting with HTML, CSS, and Js!
            </p>
</article>
</div>
  );
  }
}

export default About;