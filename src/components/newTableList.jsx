import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import "./tableList.css";
const TableLine = ({ url, content }) => {
  let navigate = useNavigate();
  return (
    <td>
      <button className="tablebutton" onClick={() => url && navigate(url)}>
        {content}
      </button>
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

const NewTableList = ({
  needCheck,
  titles,
  props,
  datas,
  baseURL,
  detailProp,
}) => {
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
            const url = `${baseURL}/${data[detailProp]}`;
            return (
              <tr key={i}>
                {props.map((prop, i) => {
                  return <TableLine key={i} url={url} content={data[prop]} />;
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
