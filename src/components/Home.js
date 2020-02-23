import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let citiesFilter = [];

class Home extends Component {

    constructor(props) {
    super(props) 
    
    this.state = {
        inputText: '',
      }
    }

    handleFilter = (event) => {
        this.setState({
          inputText: event.target.value,
        });
      }
    
    handleSortMax = () => {
        const citiesSort = this.props.dataList.sort((a, b) => b.pollution - a.pollution)
        this.setState({
            dataList: citiesSort,
        })
    }

    handleSortMin = () => {
        const citiesSort = this.props.dataList.sort((a, b) => a.pollution - b.pollution)
        this.setState({
            dataList: citiesSort,
        })
    }
    
    render() {

        const { inputText } = this.state

        citiesFilter = this.props.dataList.filter( city => {
            return  city.city
            .toUpperCase()
            .includes(this.state.inputText.toUpperCase()
          )})

        return (
            <div className="list" >
                <div className="filters">
                    <input
                        className="input"
                        placeholder=" Barcelona"
                        onChange={this.handleFilter}
                        inputText={inputText}>

                    </input>
                    <div className="buttons_box">
                        <button
                            className="sort_button"
                            onClick={this.handleSortMax}
                            >+ -
                        </button>
                        <button
                            className="sort_button"
                            onClick={this.handleSortMin}
                            >- +
                        </button>
                    </div>
                </div>
                <ul className="list_cities">
                    {citiesFilter.map( city => (
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
