import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        return (
            <div className="list" >
                <ul className="list_cities">
                    {this.props.dataList.map( cities => (
                    <Link to={`/detail/${cities.id}`}>
                        <li className="cities_item" key={cities.id}>
                            <div className="item_city">{cities.city}</div>
                            <div className="item_country">{cities.country}</div>
                            <div className="item_pollution">{cities.pollution}</div>
                        </li>
                    </Link>)
                    )}
                    
                </ul>
            </div>
        )
    }
}

export default Home;
