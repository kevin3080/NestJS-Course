import axios from "axios";
import { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface";

//clases en TS


/* export class Pokemon {
    public id: number;
    public name: string;

    constructor( id: number, name: string ) {
        this.id = id;
        this.name = name;
        console.log('contructor llamado');
    }
}
export const charmander = new Pokemon(23,'kevin'); */

// forma corta

export class Pokemon {

    //geters

    get imageUrl(): string{
        return `https://pokemon.com/${ this.id }.jpg`; //cuando estamos dentro de una clase el this apunta a la instancia de la clase
    }

    constructor(
        public readonly id: number, // readonly no permite reasignarle un valor
        public name: string,
        //public imageUrl: string,
        ) {console.log('constructor llamado');}

        scream() { // todos los metodos son por defaul public
            console.log(`${ this.name.toUpperCase() }!!!`);
        }

        private speak() { // private evita que se pueda acceder a este metodo fuera de la clase
            console.log(`${ this.name }, ${ this.name }`);
        }

        async getMoves(): Promise<Move[]> {
            //const moves = 10;
            const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');

            console.log( data.moves );

            return data.moves;
        }
}



export const charmander = new Pokemon(23, 'Squirtle');

//console.log(charmander.imageUrl);

//charmander.scream();
//charmander.speak();

console.log(charmander.getMoves());

