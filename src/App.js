import "./App.css";
import Login from "./components/Login";
import SendEmail from "./components/ResetPass/SendEmail";
import './css/custom.scss'
import './css/style.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SubEmail from "./components/ResetPass/SubEmail";
import NewPass from "./components/ResetPass/NewPass";
import Main from "./components/layout/Main";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
      <Route path='/Login/SendEmail'><SendEmail/></Route>
      <Route path='/Login/NewPass'><NewPass/></Route>
      <Route path='/Login/SubEmail'><SubEmail/></Route>
      <Route path='/Login'><Login/></Route>
      <Route path='/'><Main/></Route>
      </Switch>
    </Router>
  );
}

export default App;
