import { CContainer, CFormInput, CInputGroup, CTable, CTableBody, CTableDataCell, CTableHeaderCell, CTableRow } from '@coreui/react'
import React from 'react'

function One2() {
    return (
        <CContainer className=" ct-content">
        <CTable align="middle"  bordered>
          <CTableBody>
            <CTableRow className="noteError">
              <CTableHeaderCell scope="row" className="col-md-3 text-center">
              동영상 등록
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
                <CInputGroup >
                  <CFormInput
                    placeholder="https://www.youtube.com/"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </CInputGroup>
              </CTableDataCell>
            </CTableRow>
  
            {/* input 2 */}
           
          </CTableBody>
        </CTable>
  
       
      </CContainer>
    )
}

export default One2
