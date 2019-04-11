const api = 'https://pokeapi.co/api/v2';

function stworzPokemona(name){
    return `
    <div class="frame">
            <img src="" alt="" class='obrazek'>
            <div id='teksty'>
                <span class="teksty">${name}</span>
                <span class="teksty">typ</span>
                <span class="teksty">waga</span>
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
                return stworzPokemona(pokemon.name);
            })
        var htmlPokemonow = document.querySelector('.pokemony').innerHTML = listaNazwPokemonow;
    }).catch(function(err){
        console.log(err);
    })
}
wylogujPokemony();
