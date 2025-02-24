function displayRecipe(response) {
  console.log("generating recipe");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredients = document.querySelector("#ingredients");
  let apiKey = "5ca9a4e04df3dddde0tdc3bec6cd3f5o";
  let prompt = `What is a tasty slow cooker recipe with ${ingredients.value}`;
  let context =
    "Please show recipe in HTML. Do not include an introdcution. Do not write html at the top.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `Generation a ${ingredients.value} recipe for you`;

  console.log("generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeElement = document.querySelector("#recipe-generator");
recipeElement.addEventListener("submit", generateRecipe);
