/*
Q2. Currently we are defining all our html as one big 
HTML string returned by the Main function.
We're going to refactor this into smaller components.
*/

// For each of your chosen components: Identify the portion of HTML to be rendered inside of that component. You will have to cut & paste the relevant HTML for that component from the Main component.

// imports always at top
import Hero from "./Hero.js";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

const Main = () => {
  return `
      ${Header()}
      ${Hero("testtitle", "testdescr")}
      ${MainContent()}
      ${Footer()}   
    `;
};

let root = document.getElementById("main");
root.innerHTML = Main();
