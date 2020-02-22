import React, { Component} from 'react';
import './App.scss';
import getData from './api/Api';
import Home from './components/Home';
import Detail from './components/Detail';
import { Switch, Route } from 'react-router-dom';

let citiesFilter = [];

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
      inputText: '',
    }
    
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        dataList: data,
      });
    });
  }

  handleFilter = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSort = () => {
    const citiesSort = this.state.dataList.sort((a, b) => b.city - a.city)
    console.log('este sort que', citiesSort)
    this.setState({
      dataList: citiesSort,
    })
  }


  render() {

    console.log('Lista', this.state.dataList)

    citiesFilter = this.state.dataList.filter( city => {
      return  city.city
      .toUpperCase()
      .includes(this.state.inputText.toUpperCase()
    )})

    const { dataList, inputText, citiesSort } = this.state


    return (
      <div className="root">
        <div className="main_app">
        <h1 className="title">Help Greta!</h1> 
          <div className="filters">
            <input
              className="input"
              placeholder=" Barcelona"
              onChange={this.handleFilter}
              inputText={inputText}>

            </input>
            <button
              className="sort_button"
              onChange={this.handleSort}
              citiesSort={citiesSort}>Sort
            </button>
          </div>

        <Switch>
          
          <Route
            path="/detail/:cityID"
            render={routerProps => {
              console.log('GUARROOOOOO', dataList )
              return (
                <Detail
                  routerProps={routerProps}
                  dataList={dataList}
                 />
            )}}>
           
          </Route>
          <Route path="/">
            <Home
              citiesFilter={citiesFilter}/>
          </Route>
          
        </Switch>

        </div>
      </div>
    );
  }
}

export default App;
