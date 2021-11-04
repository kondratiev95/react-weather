import axios from "axios";

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = 'd32ab3ce123bede81be4d3d21624b27b';

export const getWeather = async (city) => {
    try {
        const response = axios.get(baseUrl + `q=${city}&appid=${apiKey}`);
        return response;
    } 
    catch(error) {
        throw error
    }
     
}