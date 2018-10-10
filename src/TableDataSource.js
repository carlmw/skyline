import { PureComponent } from 'react';
import PropsTypes from 'prop-types';

const transformData = data => {
  if (!data || !data.length) return null;

  // The order of values in our JSON cannot be guaranteed, so when we
  // transform the data for tabular rendering we ensure that the values
  // in our array match up with the corresponding column for each row
  const columns = Object.keys(data[0]);
  const rows = data.map(row => ({
    id: row.id,
    cells: columns.map(column => row[column]),
  }));

  return { columns, rows };
}

class TableDataSource extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null, error: null };
  }

  async componentDidMount() {
    try {
      const data = await this.props.onInit();

      this.setState({ data: transformData(data), loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    return this.props.children(this.state);
  }
}
TableDataSource.propTypes = {
  children: PropsTypes.func.isRequired,
  onInit: PropsTypes.func.isRequired,
};

export default TableDataSource;
