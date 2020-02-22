import React from 'react';
import App from './App';
import Home from './components/Home';
import Detail from './components/Detail';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })

// describe('App', () => {
//   it('llama a handleTodo cuando introduce un valor en input', () => {
//     const handleFilter = jest.fn();
//     const wrapper = shallow(<App handleFilter={handleFilter}/>)

//     wrapper
//       .find('input')
//       .simulate('change', { target : { value: 'Madrid'}})

//     expect(true).toBeTruthy([['Madrid']])
  
    
//   })
// })


describe('App', () => {
  it('App should render correctly', () => {
    const component = shallow(<App debug/>);

    component
      .find('input')
      .simulate('inputText', { value: 'Madrid'})
  
    expect(component).toMatchSnapshot();
    component.unmount();
  });
  // describe('Home', () => {
  //   it('home component should render correctly', () => {
  //     const home = shallow(<Home />);
    
  //     expect(home).toMatchSnapshot();
  //   });
  // });
  // describe('Detail', () => {
  //   it('detail component should render correctly', () => {
  //     const detail = shallow(<Detail />);
    
  //     expect(detail).toMatchSnapshot();
  //   });
  // });

  // describe('<Home /> rendering', () => {
  //   it('should render one <ul>', () => {
  //       let wrapper = shallow(<Home />);
  //       expect(wrapper.children('ul')).toHaveLength(1);
  //   });
// });
});



