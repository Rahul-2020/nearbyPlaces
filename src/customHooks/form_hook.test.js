import React from 'react';
import { shallow } from 'enzyme';

import useForm from './form_hook';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

const setUp = (props={}) => {
  const hook = shallow(<HookWrapper hook={props}/>);
  return hook;
}

describe("Form hook", () => {
  const mockCallBack = jest.fn();
  let wrapper;
  
  beforeEach(() => {
    const props = () => useForm(mockCallBack)
    wrapper = setUp(props);
  });
  
  it('should render', () => {
    expect(wrapper.length).toBe(1);
  });

  it("should set initial value", () => {

    let { hook } = wrapper.find('div').props();
    let {values} = hook;

    expect(values).toEqual({});
  });

  it("should call callback function on submit", () => {
    const mockEvent = { preventDefault: () => {} };
    let { hook } = wrapper.find('div').props();
    let {handleSubmit} = hook;
   
    handleSubmit(mockEvent);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it("should set input change value", () => {
    const expectedValue = {
      location: 'sf'
    }
    let { hook } = wrapper.find('div').props();
    let {values, handleChange} = hook;
    
    handleChange({ target: {name: 'location', value: 'sf'} });
    
    ({ hook } = wrapper.find('div').props());
    ({values, handleChange} = hook);

    expect(values).toEqual(expectedValue);
  });

    
  // it("should call prevent default function", () => {
  //   let prevented = false;
  //   const mockEvent = { preventDefault: () => {prevented=true} };
    
  //   let { hook } = wrapper.find('div').props();
  //   let {handleSubmit} = hook;

  //   handleSubmit(mockEvent);
  //   expect(prevented).toBe(true);
  // });
  
})