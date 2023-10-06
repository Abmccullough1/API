
const publicKey = "e9ad643135fd033699220f64b3b81e6b"; 
const privateKey = "f67545ccaf24623b9c40f31abf3cd3fde91a9d53"; 
const apiUrl = "https://gateway.marvel.com/v1/public/characters";

function getRandomCharacter() {
  const ts = new Date().getTime();
  const randomCharacterId = Math.floor(Math.random() * 1490) + 1;

  fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e9ad643135fd033699220f64b3b81e6b&hash=6111e72d48eb85fa8a112ca310256be7`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let randNum = Math.floor(Math.random() * 20);
      const character = data.data.results[randNum];
      const characterInfo = document.getElementById("characterInfo");
      characterInfo.innerHTML = "";
      characterInfo.innerHTML = `
      <h2>Name: ${character.name}</h2>
      <p>Description: ${character.description}</p>
      <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}" class ="image">
    `;
    })
    .catch((error) => console.error("Error:", error));
}
