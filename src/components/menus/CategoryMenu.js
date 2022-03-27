import React from "react";
/* Router */
import {NavLink, Link} from 'react-router-dom';

/* Constants */
import category_menus from "../../constants/category_menus";

function CategoryMenu() {

    const showCategoryMenus = () => {
        var result = <></>;
        result = category_menus.map((menu, index) => {
            return(<li key={index}>
                <NavLink 
                    activeclassname="active-menu"
                    to={menu.to} 
                >
                    {menu.name}
                </NavLink>
            </li>);
        })
        return result;
    }

    return (
        <ul id="main-menu">
            {showCategoryMenus()}
        </ul>
    );
}

export default CategoryMenu;