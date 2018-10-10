import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('<Table />', () => {
  const CITY_TABLE_DATA = {
    columns: ['id', 'City', 'Country', 'All Buildings', '100m+'],
    rows: [
      {
        id: 2,
        cells: [2, 'New York City', 'United States', 1390, 803],
      },
    ],
  };

  it('has a loading state', () => {
    const result = shallow(<Table loading/>);

    expect(result).toMatchSnapshot();
  });

  it('has an error state', () => {
    const result = shallow(<Table error={new Error('Failed to load data')} />);

    expect(result).toMatchSnapshot();
  });

  it('displays a no results message when there is no data', () => {
    const result = shallow(<Table />);

    expect(result).toMatchSnapshot();
  });

  it('renders rows when we have data', () => {
    const result = shallow(<Table data={CITY_TABLE_DATA} />);

    expect(result).toMatchSnapshot();
  });
});
