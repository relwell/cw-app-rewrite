/**
*
* GenericStudySection
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Table, Grid } from 'react-bootstrap';
import LoadingPane from 'components/LoadingPane';

const GenericStudySection = (props) => props.data !== undefined ? (
  <Grid>
    <Table striped bordered condensed>
      <tbody>
        {props.data.map((item) => (
          <tr key={item.label}>
            <td><b>{item.label}</b></td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </Grid>
) : (<LoadingPane />);

GenericStudySection.propTypes = {
  data: PropTypes.array,
};

export default GenericStudySection;
