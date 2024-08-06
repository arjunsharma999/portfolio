import React from 'react'

function Contact() {
  return (
    <>
     <div className='mid-head' id='Contact'>
                <h2>GET IN TOUCH</h2>
            </div>

            <div className='contaier-contact'>

<div className='formss'>

    <form
        action="https://formspree.io/f/mwkdoagz" method="POST" target='-' className='contact-input'>

        <input type="text" name="username" placeholder='name' autoComplete='off' required
        />


        <input type="email" name="email" placeholder='email' autoComplete='off' required
        />

        <textarea name="message" placeholder='type a message' id="" cols="30" rows="6"
            autoComplete="off" required
        >
        </textarea>

        <input type="submit" value="send" />
    </form>


</div>


</div>

    
    
    </>
  )
}

export default Contact