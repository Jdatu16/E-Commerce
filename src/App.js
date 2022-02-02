import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./GlobalStyle";
import {
  ProductPage,
  Header,
  MainPage,
  WomenCollection,
  MenCollection,
  CartList,
  CheckoutPage,
} from "./components";
import { SideMenu } from "./atoms";
import {
  CHECKOUT_PATH,
  CONTENT_PATH,
  HOME_PATH,
  lightTheme,
  MEN_PATH,
  WOMEN_PATH,
} from "./constants";

export const StateContext = React.createContext();

function App() {
  // items state stores cart content
  const [items, setItems] = useState([]);
  // this state defines if sidemenu is open. it is also used to animate sidemenu
  const [toggleSideMenu, setToggleSideMenu] = useState("none");
  // this state defines if cart is open. it is also used to animate cart
  const [toggleCart, setToggleCart] = useState("none");
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    setTotalSum(0);
    items.map((i) => {
      return setTotalSum((prev) => prev + i.price * i.amount);
    });
  }, [items]);
  // we use location to use AnimatePresense from framer motion library

  const location = useLocation();

  return (
    <>
      <GlobalStyle toggleSideMenu={toggleSideMenu} />
      <ThemeProvider theme={lightTheme}>
        <StateContext.Provider
          value={{
            items,
            setItems,
            setToggleSideMenu,
            setToggleCart,
            totalSum,
            setTotalSum,
          }}
        >
          <Header />
          <AnimatePresence>
            <Routes location={location} key={location.key}>
              <Route path={HOME_PATH} element={<MainPage />} />
              <Route path={WOMEN_PATH} element={<WomenCollection />} />
              <Route path={MEN_PATH} element={<MenCollection />} />
              <Route
                path={CONTENT_PATH}
                element={<ProductPage setItems={setItems} items={items} />}
              />
              <Route
                path={CHECKOUT_PATH}
                element={
                  <CheckoutPage
                    totalSum={totalSum}
                    setItems={setItems}
                    items={items}
                  />
                }
              />
            </Routes>
          </AnimatePresence>
          <CartList
            items={items}
            setItems={setItems}
            toggleCart={toggleCart}
            setToggleCart={setToggleCart}
            totalSum={totalSum}
          />
          <SideMenu
            setToggleSideMenu={setToggleSideMenu}
            toggleSideMenu={toggleSideMenu}
          />
        </StateContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
