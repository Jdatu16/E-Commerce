import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import {
  ProductPage,
  Header,
  MainPage,
  WomenCollection,
  MenCollection,
  CartList,
} from "./components";
import { SideMenu } from "./atoms";
import { CONTENT_PATH, HOME_PATH, lightTheme } from "./constants";
import { MEN_PATH, WOMEN_PATH } from "./constants/paths";

export const StateContext = React.createContext();

function App() {
  const [items, setItems] = useState([]);
  // this state defines if sidemenu is open. it is also used to animate sidemenu
  const [toggleSideMenu, setToggleSideMenu] = useState("none");
  // this state defines if cart is open. it is also used to animate cart
  const [toggleCart, setToggleCart] = useState("none");

  useEffect(() => {
    // if sidemenu is open we disable scroll by adding a style to the body element
    if (toggleSideMenu === "open")
      return (document.body.style.overflow = "hidden");
    // if sidemenu is closed we enable scroll by removing overflow style
    return (document.body.style.overflow = "visible");
  }, [toggleSideMenu]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <StateContext.Provider
          value={{
            items,
            setItems,
            setToggleSideMenu,
            setToggleCart,
          }}
        >
          <Header />
          <Routes>
            <Route path={HOME_PATH} element={<MainPage />} />
            <Route path={WOMEN_PATH} element={<WomenCollection />} />
            <Route path={MEN_PATH} element={<MenCollection />} />
            <Route
              path={CONTENT_PATH}
              element={<ProductPage setItems={setItems} items={items} />}
            />
          </Routes>
          <CartList items={items} setItems={setItems} toggleCart={toggleCart} />
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
