import React from 'react'
import foto2 from "./Layouts/media/foto2.jpg";
export const About = () => {
  return (
    <>
    <div className="container">
      <article className="lHome">
      <section className="image">
            <img src={ foto2 } alt="" className="cover" />
          </section>
      </article>
      <article className="rHome">
        <section className="cAbout">
          <section className="title1">
            <h1 className='hi'>Let's Talk <span className='juan'>about me</span></h1>
          </section>
          <section className="desc">
            <p>
              My full name is Juan Martin Garcia Plazas, I'm 18 years old. Right now I'm studying software development at SENA, at 5th term, and studying is not the only thing that I do, i like to do sports specially crossfit, i'm in love with it and i love to play the ukulele, i made some covers and i do actually good.

              Talking about my career, I just want to say that im starting to love this world that every day gets me surprised, actually my short term goal its to be a front-end junior developer, i love design and its my strength, i know that i'm not the best but with passion I can do everything, remember: "Your mind its your limit" 
            </p>
          </section>

        </section>
      </article>

    </div>
    </>
    )
}

export default About;