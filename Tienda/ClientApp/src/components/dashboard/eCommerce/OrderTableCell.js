import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import CardMenu from '../Common/CardMenu'

const OrderTableCell = (props) => {

  const [anchorE1, setAnchorE1] = useState(undefined);

  const onOptionMenuSelect = event => {
    setAnchorE1(event.currentTarget);
  };
  const handleRequestClose = () => {
    setAnchorE1(null);
  };


  const {id, orderId, name, image, orderDate, deliveryDate, status} = props.data;
  const statusStyle = status.includes("Completed") ? "text-white bg-success" : status.includes("On Hold") ? "bg-amber" : status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
  return (
    <tr
      tabIndex={-1}
      key={id}
    >
      <td>{orderId}</td>
      <td>{orderDate}</td>
      <td>{deliveryDate}</td>
      <td className="status-cell text-right">
        <div className={` badge text-uppercase ${statusStyle}`}>{status}</div>
      </td>
      <td className="text-right">
        <IconButton onClick={onOptionMenuSelect}>
          <i className="zmdi zmdi-more-vert"/></IconButton>
        <CardMenu anchorEl={anchorE1}
                  handleRequestClose={handleRequestClose}/>
      </td>
    </tr>
  );
};

export default OrderTableCell;