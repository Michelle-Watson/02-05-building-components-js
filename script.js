/*
Q2. Currently we are defining all our html as one big 
HTML string returned by the Main function.
We're going to refactor this into smaller components.
*/

// For each of your chosen components: Identify the portion of HTML to be rendered inside of that component. You will have to cut & paste the relevant HTML for that component from the Main component.

// imports always at top
import Header from "./Header.js";

const Main = () => {
  return `
    ${Header()}
      <div>
      <section class="hero">
        <div>
          <h2 class="hero-title">Hero Title</h2>
          <h3 class="hero-tagline">Tag Line</h3>
        </div>
      </section>
      <main>
        <section class="card-list">
          <div class="card">
            <div class="card__content">
              Content
            </div>
            <h4 class="card__title">
              Title
            </h4>
          </div>
        </section>
        <section class="activity-list">
          <div>
            <h3>Activity Feed</h3>
            <div class="activity">
              Activity
            </div>
          </div>
        </section>
      </main>
      <footer>
        <section class="footer footer-left">
          Left Footer
        </section>
        <section class="footer footer-center">
          Center Footer
        </section>
        <section class="footer footer-right">
          Right Footer
        </section>
      </footer>
      </div>
    `;
};

let root = document.getElementById("main");
root.innerHTML = Main();
