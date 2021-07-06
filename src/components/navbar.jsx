import React from'react';

function navbar(){
    return (
        <nav className="navbar p-3 mb-2 navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand mb-0 fs-3">Name List</span>
            <a className="navbar-brand" href="https://getbootstrap.com/docs/5.0/components/navbar/">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="https://getbootstrap.com/docs/5.0/components/navbar/">Home</a>
                    <a className="nav-link" href="https://getbootstrap.com/docs/5.0/components/navbar/">Features</a>
                    <a className="nav-link" href="https://getbootstrap.com/docs/5.0/components/navbar/">Pricing</a>
                    <a className="nav-link disabled" href="https://getbootstrap.com/docs/5.0/components/navbar/" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
        </nav>
        
    )
}

export default navbar;