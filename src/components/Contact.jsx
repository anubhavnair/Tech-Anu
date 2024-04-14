import React from 'react'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <main>
        <h1>Contact Us</h1>
        <form action="">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required placeholder='Enter Your Name '/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required placeholder='Enter Your email '/>
          </div>
          <div>
            <label htmlFor="msg">Message</label>
            <input type="text" name="msg" id="msg" required placeholder='Tell Us About Your Query..'/>
          </div>
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </main>
    </div>
  )
}

export default Contact
