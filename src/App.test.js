import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });//new instance

const setup = (props={}, state=null) => {

    return shallow(<App {...props} />)

}

test('renders without crashing', () => {
 const wrapper =  shallow(<App/>)
 const appComponent= wrapper.find("[data-test='component-app']")
 expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper =  shallow(<App/>)
    const button= wrapper.find("[data-test='increment-button']")
    expect(button.length).toBe(1);
})

test('renders count display', () => {
    const wrapper =  shallow(<App/>)
    const countDisplay= wrapper.find("[data-test='count-display']")
    expect(countDisplay.length).toBe(1);
})

test('conter starts at 0', () => {

})

test ('renders clicking button increments counter display', () => {

})
