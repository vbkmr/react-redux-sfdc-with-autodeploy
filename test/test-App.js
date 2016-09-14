import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../src/containers/App.js'
import { Provider } from 'react-redux'
import configureStore from '../src/store/configureStore'
const store = configureStore()

describe('<App/>', function(){
  it('should have a form and a submit button', function(){
    const wrapper = mount(<Provider store={store}>
      <App />
    </Provider>);
    expect(wrapper.find('SearchForm')).to.have.length(1);
    expect(wrapper.find('ResultTable')).to.have.length(1);
  });
})
