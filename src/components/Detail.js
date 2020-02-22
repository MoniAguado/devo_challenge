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
        const { cityID } = this.props.routerProps.match.params;
        const cityParse = parseInt(cityID)
        console.log('esto son los details', cityID)
        const { dataList } = this.props;
        console.log('son las props de details', this.props)

        const item = dataList.find(e => e.id === cityParse)
        console.log('esto es el item', item)
        this.setState({item})
        console.log('esto es el item seteado', item)

        
    }


    render() {
        const { city, country, pollution, lat, lng } = this.state.item
        console.log('csdkf', city)
        return (
             <div className="detail" >
                 <div className="detail_header">
                    <h2 className="detail_title_city">{city}</h2>
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
