import React, { Component, useState } from 'react';
import Navigation from './Navigation';


function Header() { const [currentPage, handlePageChange] = useState("About");
                    const renderPage = () => { switch(currentPage) {
                                                case "About":
                                                    return <About />;
                                                    case "Resume":
                                                    return <Resume />;
                                                    case "Contact":
                                                    return <Contact />;
                                                    case "Portfolio":
                                                    return <Portfolio />;
                    

}};
 
  return (
    <div>
    <nav className="navBar">
        <a className="navbar-item" rel="noreferrer" target="_blank" href="https://github.com/Popowski1?tab=repositories">
    <span className="content">Shane Popowski</span>
    </a>
   
    </nav>
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    <main><div>{renderPage(currentPage)}</div></main>
    </div>
  );
}

export default Header;