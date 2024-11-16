import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "../Root/MainLayout"
import News from "../components/news"


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
])

export default router