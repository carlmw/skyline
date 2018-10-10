import React from 'react';
import { shallow } from 'enzyme';
import TableDataSource from './TableDataSource';

describe('<TableDataSource />', () => {
  const CITIES = [
    {
      'id': 2,
      'City': 'New York City',
      'Country': 'United States',
      'All Buildings': 1390,
      '100m+': 803,
      '150m+': 257,
      '200m+': 66,
      '300m+': 7,
      'Telecom Towers': 2,
      'All Structures': 1398
    },
  ];
  const COLUMNS = Object.keys(CITIES[0]);
  const ROWS = [{ id: CITIES[0].id, cells: Object.values(CITIES[0]) }];
  const RESOLVED_FETCH = Promise.resolve(CITIES);

  let children;

  beforeEach(() => {
    children = jasmine.createSpy('children');
  });

  it('starts in the loading state', () => {
    const result = shallow(<TableDataSource onInit={() => {}}>{children}</TableDataSource>);

    expect(children).toHaveBeenCalledWith({ loading: true, error: null, data: null });
  });

  describe('when loading is successful', () => {
    it('renders children with the available data', async () => {
      const result = await shallow(<TableDataSource onInit={() => RESOLVED_FETCH}>{children}</TableDataSource>);
      await result.instance().componentDidMount();

      expect(children).toHaveBeenCalledWith({ loading: false, data: { columns: COLUMNS, rows: ROWS }, error: null });
    });
  });

  describe('when loading fails', () => {
    const ERROR = new Error('Failed to fetch cities');

    it('renders children with an error', async () => {
      const result = await shallow(<TableDataSource onInit={() => Promise.reject(ERROR)}>{children}</TableDataSource>);
      await result.instance().componentDidMount();

      expect(children).toHaveBeenCalledWith({ loading: false, data: null, error: ERROR });
    });
  });
});
