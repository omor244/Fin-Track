import { createBrowserRouter } from "react-router";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Components/Home/HomePage/Home";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/Register";
import FeatureSection from "../Pages/FeatureSection";
import SecurityPage from "../Pages/SecurityPage";
import DashboardLayOut from "../MainLayOut/DashboardLayOut";
import Overview from "../Dashboard/Pages/Overview";
import ManageTransactions from "../Dashboard/Pages/ManageTransactions";
import ManualPayment from "../Pages/ManualPayment";
import Pricing from "../Components/Home/Pricing";
import ManageUsers from "../Dashboard/Pages/ManageUsers";
import BudgetsAndGoals from "../Dashboard/Pages/BudgetsAndGoals";
import CategoryManagement from "../Dashboard/Pages/CategoryManagement";
import FinancialTipsManagement from "../Dashboard/Pages/FinancialTipsManagement";
import SystemReport from "../Dashboard/Pages/SystemReport";
import ExpenseAnalytics from "../Dashboard/Pages/ExpenseAnalytics";
import AdminRoute from "../Hooks/AdminRoute";





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
                element: <Pricing></Pricing>
            },
            {
                path: "/features",
                element:  <FeatureSection></FeatureSection>
            },
            {
                path: "/security",
                element:  <SecurityPage></SecurityPage>
            },
            {
                path: "/payment",
                element:  <ManualPayment></ManualPayment>
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
    {
        path: "/dashboard",
        element: <DashboardLayOut></DashboardLayOut>,
        children: [
            {
                path: "/dashboard",
                element: <Overview></Overview>
            },
            {
                path: "transactions",
                element: <ManageTransactions></ManageTransactions>
            },
            {
                path: "users",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: "budgets",
                element: <BudgetsAndGoals></BudgetsAndGoals>
            },
            {
                path: "categories",
                element: <AdminRoute><CategoryManagement></CategoryManagement></AdminRoute>
            },
            {
                path: "Financial-Tips",
                element: <AdminRoute><FinancialTipsManagement></FinancialTipsManagement></AdminRoute>
            },
            {
                path: "reports",
                element: <AdminRoute><SystemReport></SystemReport></AdminRoute>
            },
            {
                path: "analytics",
                element: <ExpenseAnalytics></ExpenseAnalytics>
            },
        ]
    }
]);