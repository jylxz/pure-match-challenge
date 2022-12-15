import React from 'react'
import Container from '../Container'
import "./Connected.css"

export default function Connected() {
  return (
    <Container className="connected-section">
      <main className='connected-section-main'>
        <h2 className='connected-section-heading'>Stay connected!</h2>
        <p className='connected-section-content'>
          Sign up for our newsletter to get the latest news and updates, as well
          as exclusive perks and offers!
        </p>
        <form className='connected-section-form'>
          <input type="text" placeholder='Enter your name'/>
          <input type="email" placeholder='Enter your email'/>
        </form>
        <div className='connected-section-btn'>
          <button>Subscribe</button>
        </div>
        <span className='connected-section-msg'>We respect your privacy.</span>
      </main>
    </Container>
  );
}
