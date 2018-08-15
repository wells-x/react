import Login from '../view/Login';
import NotUse from '../view/NotFound';
import Layout from '../view/Layout'

const
    router = [
        {
            path: '/app',
            component: Layout,

        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/404',
            component: NotUse,
        },
        {
            path: '/',
            redirect: '/app',
            push: true,
        },
        {
            path: '',
            redirect: '/404'
        }
    ];
export default router;
export {router}