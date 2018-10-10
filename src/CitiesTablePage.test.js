import React from 'react';
import { shallow } from 'enzyme';
import CitiesTablePage from './CitiesTablePage';

describe('<CitiesTablePage />', () => {
  const ORDER_BY = 'City';

  it('forwards the orderBy param for sorting', () => {
    const result = shallow(<CitiesTablePage params={{ orderBy: ORDER_BY }} />).dive();

    expect(result.prop('orderBy')).toEqual(ORDER_BY);
  });
});
