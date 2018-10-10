import React from 'react';
import { shallow } from 'enzyme';
import TableSorter from './TableSorter';

describe('<TableSorter />', () => {
  const NEW_YORK = {
    id: 2,
    cells: [2, 'New York City', 1390],
  };
  const CHICAGO = {
    id: 6,
    cells: [6, 'Chicago', 526],
  };
  const TOKYO = {
    id: 6,
    cells: [6, 'Tokyo', 348],
  };
  const CITY_COLUMN = 'City';
  const ALL_BUILDINGS_COLUMN = 'All Buildings';
  const ALL_COLUMNS = ['id', CITY_COLUMN, ALL_BUILDINGS_COLUMN];
  const CITY_TABLE_DATA = {
    columns: ALL_COLUMNS,
    rows: [
      NEW_YORK,
      TOKYO,
      CHICAGO,
    ],
  };

  let children;

  beforeEach(() => {
    children = jasmine.createSpy('children');
  });

  it('renders children', () => {
    const result = shallow(<TableSorter loading={false} error={null} data={CITY_TABLE_DATA}>{children}</TableSorter>);

    expect(children).toHaveBeenCalledWith({
      loading: false,
      error: null,
      data: CITY_TABLE_DATA,
      onSort: jasmine.any(Function),
    });
  });

  describe('when an `orderBy` value is supplied', () => {
    const FakeTable = () => null;

    it('sorts rows by the given column', () => {
      const result = shallow((
        <TableSorter orderBy={CITY_COLUMN} loading={false} error={null} data={CITY_TABLE_DATA}>
          {props => <FakeTable {...props} />}
        </TableSorter>),
      );

      expect(result.find(FakeTable).prop('data')).toEqual({
        columns: ALL_COLUMNS,
        rows: [
          CHICAGO,
          NEW_YORK,
          TOKYO,
        ],
      })
    });

    it('supports sorting by numbers', () => {
      const result = shallow((
        <TableSorter orderBy={ALL_BUILDINGS_COLUMN} loading={false} error={null} data={CITY_TABLE_DATA}>
          {props => <FakeTable {...props} />}
        </TableSorter>),
      );

      expect(result.find(FakeTable).prop('data')).toEqual({
        columns: ALL_COLUMNS,
        rows: [
          TOKYO,
          CHICAGO,
          NEW_YORK,
        ],
      })
    });
  });
});
