import React from 'react'

const Navbar = () => {

    let imgLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'

    return (
        <nav className="nav navbar-dark bg-primary">
            <div className="nav-container navbar-brand">
                <img src={imgLogo} alt='Pokemons' />
            </div>
        </nav>
    )
}

export default Navbar;