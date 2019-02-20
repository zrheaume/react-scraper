import React from "react"

function NavBar(props) {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <span className="navbar-brand">React Scraper</span>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
               <a className="nav-item nav-link" href="/">Home</a>
               {/* <a className="nav-item nav-link" href="/search">Search</a> */}
               <a className="nav-item nav-link" href="/saved">Saved</a>
            </div>
         </div>
      </nav>
   )
}

export default NavBar