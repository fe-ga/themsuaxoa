import { CButton, CContainer, CFormCheck, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function One3() {

    const array = useSelector((state) => state.array);
    const [data, setData] = useState(array);
    return (
        <CContainer className='text-center ct-content'>
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
           
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((element) => {
            return (
              <CTableRow key={element.id}>
                <CTableHeaderCell scope="row">
                  <CFormCheck id="flexCheckDefault" />
                </CTableHeaderCell>
                <CTableDataCell>{element.number}</CTableDataCell>
                <CTableDataCell>{element.status}</CTableDataCell>
                <CTableDataCell>{element.name}</CTableDataCell>
                <CTableDataCell>{element.date}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="secondary">
                  <Link to='/edit2'>수정</Link>
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
      <div className='text-center btn-home'>
        <CButton color="secondary">삭제</CButton>
        <CButton color="secondary">
          <Link to='/add2'>등록</Link>
        </CButton>
        </div>
      
     </CContainer>
    )
}

export default One3
