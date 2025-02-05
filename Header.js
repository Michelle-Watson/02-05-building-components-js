// For each of your chosen components:

// Identify the portion of HTML to be rendered inside of that component. You will have to cut & paste the relevant HTML for that component from the Main component.
// Create a new function that returns your component’s HTML.
// Refactor the Main component to render this portion of the page using the new functional component.
// If you used arrow functions to define your functional components, be careful about the order in which you defined your functions and rendered them in the Main component as arrow functions are not hoisted!

function Header() {
  return `
  <header id="header">
        <nav id="nav-bar" class="header-item header-left">
          <a>Home</a> |
          <a>About</a> |
          <a>Contact</a>
        </nav>
        <div class="header-item logo">
          Logo
        </div>
        <div class="header-item header-right">
          User:
          <a>John Smith</a> |
          <a>Logout</a>
        </div>
      </header>
    `;
}
// exports always at bottom
export default Header;
