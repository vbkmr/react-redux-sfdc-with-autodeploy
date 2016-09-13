import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../src/containers/App.js'

describe('<App/>', function(){
  it('should have a form submit button', function(){
    const wrapper = shallow(<App/>);
    expect(wrapper.find('form')).to.have.length(1);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('should change the state after click of the fetch button', function() {
    const wrapper = shallow(<App/>);
    wrapper.setState({});
    wrapper.find('button').simulate('click')
    expect(wrapper.state('tableData')).to.equal('');
    expect(wrapper.state('tableMessage')).to.equal('一覧部');
  });
})
