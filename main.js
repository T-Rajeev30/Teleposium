document.addEventListener("DOMContentLoaded", () => {
  const sections = ["landing"]; // Define the order here

  function loadSection(index) {
    if (index >= sections.length) return; // Stop when all sections are loaded

    let section = sections[index];

    console.log(section)
    // Fetch the HTML file
    fetch(`sections/${section}.html`)
      .then((response) => response.text())
      .then((html) => {
        // Append the section HTML to the content div
        document.getElementById("content").innerHTML += html;

        // Load the CSS & JS files
        loadCSS(section);
        loadJS(section);

        // Load the next section after a slight delay
        setTimeout(() => {
          loadSection(index + 1);
        }, 500); // Adjust delay if needed
      })
      .catch((error) => console.error(`Error loading ${section}:`, error));
  }

  // Function to load CSS
  function loadCSS(section) {
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `css/${section}.css`;
    document.head.appendChild(link);
  }

  // Function to load JavaScript
  function loadJS(section) {
    let script = document.createElement("script");
    script.src = `js/${section}.js`;
    document.body.appendChild(script);
  }

  // Start loading sections in order
  loadSection(0);
});
