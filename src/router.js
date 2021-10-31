import One1 from "./components/one/One1";
import One2 from "./components/one/One2";
import One3 from "./components/one/One3";

import Add from "./add/Add";

import Edit from "./edit/Edit";
import Edit2 from './edit/Edit2'
import Add2 from "./add/Add2";
const routes = [
    {path: '/one', exact: true, name: 'One', component: One1},
    {path: '/one/one1', exact: true, name: 'One1', component: One1},
    {path: '/one/one2', exact: true, name: 'One2', component: One2},
    {path: '/one/one3', exact: true, name: 'One3', component: One3},

    {path: '/add', exact: true, name: 'add', component: Add},
    {path: '/add2', exact: true, name: 'add tạp chí', component: Add2},

    {path: '/edit', exact: true, name: 'edit', component: Edit},
    {path: '/edit2', exact: true, name: 'edit', component: Edit2},


]
export default routes;