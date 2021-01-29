import {endpoint} from '../Constants';

export const getAllSneakers = async () => {
    return await fetch(`${endpoint}/getShoes`).then(res => res.json()).then(data => data);
}

export const postSneakers = async (form) => {
    return await fetch(`${endpoint}/addShoe`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          return data
      })
}

export const changeVote = async (type, shoe_id) => {
    const url = `${endpoint}/updateVote/${type}/${shoe_id}`
    console.log(url)
    return await fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
}