import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import ListContacts from "../Components/ListContacts";

//styles
/* CreateContact */

const closeCreateContact = {
  display: 'block',
  width: 60,
  height: 60,
  backgroundImage: "url('./icons/arrow-back.svg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: 30,
  fontSize: 0
}

const createContactForm = {
  padding: 20,
  maxWidth: 500,
  margin: "0 auto",
  display: "flex"
}

const createContactDetails = {
  marginLeft: 20
}

const createContactAvatarInput = {
  minWidth: 60,
  height: 60,
  backgroundColor: "white",
  backgroundImage: "url('./icons/person.svg')",
  backgroundSize: "32px 32px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "50%",
}

// .create-contact-details input {
const createContactDetailsInput = {
  width: "100%",
  padding: "5px 10px",
  marginBottom: 10,
  fontSize: "inherit",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #ccc",
  outline: 0
}


// .create-contact-details button {
const createContactDetailsButton = {
  marginTop: 20,
  background: "#ccc",
  padding: 10,
  textTransform: "uppercase",
  fontSize: "inherit",
  border: "none",
  outline: 0
}

/* ListContacts */

const listContacts = {
  paddingTop: 60
}
const listContactsTop = {
  position: "fixed",
  width: "100%",
  top: 0,
  borderBottom: "1px solid #d5d8df",
  display: "flex",
}

const searchContacts = {
  width: "100%",
  padding: "20px 20px 20px 60px",
  backgroundImage: "url('./icons/search.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "20px center",
  backgroundSize: "1.2em",
  fontSize: "1.2em",
  border: 0,
  outline: "none"
}

const addContact = {
  display: "block",
  width: 73,
  background: "white",
  backgroundImage: "url('./icons/person-add.svg')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: 28,
  fontSize: 0
}

const showingContacts = {
  textAlign: "center", 
  margin: "20px 0"
}
// .showing-contacts button {
const showingContactsButton = {
  color: "blue",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "inherit"
}



// markup
const IndexPage = ({ data }) => {
  const [contacts, setContacts] = useState(data.contacts.nodes)

  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => (c.id !== contact.id)))
  }

  return (
    <ListContacts 
      onContactChange={removeContact} 
      contacts={contacts}
    />

  )
}

// INFO limited to 5 items from original array
export const query = graphql`
  query {
    contacts: allContact {
      nodes {
        name
        email
        avatarURL
        id
      }
    }
  }
`;

export default IndexPage;