const Hero = (title, tagline) => {
  return `<section class="hero">
          <div>
            <h2 class="hero-title">${title}</h2>
            <h3 class="hero-tagline">${tagline}</h3>
          </div>
        </section>`;
};

export default Hero;