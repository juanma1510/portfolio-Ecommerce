import React from 'react'
import { Outlet, Link } from "react-router-dom";
import reactLogo from "./media/reactLogo.png";

export const Header = () => {
    return (
        <header className="header">

            <article className="hleft">

                <img src={reactLogo} alt="" className='photo' />

                <section className="title">
                    <h1 className='portfolio'>Portfolio</h1>
                </section>

            </article>


            <article className='hrigth'>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>

                        </li>
                        <li>
                            <Link to="/about">About me</Link>

                        </li>

                        <li>
                            <Link to="/web">Projects</Link>

                        </li>

                        <li>
                            <Link to="/store">Store</Link>
                        </li>




                    </ul>
                </nav>

            </article>

            <Outlet />

        </header>
    )
}

export default Header;