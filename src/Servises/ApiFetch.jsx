import axios from 'axios'

const KEY = '36785491-9ea82aeb1b34a8a741b020ac6';
const URL = 'https://pixabay.com/api/';

export async function FethItem(query, page) { 
    const res = await axios.get(`${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    const data = await res.data;
    return data;
    }

