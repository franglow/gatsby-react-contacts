import React, { useState } from 'react'
import './index.css';
import { FaTimes } from 'react-icons/fa';

const contactList = {
    width: "100%",
    margin: 0,
    padding: 0,
    listStyleType: "none"
  }
  const contactListItem = {
    padding: 20,
    background: "white",
    display: "flex"
  }
  
  // @media (min-width: 600px) {
  //   .contact-list-item {
  //     margin: 20px;
  //     border: 1px solid #d5d8df;
  //     border-radius: 4px;
  //   }
  // }
  
  const contactAvatar = {
    width: 60,
    height: 60,
    marginRight: 20,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "50%",
    flexShrink: 0
  }
  
  const contactDetails = {
    paddingLeft: 20,
    borderLeft: "1px solid #eee",
    flex: 1,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
  // .contact-details p {
  const contactDetailsP = {
    margin: 0,
    minWidth: 0,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
  
  const contactRemove = {
    paddingLeft: 20,
    alignSelf: "center",
    width: 32,
    height: 32,
    backgroundColor: "transparent",
    backgroundSize: "100% 100%",
    border: 0,
    color: "black",
    verticalAlign: "middle",
    cursor: "pointer",
    outline: "none"
  }

function ListContacts({ contacts, onContactChange }) {

  const [ query, setQuery ] = useState('')

  const updateQuery = (query => {setQuery(query.trim() )})

    return(
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input 
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          >    
          </input>
        </div>
        <ol className='contact-list'>
          {contacts.map(item => (
            <li key={item.id} className='contact-list-item'>
              <div className='contact-avatar' style={{
                backgroundImage: `url(${item.avatarURL})`
                }}>
                </div>
                  <div className='contact-details'>
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                  </div>
                  <button
                    onClick={() => onContactChange(item)} 
                    className='contact-remove'>Remove
                  </button>
            </li>            
          ))}
        </ol>
      </div>
    )
}

export default ListContacts