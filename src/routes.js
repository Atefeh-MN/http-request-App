import FullComment from './pages/FullComment';
import HomePage from './pages/HomePage';
import NewComment from './pages/NewCommentPage';
import NotFound  from './pages/NotFound.js';

const routes = [
    {path:'/comment/:id', component:FullComment},
    { path: '/new-comment', component: NewComment },
    { path: '/', component: HomePage, exact: true },
    {component:NotFound}
];

export default routes;
