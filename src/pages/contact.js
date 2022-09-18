import React from 'react'
import Layout from '../components/Layout'

const contact = () => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
          <h3>Want To Get In Touch</h3>
            <p>I'm baby offal mixtape quinoa bespoke mlkshk, freegan cronut cliche pitchfork you probably haven't heard of them seitan green juice polaroid mumblecore.</p>
            <p> Hammock big mood brunch pabst, la croix crucifix 90's gastropub pickled raw denim next level try-hard.</p>
            <p> Narwhal four dollar toast poutine disrupt listicle. Tattooed DSA fashion axe squid schlitz fingerstache ramps vegan crucifix. </p>
          </article>
          <form clasName='form contact-form'>
            <div className='form-row'>
              <label htmlFor='name'>your name</label>
              <input id='name' type='text' placeholder='name' onChange={(e) => e.target.value}/>
            </div>
            <div className='form-row'>
              <label htmlFor='email'>your email</label>
              <input id='email' type='email' placeholder='email' onChange={(e) => e.target.value}/>
            </div>
            <div className='form-row'>
              <label htmlFor='message'>message</label>
              <textarea id='message' onChange={(e) => e.target.value}></textarea>
            </div>
            <button type='submit' className='btn block'>submit</button>
          </form>
        </section>
      </main>
    </Layout>
  )
}

export default contact