import React, { useCallback, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./tableList.css";

const TableList = ({
  ischeck,
  title1,
  title2,
  title3,
  title4,
  info,
  baseURL,
}) => {
  const [checkedList, setCheckedLists] = useState([]);
  const onCheckedAll = useCallback(
    (checked) => {
      if (checked) {
        const checkedListArray = [];
        info.forEach((list) => checkedListArray.push(list.id));
        setCheckedLists(checkedListArray);
      } else {
        setCheckedLists([]);
      }
    },
    [info]
  );

  const onCheckedElement = useCallback(
    (checked, list) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  const infoList = info.map((info, index) =>
    title4 ? (
      <tr key={index}>
        {ischeck ? (
          <td>
            <div className="tablecheckbigbox">
              <input
                key={info.id}
                type="checkbox"
                onChange={(e) => onCheckedElement(e.target.checked, info.id)}
                checked={checkedList.includes(info.id) ? true : false}
                className="tablecheckbox"
              />
            </div>
          </td>
        ) : (
          <></>
        )}

        {baseURL ? (
          <>
            {" "}
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item1}</button>
              </Link>
            </td>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item2}</button>
              </Link>
            </td>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item3}</button>
              </Link>
            </td>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item4}</button>
              </Link>
            </td>
          </>
        ) : (
          <>
            <td>
              <button className="tablebutton">{info.item1}</button>
            </td>
            <td>
              <button className="tablebutton">{info.item2}</button>
            </td>
            <td>
              <button className="tablebutton">{info.item3}</button>
            </td>
            <td>
              <button className="tablebutton">{info.item4}</button>
            </td>
          </>
        )}
      </tr>
    ) : (
      <tr key={index}>
        {ischeck ? (
          <td>
            <div className="tablecheckbigbox">
              <input
                key={info.id}
                type="checkbox"
                onChange={(e) => onCheckedElement(e.target.checked, info.id)}
                checked={checkedList.includes(info.id) ? true : false}
                className="tablecheckbox"
              />
            </div>
          </td>
        ) : (
          <></>
        )}
        {baseURL ? (
          <>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item1}</button>
              </Link>
            </td>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item2}</button>
              </Link>
            </td>
            <td>
              <Link to={baseURL + info.nav}>
                <button className="tablebutton">{info.item3}</button>
              </Link>
            </td>
          </>
        ) : (
          <>
            <td>
              <button className="tablebutton">{info.item1}</button>
            </td>
            <td>
              <button className="tablebutton">{info.item2}</button>
            </td>
            <td>
              <button className="tablebutton">{info.item3}</button>
            </td>
          </>
        )}
      </tr>
    )
  );

  return (
    <div className="tableListStyle">
      <Table bordered hover>
        <thead>
          {title4 ? (
            <tr>
              {ischeck ? (
                <th>
                  <div className="tablecheckbigbox">
                    <input
                      type="checkbox"
                      onChange={(e) => onCheckedAll(e.target.checked)}
                      checked={
                        checkedList.length === 0
                          ? false
                          : checkedList.length === info.length
                          ? true
                          : false
                      }
                      className="tablecheckbox"
                    />
                  </div>
                </th>
              ) : (
                <></>
              )}
              <th>
                <div className="tableTitle">{title1}</div>
              </th>
              <th>
                <div className="tableTitle">{title2}</div>
              </th>
              <th>
                <div className="tableTitle">{title3}</div>
              </th>
              <th>
                <div className="tableTitle">{title4}</div>
              </th>
            </tr>
          ) : (
            <tr>
              {ischeck ? (
                <th>
                  <div className="tablecheckbigbox">
                    <input
                      type="checkbox"
                      onChange={(e) => onCheckedAll(e.target.checked)}
                      checked={
                        checkedList.length === 0
                          ? false
                          : checkedList.length === info.length
                          ? true
                          : false
                      }
                      className="tablecheckbox"
                    />
                  </div>
                </th>
              ) : (
                <></>
              )}
              <th>
                <div className="tableTitle">{title1}</div>
              </th>
              <th>
                <div className="tableTitle">{title2}</div>
              </th>
              <th>
                <div className="tableTitle">{title3}</div>
              </th>
            </tr>
          )}
        </thead>
        <tbody>{infoList}</tbody>
      </Table>
    </div>
  );
};

export default TableList;
