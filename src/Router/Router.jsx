import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/HomePage/Home";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import PricingPage from "../Pages/PricingPage";
import FeatureSection from "../Pages/FeatureSection";
import SecurityPage from "../Pages/SecurityPage";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/pricing",
                element: <PricingPage></PricingPage>
            },
            {
                path: "/features",
                element:  <FeatureSection></FeatureSection>
            },
            {
                path: "/security",
                element:  <SecurityPage></SecurityPage>
            },
        ]
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
]);