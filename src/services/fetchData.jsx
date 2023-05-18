import axios from 'axios';


export default async function getData(url, options) {
    try {
        const response = await axios.get(url, options)
        return response;
    } catch (error) {
        console.error(error)
    }

}
