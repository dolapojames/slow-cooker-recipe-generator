function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["Hello World"],
    autoStart: true,
    cursor: "",
  });
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener("submit", generateRecipe);
