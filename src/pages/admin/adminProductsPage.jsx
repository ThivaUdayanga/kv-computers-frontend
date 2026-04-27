import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function() {
    return(
        <div className="w-full h-full overflow-y-scroll">
            <Link to="admin/add-product" className="text-primary w-[60px] h-[60px] bg-secondary flex items-center justify-center rounded-full fixed right-13 bottom-13 hover:text-secondary hover:bg-primary hover:border hover:border-secondary">
                <FaPlus />
            </Link>
        </div>
    )
}