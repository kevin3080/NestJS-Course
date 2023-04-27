//import { name, age } from './bases/01-types';
//import { bulbasaur, pokemons } from './bases/02-objects'
//import { charmander } from './bases/03-classes'
//import { charmander } from './bases/04-injection'
//import { charmander } from './bases/05-decorators'
import { charmander } from './bases/06-decorators2'

import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript! ${charmander.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
    
  </div>
`
// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
