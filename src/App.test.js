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
});

  //  TRYING TESTING: I try to test the components and some functionalitys the project have with everal methods:

  // 1 methos:


  // describe('Home', () => {
  //   it('home component should render correctly', () => {
  //     const home = shallow(<Home />);
    
  //     expect(home).toMatchSnapshot();
  //     home.unmount();
  //   });
  // });
  // describe('Detail', () => {
  //   it('detail component should render correctly', () => {
  //     const detail = shallow(<Detail />);
    
  //     expect(detail).toMatchSnapshot();
  //   });
  // });

 

// 2 method:

// describe('<Home />', () => {
//   it('adds checked attribute to input', () => {
//     const handleFilter =jest.fn();
//     const handleSortMax = jest.fn();
//     const handleSortMin= jest.fn();
//     const index = 6;


//     const wrapper = shallow(
//     <Home
//       handleFilter={handleFilter}
//       handleSortMax={handleSortMax}
//       handleSortMin={handleSortMin}
//     />
//     );

//     wrapper
//       .find('input')
//       .at(0)
//       .simulate('click')

//       expect(completeTodo.mock.calls).toEqual([[6]])
//       expect(removeTodo.mock.calls).toEqual([])
//   });


// 3 method:

  // it('adds disabled attribute to input', () => {
  //   const wrapper = shallow(<Home disabled />);
  //   const input = wrapper.find('input');

  //   expect(input.props().disabled).toBe(true);
  // });

  // it('calls the onChange function', () => {
  //   const onChange = expect.createSpy();
  //   const wrapper = mount(<Home onChange={this.handleFilter} />);
  //   const input = wrapper.find('input');

  //   input.simulate('change');
  //   expect(onChange).toHaveBeenCalled();
  // });



