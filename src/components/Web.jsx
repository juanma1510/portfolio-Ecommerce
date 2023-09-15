import React from 'react'
import { Link } from "react-router-dom";
import apptastico from "./Layouts/media/apptastico.png";
import Bleux from "./Layouts/media/Bleux.png";
import blueasy from "./Layouts/media/blueasy.png";
import rickandmorty from "./Layouts/media/rickandmorty.png";
export const Web = () => {
  
  return (
    <>
    <div className="container2">
      <header className='there'><h1>There are some <span className="juan">front projects</span> that i made.</h1></header>
      <article className="container1">
      <Link to="https://heroic-kashata-d52c54.netlify.app/" target='blank'>
      <article className="card">
        <section className="page">
          <img src={apptastico} alt="" className='cover1'/>
        </section>
        <section className="name">
          Apptastico
        </section>
      </article>

      </Link>

      <Link to="https://taupe-crisp-29d696.netlify.app/" target='blank'>
      <article className="card">
        <section className="page">
          <img src={Bleux} alt="" className='cover1'/>
        </section>
        <section className="name">
          Bleux
        </section>
      </article>

      </Link>

      <Link to="https://starlit-boba-18f06b.netlify.app/" target='blank'>
      <article className="card">
        <section className="page">
          <img src={blueasy} alt="" className='cover1'/>
        </section>
        <section className="name">
          Blueasy
        </section>
      </article>

      </Link>

      <Link to="https://extraordinary-choux-503001.netlify.app/" target='blank'>
      <article className="card">
        <section className="page">
          <img src={rickandmorty} alt="" className='cover1'/>
        </section>
        <section className="name">
          Rick and Morty
        </section>
      </article>

      </Link>

      </article>
      
    </div>
    </>
    )
}

export default Web;