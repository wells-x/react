import Login from '../view/Login';
import NotUse from '../view/NotFound';
import Layout from '../view/Layout'

const router = {
    routes: [
        {
            path: '/app',
            components: Layout,
        },
        {
            path: '/login',
            components: Login,
        },
        {
            path: '/404',
            components: NotUse,
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
    ]
};
export default router;
export {router}