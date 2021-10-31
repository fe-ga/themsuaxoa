import React from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import { useHistory } from "react-router-dom";
function SubEmail() {
  const history = useHistory();
  function toNewPass(){
    history.push('/Login/NewPass')
  }
  return (
    <CContainer className="SubEmail">
      <CRow className="oneRow">
        <CCol xs={8}>
          <p>
            <span>제목</span>
            <span>[LiveClass 리딩엠 Admin] 비밀번호 재설정을 위한 이메일 인증</span>
          </p>
          <p>
            <span>보낸 사람</span>
            <span>Admin</span>
          </p>
          <p>
            <span>받는 사람</span>
            <span>관리자 이메일 계정</span>
          </p>
        </CCol>
      </CRow>
      <CRow className='hr'>
      <hr />
      </CRow>
      <CRow className="twoRow">
        <CCol xs={6} className="offset-md-1 offset-1">
          <p>
            [LiveClass 리딩엠 Admin] 비밀번호 재설정을 위한 이메일 인증을
            요청하셨습니다. 아래 링크를 클릭하여 이메일 인증을 완료하고
            비밀번호를 재설정하실 수 있습니다.
          </p>
          <span onClick={toNewPass}> 이메일 인증 확인</span>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default SubEmail;
