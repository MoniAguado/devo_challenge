import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        return (
            <div className="list" >
                <ul className="list_cities">
                    {this.props.citiesFilter.map( city => (
                    <Link to={`/detail/${city.id}`}>
                        <li className="cities_item" key={city.id}>
                            <div className="item_city">{city.city}</div>
                            <div className="item_country">{city.country}</div>
                            <div className="item_pollution">{city.pollution}</div>
                        </li>
                    </Link>
                    )
                    )}
                    
                </ul>
            </div>
        )
    }
}

export default Home;
