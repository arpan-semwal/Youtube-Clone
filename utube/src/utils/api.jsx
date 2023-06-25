import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";
const API_KEY = " 1bc9c21af7msha197c3bcd45011ap1fb6c5jsn4d7b0b8d6753";
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