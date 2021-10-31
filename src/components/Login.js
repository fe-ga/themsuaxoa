import Button from "react-bootstrap/Button";
import React from "react";
import { useDispatch } from "react-redux";
import {Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { CForm, CFormInput } from "@coreui/react";
function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  function toSendEmail() {
    history.push("/Login/SendEmail");
  }
  function login(){
    dispatch({
      type: "LOGIN",
      // id: id,
    });
  }
  return (
    <>
      <Container className="login">
        <div className="row">
          <div className="col">
            <img src="./logo512.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col">관리자 로그인</div>
        </div>
        <div className="row  ">
          <div className="col  col-md-1 offset-3 offset-md-3">ID</div>
          <div className="col col-md-4 ">
            <CForm>
              <div>
                <CFormInput
                  type="text"
                  id="ID"
                 
                />
              </div>
            </CForm>
            <p>ID를 확인해주세요. </p>
          </div>
        </div>
        <div className="row">
          <div className="col  col-md-1 offset-3 offset-md-3">비밀번호</div>
          <div className="col col-md-4 ">
             <CForm>
              <div>
                <CFormInput
                  type="text"
                  id="ID"
                 
                />
              </div>
            </CForm>
            <p>비밀번호를 확인해주세요. </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Button variant="" onClick={login}>로그인</Button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span onClick={toSendEmail}>비밀번호 재설정</span>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
