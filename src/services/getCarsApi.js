function getCarsApi(){
    
    return fetch('https://city-mobil.ru/api/cars').then(res => res.json())

}

export default getCarsApi;