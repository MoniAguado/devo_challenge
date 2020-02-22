const getData = () => {
    return fetch('./data.json')
    .then(response => response.json())
    .then(data => data.cities)
    .catch(error => {
        console.log(error);
    });
};

export default getData;