import React from 'react';
import App from './App';
import Home from './components/Home';
import Detail from './components/Detail';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })


describe('App', () => {
  it('App should render correctly', () => {
    const component = shallow(<App debug/>);
    
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  describe('Home', () => {
    it('home component should render correctly', () => {
      const home = shallow(<Home />);
    
      expect(home).toMatchSnapshot();
      home.unmount();
    });
  });
  // describe('Detail', () => {
  //   it('detail component should render correctly', () => {
  //     const detail = shallow(<Detail />);
    
  //     expect(detail).toMatchSnapshot();
  //   });
  // });

 
});



