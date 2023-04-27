
export let name: string = 'Kevin';
export const age: number = 25;
export const isValid: boolean = true;

name = 'Melissa';


export const templlateString = ` Esto es un string
multilinea
que puede tener
" dobles
' simples
inyectar valores \$hola
nombre: ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
boolean: ${ isValid }`

console.log( templlateString );