import React from "react";
import { Link } from "gatsby"

export default function createContact() {
    return(
        <div>
            <Link className='close-create-contact' to='/'>Close</Link>
            <form className='create-contact-form'>
          <div className='create-contact-details'>
            <input type='text' name='name' placeholder='Name'></input>
            <input type='text' name='email' placeholder='Email'></input>
            <button>Add Contact</button>
          </div>
        </form>
        </div>
    )
}