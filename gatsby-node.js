import { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import { func } from 'prop-types';

async function fetchWinesAndTurnIntoNodes({
    actions, 
    createContentDigest
    }) {
    const res = await fetch('https://api.sampleapis.com/wines/reds');
    const wines = await res.json();
    for (const wine of wines) {
        const nodeMeta = {
            id: `${wine.id}`,
            parent: null,
            children: [],
            internal: {
                type: 'Wine',
                mediaType: 'application/json',
                contentDigest: createContentDigest(wine),
            }
        };
        actions.createNode({
            ...wine,
            ...nodeMeta,
        })
    }
    
}

// export async function sourceNodes(params) {
//     await Promise.all([await fetchWinesAndTurnIntoNodes(params)]);
// }

const token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

async function fetchContactsAndTurnItNodes({
    actions, 
    createContentDigest
    }) {
    const res = await fetch('http://localhost:5001/contacts', { headers });
    const contacts = await res.json();
    for (const contact of contacts.contacts) {
        const nodeMeta = {
            id: `${contact.id}`,
            parent: null,
            children: [],
            internal: {
                type: 'Contact',
                mediaType: 'application/json',
                contentDigest: createContentDigest(contact),
            }
        };
        actions.createNode({
            ...contact,
            ...nodeMeta,
        })
    }
}

export async function sourceNodes(params) {
    await Promise.all([await fetchContactsAndTurnItNodes(params)]);
}

async function useFetchDelete() {
    const res = await fetch(`http://localhost:5001/contacts/${contact.id}`)
    
}