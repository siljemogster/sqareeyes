import { BASE_URL } from './constants/api.js';

console.log(BASE_URL); 

async function getProducts() {
    try {
        const response = await fetch(BASE_URL); 
        console.log(response); 
    } catch (error) {
        console.error(error);
    }

}

getProducts(); 