import {Link, Routes, Route} from 'react-router-dom';

export default function AdminPage() {
    return(
        <div className = "w-full h-screen bg-gray-400 flex flex-raw">
            <div className="w-[300px] h-full bg-amber-300 flex flex-col">
                {/* <a href="/admin/">Orders</a>
                <a href="/admin/products">Products</a>
                <a href="/admin/users">Users</a> */}
                <Link to="/admin/">Orders</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/users">Users</Link>
            </div>
            <div className="w-[calc(100%-300px)] h-full bg-amber-900">
                <Routes>
                    <Route path="/" element={<h1>Orders Page</h1>}/>
                    <Route path="/products" element={<h1>Products Page</h1>}/>
                    <Route path="/users" element={<h1>Users Page</h1>}/>
                </Routes>
            </div>
            
        </div>
    )
}