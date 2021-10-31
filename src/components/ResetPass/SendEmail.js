import React from "react";
import {  Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
function SendEmail() {
    const history = useHistory();
    function subEmail(){
        document.getElementById("submit").style.display ='block';
    }
    function email(){
        history.push('/Login/SubEmail')
        document.getElementById("submit").style.display ='none';
    }
    
  return (
    <Container className="sendemail">
      <div className="row">
        <div className="col">
          <p>비밀번호 초기화 메일 발송</p>
          <p>
            관리자로 등록된 이메일 주소를 정확히 입력해 주세요. 해당 이메일로
            비밀번호 재설정 안내 메일을 발송해드립니다.
          </p>
        </div>
      </div>
      <div className="row  ">
        <div className="col  col-md-1 offset-3 offset-md-3">ID</div>
        <div className="col col-md-4 ">
          <from className="form-group">
            <input type="text" className="form-control" />
          </from>
          <p>ID를 확인해주세요. </p>
        </div>
      </div>
      <div className="row  text-center">
        <div className="col">
          <Button variant="" onClick={subEmail}>확인</Button>
        </div>
      </div>
      <div className='noti text-center' id='submit'>
        <p>발송이 완료되었습니다. 메일을 확인해주세요.</p>
        <Button variant=""onClick={email} >확인</Button>
      </div>
    </Container>
  );
}

export default SendEmail;
