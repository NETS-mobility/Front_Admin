import React from "react";
import { Table } from "react-bootstrap";
import Layout from "../layout/layout";

/*
title1, title2, title3에 제목입력
information에 한 행 씩 정보입력
 */

const TableList = ({title1, title2, title3}) => {
    const information = [["Mark", "Otto", "@mdo"], ["jacob", "Thornton", "@fat"]]; //example
    const infoList = information.map((info, index) => (
    <tr key={index}>
        <td>{info[0]}</td>
        <td>{info[1]}</td>
        <td>{info[2]}</td>
    </tr>))

    return(
        <Layout>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>{title1}</th>
                <th>{title2}</th>
                <th>{title3}</th>
                </tr>
            </thead>
            <tbody>
                {infoList}
            </tbody>
        </Table>
        </Layout>
    );
}

export default TableList;