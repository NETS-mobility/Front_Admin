import React, { useCallback, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tableList.css";
const TableLineWithLink = ({ url, content }) => {
  return (
    <td>
      <Link to={url}>
        <button className="tablebutton">{content}</button>
      </Link>
    </td>
  );
};

const TableLineWithOutLink = ({ content }) => {
  return (
    <td>
      <button className="tablebutton">{content}</button>
    </td>
  );
};

const TableTitle = ({ title }) => {
  return (
    <th>
      <div className="tableTitle">{title}</div>
    </th>
  );
};

// const CheckAllForTable = () => {
//   return (
//     <th>
//       <div className="tablecheckbigbox">
//         <input
//           type="checkbox"
//           onChange={(e) => onCheckedAll(e.target.checked)}
//           checked={
//             checkedList.length === 0
//               ? false
//               : checkedList.length === info.length
//               ? true
//               : false
//           }
//           className="tablecheckbox"
//         />
//       </div>
//     </th>
//   );
// };

const NewTableList = ({ needCheck, titles, props, datas, baseURL }) => {
  return (
    <div className="tableListStyle">
      <Table bordered hover>
        <thead>
          <tr>
            {titles.map((title, i) => {
              return <TableTitle title={title} key={i} />;
            })}
          </tr>
        </thead>

        <tbody>
          {datas.map((data, i) => {
            const url = `${baseURL}/${data.num}`;
            return (
              <tr key={i}>
                {props.map((prop, i) => {
                  return (
                    <TableLineWithLink key={i} url={url} content={data[prop]} />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default NewTableList;
