import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const UserDetailCell = ({data}) => {
  const {id, name, detail, image, about, color} = data;
  return (
    <tr
      tabIndex={-1}
      key={id}>
      <td className="text-right border-bottom border-top-0">
        <span className={`jr-link badge text-white text-uppercase bg-${color}`}>{detail}</span>
      </td>

      <td className="text-right border-bottom border-top-0">
        <IconButton className="icon-btn text-light p-1"><i className="zmdi zmdi-more-vert"/></IconButton>
      </td>
    </tr>

  );
};

export default UserDetailCell;
