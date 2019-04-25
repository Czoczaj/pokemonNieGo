const api = 'https://pokeapi.co/api/v2';

function stworzPokemona(pokemon){
    return `
    <div class="frame">
            <img src="${pokemon.sprites.front_default}" alt="" class='obrazek'>
            <div id='teksty'>
                <span class="teksty">${pokemon.name}</span>
                <span class="teksty">${pokemon.types[0].type.name}</span>
                <span class="teksty">${pokemon.weight}</span>
            </div>
        </div>`
}

function wylogujPokemony(){
    fetch(api + '/pokemon')
    .then(function(resp){
       return resp.json();
    })
    .then(function(json){
        var listaPokemonow = json.results;
        var listaNazwPokemonow = listaPokemonow.map(
            function(pokemon){
                return fetch(pokemon.url)
                .then(function(odp){
                    return odp.json();
                })
            })
        Promise.all(listaNazwPokemonow).then(function(pokemony){
            const listaHtmlPokemonów = pokemony.map((pokemon) => stworzPokemona(pokemon));
            const htmlWszystkichPokemonow = listaHtmlPokemonów.join("");
            var htmlPokemonow = document.querySelector('.pokemony').innerHTML = htmlWszystkichPokemonow;
        })
        

    })
}
wylogujPokemony();
