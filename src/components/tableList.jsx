import React, { useCallback, useState }  from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './tableList.css';

/*
const TableList = ({
    ischeck : bool (true이면 checkbox사용, false이면 checkbox X)
    infoList : [{
        id: 순서,
        nav: "이동할 페이지 주소",
        item1: "title1의 내용"
        item2: "title2의 내용",
        item3: "title3의 내용",
        item4: "title4의 내용"
    },]
    (infoList 에 있는 정보가 출력됨)

    title1~title4 : string (column3개로 사용하려면 title4 입력 X )
})
*/

const TableList = ({ischeck, information, title1, title2, title3, title4}) => {

    const [checkedList, setCheckedLists] = useState([]);

    const onCheckedAll = useCallback(
        (checked)=>{
            if (checked) {
              const checkedListArray = [];
      
              information.forEach((list) => checkedListArray.push(list.id));
      
              setCheckedLists(checkedListArray);
            } else {
              setCheckedLists([]);
            }
          },
          [information]
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


    const infoList = information.map((info, index) => (
        (title4?
            <tr key={index}>
                {ischeck?
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
                </td>:<></>}
                <td><Link to={info.nav}><button className="tablebutton">{info.item1}</button></Link></td>
                <td><Link to={info.nav}><button className="tablebutton">{info.item2}</button></Link></td>
                <td><Link to={info.nav}><button className="tablebutton">{info.item3}</button></Link></td>
                <td><Link to={info.nav}><button className="tablebutton">{info.item4}</button></Link></td>
            </tr>
            :
             <tr key={index}>
                 {ischeck?
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
                </td>:<></>}
                 <td><Link to={info.nav}><button className="tablebutton">{info.item1}</button></Link></td>
                 <td><Link to={info.nav}><button className="tablebutton">{info.item2}</button></Link></td>
                 <td><Link to={info.nav}><button className="tablebutton">{info.item3}</button></Link></td>
            </tr>
            )
    ))

    return(
        <div className="tableListStyle">
        <Table bordered hover>
            <thead>
                {title4 ? 
                <tr>
                    {ischeck?
                    <th>
                        <div className="tablecheckbigbox">
                            <input type="checkbox"
                            onChange={(e) => onCheckedAll(e.target.checked)}
                            checked={
                                checkedList.length === 0
                                ? false
                                : checkedList.length === information.length
                                ? true
                                : false
                            }
                            className="tablecheckbox"
                            />
                        </div>
                    </th>:<></>}
                    <th><div className="tableTitle">{title1}</div></th>
                    <th><div className="tableTitle">{title2}</div></th>
                    <th><div className="tableTitle">{title3}</div></th>
                    <th><div className="tableTitle">{title4}</div></th>
                </tr> :
                <tr>
                    {ischeck?
                    <th>
                        <div className="tablecheckbigbox">
                            <input type="checkbox"
                            onChange={(e) => onCheckedAll(e.target.checked)}
                            checked={
                                checkedList.length === 0
                                ? false
                                : checkedList.length === information.length
                                ? true
                                : false
                            }
                            className="tablecheckbox"
                            />
                        </div>
                    </th>:<></>}
                    <th><div className="tableTitle">{title1}</div></th>
                    <th><div className="tableTitle">{title2}</div></th>
                    <th><div className="tableTitle">{title3}</div></th>
                </tr>
                }
            </thead>
            <tbody>
                {infoList}
            </tbody>
        </Table>
        </div>
    );
}

export default TableList;