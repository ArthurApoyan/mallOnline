import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router";
import {sendRequest} from "../../api/Hooks/sendRequest";
import HomePage from "../../pages/HomePage/HomePage";
import LogOutHeader from "../LogOutHeader/LogOutHeader";
import LogInHeader from "../LogInHeader/LogInHeader";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import AdminPageLink from "../AdminPageLink/AdminPageLink";
import AdminPage from "../../pages/AdminPage/AdminPage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import AboutUsPage from "../../pages/AboutUsPage/AboutUsPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";

const AppRouter = () => {

    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"))
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin"))
    const [users, setUsers] = useState([])
    const [products, setProducts] = useState([])
    const [loginUser, setLoginUser] = useState({})
    const [editIsOpen, setEditIsOpen] = useState(false)
    const {sendRequestGet} = sendRequest()

    useEffect(() => {
        const getUsers = async () => {
            const users = await sendRequestGet("http://localhost:3001/users")
            const products = await sendRequestGet("http://localhost:3001/products")
            setUsers(users)
            setProducts(products)
        }
        getUsers()
    }, [editIsOpen])

    return (
        <div>
            {
                isAuth ?
                    <Routes>
                        <Route path="/" element={<HomePage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}/></HomePage>}/>
                        <Route path="/productsPage" element={<ProductsPage products={products}><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}/></ProductsPage>}/>
                        <Route path="/aboutUsPage" element={<AboutUsPage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}/></AboutUsPage>}/>
                        <Route path="/contactsPage" element={<ContactsPage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}/></ContactsPage>}/>
                    </Routes>
                    :
                    isAdmin ?
                        <Routes>
                            <Route path="/" element={<HomePage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}><AdminPageLink/></LogInHeader></HomePage>}/>
                            <Route path="/adminPage" element={<AdminPage users={users} setUsers={setUsers} products={products} setProducts={setProducts} editIsOpen={editIsOpen} setEditIsOpen={setEditIsOpen}>
                                                <LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}>
                                                    <AdminPageLink/>
                                                </LogInHeader>
                                            </AdminPage>}/>
                            <Route path="/productsPage" element={<ProductsPage products={products}><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}><AdminPageLink/></LogInHeader></ProductsPage>}/>
                            <Route path="/aboutUsPage" element={<AboutUsPage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}><AdminPageLink/></LogInHeader></AboutUsPage>}/>
                            <Route path="/contactsPage" element={<ContactsPage><LogInHeader setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} loginUser={loginUser}><AdminPageLink/></LogInHeader></ContactsPage>}/>
                        </Routes>
                        :
                        <Routes>
                            <Route path="/" element={<HomePage><LogOutHeader/></HomePage>}/>
                            <Route path="/signUpPage" element={<RegistrationPage users={users} setUsers={setUsers}/>}/>
                            <Route path="/signInPage" element={<LoginPage users={users} setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} setLoginUser={setLoginUser}/>}/>
                            <Route path="/aboutUsPage" element={<AboutUsPage><LogOutHeader/></AboutUsPage>}/>
                            <Route path="/contactsPage" element={<ContactsPage><LogOutHeader/></ContactsPage>}/>
                        </Routes>
            }
        </div>
    );
};

export default AppRouter;