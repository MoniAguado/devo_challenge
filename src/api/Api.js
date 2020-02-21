const getData = () => {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        return data.cities.map(cities => {
            return {
                id: cities.id,
                city: cities.city,
                country: cities.country,
                pollution: cities.pollution,
                lat: cities.lat,
                lng: cities.lng,
            };
        });
    })
    .catch(error => {
        console.log(error);
    });
};

export default getData;