import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container } from "react-bootstrap";
import {  CForm, CFormInput } from "@coreui/react";

function NewPass() {
  return (
    <Container className="NewPass">
      <div className="row">
        <div className="col">
          <p>비밀번호 재설정</p>
          <p>
          재설정 할 새 비밀번호를 입력해주세요.
          </p>
        </div>
      </div>

      <div className="row ">
        <div className="col  col-md-1 offset-3 offset-md-3">새 비밀번호</div>
        <div className="col col-md-4 ">
          <CForm>
            <div>
              <CFormInput type="text" id="pass" />
            </div>
          </CForm>
          <p>비밀번호는 영문, 숫자, 특수문자 조합의 
                8~13자를 입력해주세요. </p>
        </div>
      </div>
      <div className="row  ">
        <div className="col col-md-1 offset-3 offset-md-3">비밀번호 확인</div>
        <div className="col col-md-4 ">
          <CForm>
            <div>
              <CFormInput type="text" id="repeatpass" />
            </div>
          </CForm>
          <p>비밀번호가 일치하지 않습니다.</p>
        </div>
      </div>

      <div className="row  text-center">
        <div className="col">
          <Button variant="">확인</Button>
        </div>
      </div>
      <div className=" text-center" id="submit">
        <p>비밀번호 재설정이 완료되었습니다.</p>
        <Button variant="">확인</Button>
      </div>
    </Container>
  );
}

export default NewPass;
