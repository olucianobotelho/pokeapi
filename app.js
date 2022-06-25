const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const generatePokemonPromisses = ()=>  Array(150).fill().map((_, index)=>
fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => pokemons.reduce((caixa, {name,id,types}) => {
        const elementTypes = types.map(typeInfo => typeInfo.type.name)
        caixa += 
        `<li class="card ">
        <img class="card-image ${elementTypes[0]}" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png"/>
        <h2 class="class-title">${id}. ${name}</h2>
        <p class="card-subtitle">${elementTypes.join(' | ')}</p>
        </li>`
        return caixa
    },'')

    const pokemonsHTML = pokemons=>{
        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML = pokemons

}
    const pokemonPromisses = generatePokemonPromisses()
  

    Promise.all(pokemonPromisses)
    .then(generateHTML)
    .then(pokemonsHTML)
    
    
    




