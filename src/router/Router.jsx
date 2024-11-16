import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../Root/MainLayout"
import News from "../components/news"
import AuthLayout from "../Pages/AuthLayout"
import Login from "../components/Login"
import Register from "../components/register"
import NewsDetails from "../Pages/NewsDetails"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader: () => fetch("https://openapi.programming-hero.com/api/news/categories"),
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <News></News>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/news/details/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    }
])

export default router