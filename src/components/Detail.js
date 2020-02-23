import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import credentials from '../credentials';

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
        const { dataList } = this.props;
        const item = dataList.find(e => e.id === cityParse)
        this.setState({item})
    }


    render() {
        const { city, lat, lng } = this.state.item
        return (
             <div className="detail" >
                 <div className="detail_header">
                    <h2 className="detail_title_city">{city}</h2>
                    <button className="return">
                        <Link to="/"> Return
                        </Link>
                    </button>
               </div>

               <div className="detail_map">
                    {lat && (<Map 
                        google={this.props.google}
                        zoom={12}
                        style={{width: '80%', height: '300px'}}
                        initialCenter={{
                            lat: lat,
                            lng: lng}}>
                        <Marker 
                            position={{
                                lat: lat,
                                lng: lng}}
                        />
                    </Map>)}
               </div>
           </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: (credentials.mapsKey)
  })(Detail)


