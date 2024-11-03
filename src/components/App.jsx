import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const dataAsync = async (link) => {
  try {
    const data = await fetch(link);
    const results = await data.json();
    return results;
  } catch (err) {
    console.error(err);
  }
}
const data = await dataAsync(`https://rickandmortyapi.com/api/character`);
console.log(data);

// let dimension = [];
// data.results.map(async e =>{
//   dimension.push((await dataAsync(e.origin.url)));
// })
// console.log(dimension);

export default function App() {
  return (
    <>
      {data.results.map(e =>{
        return (
          <article id={e.id}>
            <h3>{e.name}</h3>
            <div className="container">
              <div className="img-container">
                <img src={e.image} alt="" />
              </div>
              <div className="info">
                <span><div>Especie:</div><div>{e.species}</div></span>
                <span><div>Origen:</div><div>{e.origin.name.split(" ")[0]}</div></span>
                <span><div>Dimension:</div><div>{e.origin.name.split(" ")[1]?e.origin.name.split(" ")[1].substring(1,e.origin.name.split(" ")[1].length-1):"unknown"}</div></span>
              </div>
              <div className="others">
                <span className='ep'>Apariciones:</span>
                <span className='epList'>{e.episode.map(elem=>(<div>{elem.split("/")[5]}</div>))}</span>
                <span><div>Cargado:</div><div>{e.created.split("T")[0]}</div></span>
              </div>
            </div>
          </article>
        );
      })}
    </>
  )
}