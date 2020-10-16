import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const FriendsTableCell = ({data}) => {
  const {id, name, designation, image, status} = data;
  const style = status.includes("Followed") ? "btn-primary" : "btn-outline-secondary";
  return (
    <tr
      style={{background: 'white'}}
      tabIndex={-1}
      key={id}>
      <td className="text-right">
        <div className={`btn btn-sm text-uppercase btn-rounded ${style}`}>{status}</div>
      </td>
    </tr>

  );
};

export default FriendsTableCell;
