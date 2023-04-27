
export const pokemonIds = [12,20,30,34,66];

/* pokemonIds.push('asdasdasd'); // no podemos agregar string a una cadena de numeros
// aunque en JavaScript es totalmente permitido, no es recomendable
pokemonIds.push('1'); // sigue sisendo un string
pokemonIds.push(Number('1')); // comvierto un string a numero
pokemonIds.push(+('1')); // dato curioso, son el simbolo más: +('') ya comvierte el string a numero */

interface Pokemon { // una interfaz agrega reglas y condiciones, pero no funciona para crear instancias. Para instancias se ina Class
    id: number;
    name: string;
    age?: number; // esto permite que sea opcional
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander'
}

export const pokemons: Pokemon[] = []; // asi permitimos que este array difiera del interfaz Pokemon

pokemons.push(bulbasaur, charmander);

console.log(pokemons);
