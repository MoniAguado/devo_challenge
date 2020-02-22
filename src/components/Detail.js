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

        const item = dataList.find(e => e.id == citiesID)
        console.log('esto es el item', item)
        this.setState({item})
    
    }

    render() {
        const { city, country, pollution, lat, lng } = this.state
        console.log('csdkf', city)
        return (
             <div className="detail" >
                 <div className="detail_header">
                    <h2 className="detail_title_city">City: {city}</h2>
                    <button className="return">
                        <Link to="/"> Return
                        </Link>
                    </button>
               </div>
                <div className="detail_cities" >
                    <div className="detail_country">Country: {country}</div>
                    <div className="detail_pollution">Pollution: {pollution}</div>
                    <div>Lattitud: {lat}</div>
                    <div>Longitude: {lng}</div>
                 
                </div>
                   
           </div>
        )
    }
}

export default Detail;
