const axios = require('axios');

const getLugarLatLng = async(dir) => {

    let encodeUrl = encodeURI(dir);
    let key = "8a9d2261b43f7f5ef4ead983e7a1e995"

    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=${key}`,
        headers: { 'appid': '8a9d2261b43f7f5ef4ead983e7a1e995' }
    });

    const resp = await instance.get();

    if (resp.data.lenght === 0) {
        throw new Error(`No hy resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;



    return {
        direccion,
        lat,
        lng
    }



}
module.exports = {
    getLugarLatLng
}