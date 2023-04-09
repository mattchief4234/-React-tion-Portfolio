import React, {useState} from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Porfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, HandlePageChange] = useState("About");

    const renderPage = () => {
        switch(currentPage) {
            case "About":
                return <About></About>;
            case "Portfolio":
                return <Porfolio></Porfolio>
            case "Contact":
                return <Contact></Contact>
            case "Resume":
                return <Resume></Resume> 

        default:
            return <About></About>
        }
    };

    return (
        <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/EmilyNecciai?tab=repositories"
          >
            <span className="content is-large">Emily Necciai Mayeski</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
    );

}

export default Header;