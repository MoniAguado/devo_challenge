import React, { Component} from 'react';
import './App.scss';
import getData from './api/Api';
import Home from './components/Home';
import Detail from './components/Detail';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
    }
    
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        dataList: data,
      });
    });
  }

  render() {

    console.log('Lista', this.state.dataList)
    const { dataList } = this.state


    return (
      <div className="root">
        <div className="main_app">
        <h1 className="title">Help Greta!</h1> 
          <div className="filters">
            <input className="input" placeholder=" Barcelona"></input>
            <button className="sort_button">Sort</button>
          </div>

        <Switch>
          
          <Route
            path="/detail/:charactersID"
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
              dataList={dataList}/>
          </Route>
          
        </Switch>

        </div>
      </div>
    );
  }
}

export default App;
