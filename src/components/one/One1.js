import {
  CButton,
  CFormCheck,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CContainer,
} from "@coreui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const One1 = () => {
  const array = useSelector((state) => state.array);
  const [data, setData] = useState([]);
  const history = useHistory()
  const dispatch = useDispatch();
  function getData(){
    axios.get(`https://60a823f38532520017ae59e7.mockapi.io/API/test`)
    .then(res => {
      const persons = res.data;
      setData(persons);
      console.log(persons);
    })
    .catch(error => console.log(error));
  }

  useEffect(() => {
    getData()
  }, []);

  const Edit =(item)=>{
    history.push({
      pathname: '/edit',
      state: {  
        item: item, 
      },
    }); 
  }
  const Remove = (e) => {
    dispatch({
      type: "REMOVE",
      id: parseInt( e.target.value),
    });
  };

  return (
    <CContainer className="text-center ct-content">
      <CTable responsive="sm">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">
              <CFormCheck id="flexCheckDefault" />
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">번호</CTableHeaderCell>
            <CTableHeaderCell scope="col">노출 순서</CTableHeaderCell>
            <CTableHeaderCell scope="col">메인 배너명</CTableHeaderCell>
            <CTableHeaderCell scope="col">등록일</CTableHeaderCell>
            <CTableHeaderCell scope="col">수정</CTableHeaderCell>
            <CTableHeaderCell scope="col">숨김 여부</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {
           
          data != null && data.length !=0 && data.map((element) => {
            return (
              <CTableRow key={element.id} >
                <CTableHeaderCell scope="row">
                  <CFormCheck id="flexCheckDefault" />
                </CTableHeaderCell>
                <CTableDataCell>{element.number}</CTableDataCell>
                <CTableDataCell>{element.status}</CTableDataCell>
                <CTableDataCell>{element.name}</CTableDataCell>
                <CTableDataCell>{element.date}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="secondary" onClick={() =>Edit(element)}>
                    수정
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="secondary"
                    value={element.id}
                    onClick={Remove}
                  >
                    숨김
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
      <div className="text-center btn-home">
        <CButton color="secondary">삭제</CButton>
        <CButton color="secondary">
          <Link to="/add">등록</Link>
        </CButton>
      </div>
    </CContainer>
  );
};
export default One1;
