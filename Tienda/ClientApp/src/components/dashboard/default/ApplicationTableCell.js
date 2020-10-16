import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const ApplicationTableCell = ({data}) => {
  const {id, name, description, image, time, price} = data;
  return (
    <tr
      tabIndex={-1}
      key={id}
    >

      <td>{time}</td>
      <td>{price}</td>
    </tr>

  );
};

export default ApplicationTableCell;
