import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { createStructuredSelector } from "reselect";
import Homepage from "./pages/homepage/homepage.components.jsx";
import Shoppage from "./pages/shoppage/shoppage.components";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.components";
import Checkoutpage from "./pages/checkout/checkout.components";

import Header from "./components/header/header.components";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/*" element={<Shoppage />} />
        <Route
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInSignUpPage />}
        />
        <Route path="/checkout" element={<Checkoutpage />} />
      </Routes>
    </div>
  );
};

export default App;
