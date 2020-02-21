import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            item: {},
        }
    }

    componentDidMount() {
        const { citiesID } = this.props.routerProps.match.params;
        console.log('esto son los details', citiesID)
        const { dataList } = this.props;
        console.log('son las props de details', this.props)

        const item = dataList.find(e => e.id === citiesID)
        console.log('esto es el item', item)
        this.setState({item})
    
    }

    render() {
        const { city, country, pollution, lat, lng } = this.state.item
        console.log('csdkf', city)
        return (
             <div className="detail" >
               <button className="return">
                    <Link to="/"> Return
                    </Link>
               </button>
                <div className="cities" >
                    City: {city}
                    Country: {country}
                    Pollution: {pollution}
                    Lattitud: {lat}
                    Longitude: {lng}
                 
                </div>
                   
           </div>
        )
    }
}

export default Detail;
