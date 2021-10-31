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

function Edit2() {
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
                />
                <CInputGroupText id="basic-addon2" className="inputFile">
                  파일 선택
                </CInputGroupText>
              </CInputGroup>
              <p className="error">
                - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                이미지 사이즈는 225 x 315를 추천합니다.
              </p>
              <img src="./Rectangle 11.png" alt="" />
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
                />
                <CInputGroupText id="basic-addon2" className="inputFile">
                  파일 선택
                </CInputGroupText>
              </CInputGroup>

              <p className="error">
                - 최대 200MB의 jpg, png 이미지 파일만 등록 가능합니다. <br />-
                이미지 사이즈는 175 x 255를 추천합니다.
              </p>
              <img src="./Rectangle 10.png" alt="" />
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
                  placeholder="이미지를 등록해주세요."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <CInputGroupText id="basic-addon2" className="inputFile">
                  파일 선택
                </CInputGroupText>
              </CInputGroup>
              <p className="error">
              - 한글, ppt, pdf, img(jpg, png) 파일만 등록 가능합니다.
              </p>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>

      <div className="text-center btn-edit">
        <CButton color="secondary">취소</CButton>
        <CButton color="secondary">저장</CButton>
      </div>
    </CContainer>
  );
}

export default Edit2;
