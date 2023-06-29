import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = " d2f9c2a3edmsh3f4f53e2aa3af46p1fd24djsn003570165022";
const options = {
   
  
    params: {
    
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async(url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
  }