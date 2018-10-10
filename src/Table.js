import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const TABLE_DATA_PROP_TYPE = PropTypes.shape({
  columns: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      cells: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      ),
    }),
  ),
});

const renderRow = ({ id, cells }) => (
  <tr key={id}>{cells.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
);

const CitiesTable = ({ loading = false, error = null, data = null }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!data) {
    return <div>No results to display</div>;
  }

  const { columns, rows } = data;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, i) => (
            <th key={i}>
              <Link to={`/orderBy/${column}`}>{column}</Link>
            </th>)
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map(renderRow)}
      </tbody>
    </table>
  );
};
CitiesTable.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.instanceOf(Error),
  data: TABLE_DATA_PROP_TYPE,
};

export { CitiesTable as default, TABLE_DATA_PROP_TYPE as tableDataPropType };
