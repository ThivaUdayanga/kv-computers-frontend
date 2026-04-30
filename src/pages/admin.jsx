import {Link, Routes, Route} from 'react-router-dom';
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import AdminOrdersPage from './admin/adminOrdersPage.jsx';
import AdminProductsPage from './admin/adminProductsPage.jsx';
import AdminUsersPage from './admin/adminUsersPage.jsx';
import AdminAddProduct from './admin/adminAddProductsPage.jsx';

export default function AdminPage() {
    return(
        <div className = "w-full h-screen bg-accent flex flex-raw">
            <div className="w-[300px] h-full bg-accent flex flex-col">
                <h1 className="text-2xl font-bold text-primary p-[13px]">Admin Panel</h1>
                <Link className="border flex flex-row items-center p-[13px] gap-3 mb-[3px] mt-[30px] hover:bg-secondary hover:text-primary" to="/admin/"><MdOutlineFeaturedPlayList />Orders</Link>
                <Link className="border flex flex-row items-center p-[13px] gap-3 mb-[3px] hover:bg-secondary hover:text-primary" to="/admin/products"><MdProductionQuantityLimits />Products</Link>
                <Link className="border flex flex-row items-center p-[13px] gap-3 mb-[3px] hover:bg-secondary hover:text-primary" to="/admin/users"><BiUser />Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-primary border-2 border-accent rounded-lg p-4">
                <Routes>
                    <Route path="/" element={<AdminOrdersPage />}/>
                    <Route path="/products" element={<AdminProductsPage />}/>
                    <Route path="/users" element={<AdminUsersPage />}/>
                    <Route path="/products/add-product" element={<AdminAddProduct/>}/>
                </Routes>
            </div>
            
        </div>
    )
}