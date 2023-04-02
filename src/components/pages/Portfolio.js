import React, { Component } from 'react';

class Portfolio extends Component {
  render() { if(this.props.data){
  }

  return (
<div>

<article class="Project" id="recentapp">
        <h2><a href="https://llangerud.github.io/cryptoscope/">Cryptoscope</a></h2>
        <a href="https://llangerud.github.io/cryptoscope/">
        <img src="Assets/chrome_X8Rbx2Ed0i.png" alt="Sample Project 1 example"/>
        </a>
        <p>Horoscope for crypto investments!</p>
           
    </article>
    <article class="Project">
        <h2><a href="https://even-better-reads.herokuapp.com/login">BetterReads</a></h2>
        <a href="https://even-better-reads.herokuapp.com/login">
        <img src="Assets/Searched.png" alt="Sample Project 2 example"/>
        </a>
        <p>As a bookworm, I would like to search for a particular book by title, author or any other data in order to further my reading.</p>
            
    </article>
    <article class="Project">
        <h2><a href="https://github.com/Popowski1">Sample Project 3</a></h2>
        <a href="https://github.com/Popowski1">
        <img src="Assets/chrome_amjbJtgbVU.png" alt="Sample Project 3 example"/>
        </a>
        <p>Sample Project 3 description</p>
            

    </article>
    <article class="Project">
        <h2><a href="https://github.com/Popowski1">Sample Project 4</a></h2>
        <a href="https://github.com/Popowski1">
        <img src="Assets/chrome_amjbJtgbVU.png" alt="Sample Project 4 example"/>
        </a>
        <p>Sample Project 4 description</p>
            
    </article>
    <article class="Project">
        <h2><a href="https://github.com/Popowski1">Sample Project 5</a></h2>
        <a href="https://github.com/Popowski1">
        <img src="Assets/chrome_amjbJtgbVU.png" alt="Sample Project 5 example"/>
        </a>
        <p>Sample Project 5 description</p>
         
    </article>
</div>
  );
  }
}

export default Portfolio;