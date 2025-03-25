import { Container, ShoppingBag, User2, Search } from "lucide-react"
// import {Tooltip} from "react-tooltip"
import { Tooltip } from "react-tooltip";
import { useState } from "react";

function Navbar() {

    let [tooltip, showToolTip] = useState(false);

    function showPopupHandler() {
        showToolTip(true)
    }

    return (
        <header>
            {/* Navigation bar */}
            <div className="navbar">
                {/* logo */}
                <div className="nav-element" id="web-logo-name-div">
                    {/* link */}
                    <h1><a href="">QuickMart</a></h1>
                </div>

                {/* Search bar container */}
                <div className="nav-element" id="search-bar-div">
                    {/* search icon  */}
                    <Search size={40} color="white" className="search-icon"/>
                    {/* search input (main) */}
                    <input id="search-bar" type="text" placeholder="Search for a product here" />
                </div>

                {/* Links in navigation bar */}

                {/* Orders query*/}
                <a href="" className="nav-links" data-tooltip-id="nav-tooltip"
                    data-tooltip-content="Orders">
                        {/* Icon for order link */}
                    <Container size={24} className="icons-navbar" />
                    Orders
                </a>


                {/* items cart */}
                <a href="" className="nav-links" data-tooltip-id="nav-tooltip"
                    data-tooltip-content={"Check out items in your cart"}>
                        {/* Icon for cart */}
                    <ShoppingBag size={24} className="icons-navbar" />
                    Cart
                </a>


                {/* icon */}
                <a href="" className="nav-links" data-tooltip-id="nav-tooltip"
                    data-tooltip-content={"Login to your account"}>

                        {/* Icon for user profile*/}
                    <User2 size={24} className="icons-navbar" />
                    Login
                </a>
            </div>
            {
                // Global tooltip for all elements in navigation bar
                <Tooltip id="nav-tooltip" place="bottom" delayShow={1500}
                    style={{}} />

            }
        </header>
    )

}

export default Navbar;