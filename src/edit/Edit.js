import {
  CButton,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Edit(props) {
  const history = useHistory()
  const [item, setItem] = useState(props.location.state.item);
  const [number, setNumber] = useState(props.location.state.item.number)
  const [status, setStatus] = useState(props.location.state.item.status)
  const [name, setName] = useState(props.location.state.item.name)
  const [date, setDate] = useState(props.location.state.item.date)
 const dispatch= useDispatch()
 function onEdit(item){
   dispatch({
     type: 'EDIT',
    item :{
      id: item.id,
      number: number,
      status :status,
      name : name,
      date :date,
    }
   })
   history.push('/one/one1')
 }
  return (
    <CContainer className=" ct-content">
      <CTable align="middle" responsive="sm" bordered>
        <CTableBody>
          <CTableRow className="noteError">
            <CTableHeaderCell scope="row" className="col-md-3 text-center">
              메인 배너 수정
            </CTableHeaderCell>
            <CTableDataCell>
              * 표시된 영역은 필수 입력 영역 입니다.
            </CTableDataCell>
          </CTableRow>
          {/* input 1 */}
          <CTableRow>
            <CTableHeaderCell scope="row" className="col-md-3 text-center">
              * 메인 배너명
            </CTableHeaderCell>
            <CTableDataCell>
              <CInputGroup className="ct-input">
                <CFormInput
                  placeholder="이미지를 등록해주세요."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={number}
                  onChange={(e)=>{
                    setNumber(e.target.value)
                  }}
                />
              </CInputGroup>
            </CTableDataCell>
          </CTableRow>

          {/* input 2 */}
          <CTableRow>
            <CTableHeaderCell scope="row" className="col-md-3 text-center">
              * 메인 배너 이미지 (PC)
            </CTableHeaderCell>
            <CTableDataCell>
              <CInputGroup className="mb-3 ct-input">
                <CFormInput
                  placeholder="이미지를 등록해주세요."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={status}
                  onChange={(e)=>{
                    setStatus(e.target.value)
                  }}
                />
              </CInputGroup>
              <p className="error">
                - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                이미지 사이즈는 1920 x 580를 추천합니다.
              </p>
            </CTableDataCell>
          </CTableRow>
          {/* input 3 */}
          <CTableRow>
            <CTableHeaderCell scope="row" className="col-md-3 text-center">
              * 메인 배너 이미지(Mobile)
            </CTableHeaderCell>
            <CTableDataCell>
              <CInputGroup className="mb-3 ct-input">
                <CFormInput
                  placeholder="이미지를 등록해주세요."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={name}
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                />
              </CInputGroup>

              <p className="error">
                - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />
                -이미지 사이즈는 410 x 490를 추천합니다.
              </p>
              
            </CTableDataCell>
          </CTableRow>
          {/* input 4 */}
          <CTableRow>
            <CTableHeaderCell scope="row" className="col-md-3 text-center">
              * 노출 순서
            </CTableHeaderCell>
            <CTableDataCell>
              <CInputGroup className="mb-3 ct-input">
                <CFormInput
                  placeholder="노출 순서를 입력해주세요."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  type='date'
                  value={date}
                  onChange={(e)=>{
                    setDate(e.target.value)
                  }}
                />
              </CInputGroup>
              <p className="error">
                - 숫자만 입력이 가능하며, 텍스트 입력시 순서가 반영되지 않으며
                마지막에 노출됩니다.
                <br />
                - 숫자는 음수와 0을 제외한 모든 양수로 입력이 가능합니다.
                <br />
                - 숫자는 작을수록 메인 배너 영역 맨 처음에 노출됩니다.
                <br />
                - 동일한 숫자 입력 시, 최근 등록한 배너가 더 먼저 노출됩니다.
                <br />
              </p>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div className="text-center btn-edit">
        <CButton color="secondary" onClick={()=>onEdit(item)}>취소</CButton>
        <CButton color="secondary">저장</CButton>
      </div>
    </CContainer>
  );
}

export default Edit;
