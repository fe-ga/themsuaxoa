import {
  CNavGroup,
  CNavItem,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    
      <CSidebar position="fixed" className='nav-drop'>
        <CSidebarNav>
          <CNavGroup toggler="메인 관리" >
            <CNavItem className='nav-drop1'>
              <Link to="/one/one1">수업 관리 1</Link>
            </CNavItem >
            <CNavItem className='nav-drop1'>
              <Link to="/one/one2"> 수업 관리 2</Link>
            </CNavItem>
            <CNavItem className='nav-drop1'>
              <Link to="/one/one3"> 수업 관리 3</Link>
            </CNavItem>
          </CNavGroup>
        </CSidebarNav>
      </CSidebar>
  
  );
}
export default Sidebar;
