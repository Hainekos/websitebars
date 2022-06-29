import * as React from "react";
import Footer from "../components/footer.js";
import Header from "../components/Header.js";
import Item from "./item.js";



export default ({ children }) => (
    <>
      <Header/>
      {children}
      <Footer/>
        
      
    </>
  );