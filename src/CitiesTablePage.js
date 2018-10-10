import React, { PureComponent } from 'react'
import TableDataSource from './TableDataSource';
import TableSorter from './TableSorter';
import Table from './Table';
import PropTypes from 'prop-types';

class CitiesTablePage extends PureComponent {
  fetchData() {
    return fetch('/cities.json').then(response => response.json());
  }

  renderTable(props) {
    return <Table {...props} />;
  }

  renderSortable(props) {
    const { params } = this.props;
    let orderBy;

    if (params) {
      orderBy = params.orderBy;
    }

    return (
      <TableSorter {...props} orderBy={orderBy}>
        {this.renderTable}
      </TableSorter>
    );
  }

  render() {
    const { params } = this.props;

    return (
      <TableDataSource onInit={this.fetchData}>
        {(props) => this.renderSortable(props, params)}
      </TableDataSource>
    );
  }
}
CitiesTablePage.propTypes = {
  params: PropTypes.shape({
    orderBy: PropTypes.string,
  }),
};

export default CitiesTablePage;
