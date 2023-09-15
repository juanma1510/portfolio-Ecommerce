import React from 'react'
import mifoto from "./Layouts/media/mifoto.jpg";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
    <div className="container">
      <article className="lHome">
          <section className="image">
            <img src={ mifoto } alt="" className="cover" />
          </section>
      </article>
      <article className="rHome">
        <section className="title1">
            <h1 className='hi'>&lt;h1&gt;Hi! I'm <span className='juan'>Juan Martin</span>&lt;/h1&gt;</h1>
            <h2 className='web'>&lt;h2&gt;I'm a web developer in process&lt;/h2&gt;</h2>
            <h3 className='know'>&lt;h3&gt;<Link to="/about">Know more about me</Link>&lt;/h3&gt;</h3>
        </section>
      </article>
      
    </div>
    </>
  )
}

export default Home;