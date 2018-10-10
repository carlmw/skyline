import React, { PureComponent } from 'react';
import { func } from 'prop-types';

class CityDataSource extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  render() {
    return this.props.children(this.state);
  }
}
CityDataSource.propTypes = {
  children: func.isRequired,
};

export default CityDataSource;
