import React from "react";
import {connect} from 'react-redux';

import * as actions from './actions/index';
/* Router */
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

/* conntants */
import routes_categorys from "./constants/routes_categorys";

/* Components */
import Menu from "./components/Menu";
import Profile from "./components/ProfileContainer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Notice from "./components/Notice";
import FormLogin from "./components/login/FormLogin";
import FormRegister from "./components/login/FormRegister";

function App(props) {

  const {accounts} = props;

  const {statusLogin} = accounts;

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
            <Route 
              path="profile" // Neu chua dang nhap thi dieu huong den /login
              element = {statusLogin?<Profile/>:<Navigate to='/login'/>}/>
            <Route 
              path="login" //MNeu da dang nhap thi dieu huong den /profile
              element = {statusLogin?<Navigate to='/profile'/>:<FormLogin/>}/>
            <Route path="register" element = {<FormRegister/>}/>  
            <Route path="cart" element = {<Cart/>}/>
            {/* Category Routes */}
            {addCategoryRoutes()}
            {/* <Route path="products" element = {<Products/>}>
            <Route path=":id" element = {<Product/>}/>
            </Route> */}
            <Route path="*" element = {<NotFound/>}/>  {/* Khi url sai */}
        </Routes>

        {/* <!--Footer--> */}
        {/* <div id="footer">
            <h1>Footer</h1>
        </div> */}
        
        {/* Notice */}
        <Notice/>
      </div>
    </Router>
  );
}

/* Chuyen state cua reducer thanh props cua component nay */
const mapStateToProps = (state) => {
  return { 
      accounts: state.accounts,
  };
}
/* Chuyen action thanh props cua component nay */
const mapDispatchToProps = (dispatch, props) => {
  return {
      
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
