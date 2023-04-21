import React from 'react';
import UsersTable from "../../components/UsersTable/UsersTable";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import AddUser from "../../components/AddUser/AddUser";
import AddProduct from "../../components/AddProduct/AddProduct";

const AdminPage = ({users, setUsers, products, setProducts, editIsOpen, setEditIsOpen, children}) => {

    return (
        <div>
            {children}
            <AddUser users={users} setUsers={setUsers}/>
            <UsersTable users={users} setUsers={setUsers}/>
            <AddProduct products={products} setProducts={setProducts}/>
            <ProductsTable products={products} setProducts={setProducts} editIsOpen={editIsOpen} setEditIsOpen={setEditIsOpen}/>
        </div>
    );
};

export default AdminPage;