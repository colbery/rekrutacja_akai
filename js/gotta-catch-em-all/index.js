/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");
const searchName = document.querySelector("#pokemon-name");

function renderPokemons(pokemons) {
  // uzupełnij tutaj

  for (let i = 0; i <= 150; i++) {
    const pokemon = `<div class="pokemonCard ${pokemons[i].types[0]} ${
      pokemons[i].types[1] ? pokemons[i].types[1] : ""
    }"><img src='${pokemons[i].image}'/> <p> ${pokemons[i].name}</p> <p> ${
      pokemons[i].types
    }</p></div>`;
    pokemonsContainer.innerHTML += pokemon;
  }
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  let searchInput = searchName.value.toLowerCase();

  return filterPokemons;
}

const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
