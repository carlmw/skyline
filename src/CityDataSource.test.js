import React from 'react';
import { shallow } from 'enzyme';
import CityDataSource from './CityDataSource';

describe('<CityDataSource />', () => {
  let result;
  let children;

  beforeEach(() => {
    children = jasmine.createSpy('children');
    result = shallow(<CityDataSource>{children}</CityDataSource>);
  })

  it('starts in the loading state', () => {
    expect(children).toHaveBeenCalledWith({ loading: true });
  });
});
