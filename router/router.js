import Detail from "../src/components/Detail";
import BlogList from "../src/components/BlogList";
import admin from '../src/components/admin'
import edit from '../src/components/edit'

const routes = [
    {path: '/', redirect: '/blog'},
    {path: '/detail', component: Detail},
    {path: '/blog', component: BlogList},
    {path: '/login', component: admin},
    {path: '/edit', component: edit}
]

export default routes
