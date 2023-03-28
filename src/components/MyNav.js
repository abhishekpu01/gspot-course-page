import React from "react";
import Cart from '../img/cart.png'
import Button from 'react-bootstrap/Button';
import '../css/nav.css'

function MyNav() {
  return (
    <>
    <nav class = "my-nav">
        <div className = "left">

            <h4>GoalSpot</h4>

            <form method = 'POST'>
                <input type = 'text' placeholder = 'Search Here!!!' id="inp"/>
            </form>

        </div>
        <div className = "right">

            <img src = {Cart} class="my-icon"/>
            <Button variant="primary" size="sm" className = "my-btn">Login</Button>{' '}

        </div>
    </nav>
    </>
  );
}

export default MyNav;