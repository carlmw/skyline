import { PureComponent } from 'react';
import PropsTypes from 'prop-types';
import sortBy from 'lodash.sortby';
import { tableDataPropType } from './Table';

class TableSorter extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { column: null };
    this.onSort = this.onSort.bind(this);
  }

  onSort(orderBy) {
    this.setState({ orderBy });
  }

  sortRows(data, orderBy) {
    const { rows, columns } = data;
    const index = columns.indexOf(orderBy);

    return sortBy(rows, `cells[${index}]`);
  }

  render() {
    const { children, orderBy, ...props } = this.props;
    let { data } = this.props;

    if (data && orderBy) {
      const rows = this.sortRows(data, orderBy);
      data = { ...data, rows };
    }

    return children({ ...props, data, onSort: this.onSort });
  }
}
TableSorter.propTypes = {
  orderBy: PropsTypes.string,
  data: tableDataPropType,
  children: PropsTypes.func.isRequired,
};

export default TableSorter;
