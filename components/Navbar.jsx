import React from 'react'
import Link from 'next/link';

export default function Navbar() {
    // js code to make the hamburger menu work. Taken from bulma.io
    const toggleHamburgerMenu = () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);
                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');
            });
        }
    }

    return (
        <>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" href="/todos">
                        <img src="https://img.icons8.com/fluency/48/000000/microsoft-todo-2019.png"/>
                    </Link>
                    <div class="navbar-item">
                        <strong>//TODO:</strong>
                    </div>

                    <div role="button" class="navbar-burger" onClick={toggleHamburgerMenu}  aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-info"><strong>Sign up</strong></a>
                                <a class="button is-light">Log in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}