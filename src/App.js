import React, { PureComponent } from 'react';
import TableDataSource from './TableDataSource';
import Table from './Table';

class App extends PureComponent {
  fetchData() {
    return fetch('/cities.json').then(response => response.json());
  }

  renderTable(props) {
    return <Table {...props} />
  }

  render() {
    return (
      <TableDataSource onInit={this.fetchData}>
        {this.renderTable}
      </TableDataSource>
    );
  }
}

export default App;
