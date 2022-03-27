import React from "react";
/* Router */
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

/* conntants */
import routes_categorys from "./constants/routes_categorys";

/* Components */
import Menu from "./components/Menu";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

function App() {

    const addCategoryRoutes = () => {
        let result = null;
        if(routes_categorys.length>0){
            result = routes_categorys.map((route, index) => {
                return <Route path={route.to} element = {route.main()} key={index}/>;
            });
        }
        return result;
    }

  return (
    <Router>
      <div id="wrapper">
        {/* Menu */}
        <Menu/>

        {/* <!--Content--> */}
        <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="profile" element = {<Profile/>}/>
            <Route path="cart" element = {<Cart/>}/>
            {/* Category Routes */}
            {addCategoryRoutes()}
            {/* <Route path="products" element = {<Products/>}>
            <Route path=":id" element = {<Product/>}/>
            </Route> */}
            <Route path="*" element = {<NotFound/>}/>  {/* Khi url sai */}
        </Routes>

        {/* <!--Footer--> */}
        <div id="footer">
            <h1>Footer</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
