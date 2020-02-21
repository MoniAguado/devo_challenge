import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {

    render() {
        return (
            <div>
               
               <div className="list" > List
               
                   <ul>
                       {this.props.dataList.map( cities => (
                       <Link to={`/detail/${cities.id}`}>
                            <li className="cities" key={cities.id}>
                                {cities.city}
                                {cities.country}
                                {cities.pollution}
                           </li>
                        </Link>)
                        )}
                       
                   </ul>
               </div>
            </div>
        )
    }
}

export default Home;
