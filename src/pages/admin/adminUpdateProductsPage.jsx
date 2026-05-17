import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { fileUpload } from "../../utils/media-upload";

export default function AdminUpdateProduct() {
    const navigate = useNavigate();

    const location = useLocation();

    const [productId, setProductId] = useState(location.state.productId);
    const [productName, setProductName] = useState(location.state.productName);
    const [productDescription, setProductDescription] = useState(location.state.productDescription);
    const [altName, setAltName] = useState(location.state.altName?.join(",") || "");
    const [productPrice, setProductPrice] = useState(location.state.productPrice);
    const [labelPrice, setLabelPrice] = useState(location.state.labelPrice);
    const [category, setCategory] = useState(location.state.category);
    const [isVissible, setIsVissible] = useState(location.state.isVisible ? "true" : "false");
    const [brand, setBrand] = useState(location.state.brand);
    const [model, setModel] = useState(location.state.model);
    const [files, setFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //console.log(location.state);

    async function handleEditProduct() {
        try {
            setIsLoading(true);
            const token = localStorage.getItem("token");

            if (token == null) {
                toast.error("You must be logged in to add a product.");
                window.location.href = "/login";
                return;
            }

            const fileUploadPromisses = [];

            for(let i=0 ; i<files.length ; i++){
                fileUploadPromisses[i] = fileUpload(files[i]);
            }

            let imageUrls = await Promise.all(fileUploadPromisses);

            if(imageUrls.length === 0){
                imageUrls = location.state.images
            }

            await axios.put(import.meta.env.VITE_API_URL + "/products/" + productId, {
                productName: productName,
                productDescription: productDescription,
                altName: altName.split(","),
                productPrice: productPrice,
                labelPrice: labelPrice,
                category: category,
                isVisible: isVissible === "true",
                brand: brand,
                model: model,
                images: imageUrls
            }, {
                headers: {
                    Authorization: "Bearer " + token
                }
            });

            toast.success("Product Updated successfully!");

            // Redirect to Admin/products
            navigate("/admin/products");

        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to upload product. Please try again.");
            return;
        } finally {
            setIsLoading(false);
        }
    }

    const inputClass =
        "mt-2 w-full rounded-xl border border-accent/50 bg-primary px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-secondary/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10";

    const labelClass =
        "text-sm font-semibold text-secondary";

    const fieldClass =
        "flex flex-col";

    return (
        <div className="flex h-full w-full flex-col overflow-hidden rounded-md bg-primary">
            <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                {/* Header */}
                <div className="mb-6 rounded-2xl bg-white p-6 shadow-sm border border-accent/30 sticky top-0">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                        Product Management
                    </p>

                    <h1 className="mt-1 text-3xl font-bold text-secondary">
                        Edit Product
                    </h1>

                    <p className="mt-2 text-sm text-secondary/60">
                        Fill in the product details below to add a new item to the store.
                    </p>
                </div>

                {/* Form Card */}
                <div className="rounded-2xl bg-white p-6 shadow-md border border-accent/30">
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className={fieldClass}>
                            <label className={labelClass}>Product ID</label>
                            <input
                                placeholder="Ex: ID0001"
                                className={inputClass}
                                value={productId}
                                disabled
                                onChange={(e) => {
                                    setProductId(e.target.value);
                                }}
                            />
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Product Name</label>
                            <input
                                placeholder="Ex: Laptop"
                                className={inputClass}
                                value={productName}
                                onChange={(e) => {
                                    setProductName(e.target.value);
                                }}
                            />
                        </div>

                        <div className="flex flex-col lg:col-span-2">
                            <label className={labelClass}>Product Description</label>
                            <textarea
                                placeholder="Ex: High-performance laptop for gaming"
                                className="mt-2 min-h-[120px] w-full resize-none rounded-xl border border-accent/50 bg-primary px-4 py-3 text-sm text-secondary outline-none transition placeholder:text-secondary/40 focus:border-secondary focus:ring-2 focus:ring-secondary/10"
                                value={productDescription}
                                onChange={(e) => {
                                    setProductDescription(e.target.value);
                                }}
                            />
                        </div>

                        <div className="flex flex-col lg:col-span-2">
                            <label className={labelClass}>Images</label>
                            <input
                                type="file"
                                multiple
                                placeholder="Sample image"
                                onChange={(e) => {
                                    setFiles(e.target.files);
                                }}
                            />
                            <p className="mt-1 text-xs text-secondary/45">
                                Upload Multiple images.
                            </p>
                        </div>

                        <div className="flex flex-col lg:col-span-2">
                            <label className={labelClass}>Alternative Product Names</label>
                            <input
                                placeholder="Ex: Gaming Laptop, Office Laptop"
                                className={inputClass}
                                value={altName}
                                onChange={(e) => {
                                    setAltName(e.target.value);
                                }}
                            />
                            <p className="mt-1 text-xs text-secondary/45">
                                Separate multiple names using commas.
                            </p>
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Price</label>
                            <input
                                placeholder="LKR 150,000"
                                className={inputClass}
                                value={productPrice}
                                onChange={(e) => {
                                    setProductPrice(e.target.value);
                                }}
                            />
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Product Label Price</label>
                            <input
                                placeholder="LKR 180,000"
                                className={inputClass}
                                value={labelPrice}
                                onChange={(e) => {
                                    setLabelPrice(e.target.value);
                                }}
                            />
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Category</label>
                            <select
                                className={inputClass}
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                }}
                            >
                                <option value="">Select a category</option>
                                <option value="laptops">Laptops</option>
                                <option value="desktops">Desktops</option>
                                <option value="accessories">Accessories</option>
                            </select>
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Status</label>
                            <select
                                className={inputClass}
                                value={isVissible}
                                onChange={(e) => {
                                    setIsVissible(e.target.value);
                                }}
                            >
                                <option value="true">Visible</option>
                                <option value="false">Not Visible</option>
                            </select>
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Brand</label>
                            <select
                                className={inputClass}
                                value={brand}
                                onChange={(e) => {
                                    setBrand(e.target.value);
                                }}
                            >
                                <option value="">Select a brand</option>
                                <option value="standard">Standard</option>
                                <option value="premium">Premium</option>
                                <option value="pro">Pro</option>
                            </select>
                        </div>

                        <div className={fieldClass}>
                            <label className={labelClass}>Model</label>
                            <select
                                className={inputClass}
                                value={model}
                                onChange={(e) => {
                                    setModel(e.target.value);
                                }}
                            >
                                <option value="">Select a model</option>
                                <option value="generic">Generic</option>
                                <option value="pro">Pro</option>
                                <option value="ultra">Ultra</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="border-t border-accent/30 bg-white px-6 py-4">
                <div className="flex justify-end gap-3">
                    <button
                        className="h-[48px] w-[140px] rounded-xl border border-secondary bg-white text-sm font-bold text-secondary transition hover:bg-primary"
                        onClick={() => {
                            navigate("/admin/products");
                        }}
                    >
                        Cancel
                    </button>

                    <button
                        className="h-[48px] w-[150px] rounded-xl bg-secondary text-sm font-bold text-primary shadow-md transition hover:bg-accent hover:text-secondary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        onClick={handleEditProduct}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Updating...
                            </>
                        ) : (
                            "Update Product"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}