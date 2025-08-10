let names = 
[
  "pikachu",
  "charizard",
  "bulbasaur",
  "squirtle",
  "jigglypuff",
  "eevee",
  "snorlax",
  "mewtwo",
  "gengar",
  "dragonite",
  "blastoise",
  "venusaur",
  "gyarados",
  "alakazam",
  "arcanine",
  "lapras",
  "vaporeon",
  "jolteon",
  "flareon",
  "machamp",
  "golem",
  "pidgeot",
  "onix",
  "vileplume",
  "nidoking",
  "nidoqueen",
  "raichu",
  "scyther",
  "electabuzz",
  "magmar",
  "pinsir",
  "tauros",
  "muk",
  "cloyster",
  "hypno",
  "kingler",
  "exeggutor",
  "marowak",
  "hitmonlee",
  "hitmonchan",
  "lickitung",
  "rhydon",
  "chansey",
  "tangela",
  "kangaskhan",
  "seadra",
  "starmie",
  "mr. mime",
  "jynx",
  "porygon"
]

let randomName = Math.floor(Math.random() * 50);
let randomPokemonName = names[randomName];
let url = "https://pokeapi.co/api/v2/pokemon/" + randomPokemonName;

let PokeName = document.querySelector("#pokemon-name");
let PokeType = document.querySelector("#pokemon-type");
let PokeTypeName = document.querySelector("#pokemon-type-name");
let SpecialMove = document.querySelector("#special-move");
let PokeImage = document.querySelector("#PokeImage");

async function getting()
{
    try
    {
        const response = await axios.get(url);

        PokeName.innerHTML = await response.data.name;
        PokeTypeName.innerHTML = await response.data.types[0].type.name;
        PokeType.innerHTML = await response.data.types[1].type.name;
        SpecialMove.innerHTML = await response.data.moves[0].move.name;

        PokeImage.src = await response.data.sprites.front_default;
    }
    catch(e)
    {
        console.log("Error While Fetching Data Form API !" , e);
    }
}

getting();

