import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const MarketingTableCell = ({data}) => {
  const {id, name, desc, icon, color, budget, growth} = data;
  const iconName = growth > 0 ? "up" : "down";
  const statusStyle = growth > 0 ? " text-success" : "text-danger";
  return (
    <tr
      tabIndex={-1}
      key={id}
    >
      <td>
        <h5 className="mb-0">${budget}</h5>
        <span className="text-light-grey jr-fs-sm">Spent</span>
      </td>
      <td className="text-right">
        <div className={`${statusStyle}`}>
          <i className={`zmdi zmdi-trending-${iconName}`}/> {growth}</div>
        <div className="text-light-grey jr-fs-sm text-capitalize">{iconName}</div>
      </td>
    </tr>

  );
};

export default MarketingTableCell;