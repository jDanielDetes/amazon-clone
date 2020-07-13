import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {useStateValue} from '../StateProvider'

function Header() {
    const [{cart}] = useStateValue();

    console.log(cart)
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne" >Hello oshan</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
      </div>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

      <Link to="/" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>
            
      <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
              {/* checkout icon*/}
              <ShoppingBasketIcon/>
              <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
          </div>
      </Link>
    </nav>
  );
}

export default Header;
