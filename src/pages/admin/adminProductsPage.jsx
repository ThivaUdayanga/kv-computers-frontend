import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  FaPlus, 
  FaSearch, 
  FaBoxOpen, 
  FaTag, 
  FaEye, 
  FaEyeSlash 
} from "react-icons/fa";
import getFormatedPrice from "../../utils/price-format";
import getFormattedDiscount from "../../utils/discount-format";

const sampleProducts = [
  {
    productId: "P001",
    productName: "Wireless Bluetooth Headphones",
    productDescription: "High-quality wireless headphones with noise cancellation.",
    altName: ["Bluetooth Headset", "Wireless Headphones"],
    productPrice: 79.99,
    labelPrice: 99.99,
    category: "Electronics",
    images: [
      "https://example.com/images/headphones1.jpg",
      "https://example.com/images/headphones2.jpg",
    ],
    isVisible: true,
    brand: "SoundMax",
    model: "X200",
  },
  {
    productId: "P002",
    productName: "Smart Fitness Watch",
    productDescription: "Track your health metrics and daily activities.",
    altName: ["Fitness Tracker", "Smart Watch"],
    productPrice: 49.99,
    labelPrice: 69.99,
    category: "Wearables",
    images: [
      "https://example.com/images/watch1.jpg",
      "https://example.com/images/watch2.jpg",
    ],
    isVisible: true,
    brand: "FitPro",
    model: "F10",
  },
  {
    productId: "P003",
    productName: "Gaming Mechanical Keyboard",
    productDescription: "RGB mechanical keyboard with blue switches.",
    altName: ["Gaming Keyboard", "Mechanical Keyboard"],
    productPrice: 59.99,
    labelPrice: 79.99,
    category: "Accessories",
    images: [
      "https://example.com/images/keyboard1.jpg",
      "https://example.com/images/keyboard2.jpg",
    ],
    isVisible: false,
    brand: "KeyForce",
    model: "MK-87",
  },
  {
    productId: "P004",
    productName: "Portable Power Bank 20000mAh",
    productDescription: "Fast charging power bank with dual USB ports.",
    altName: ["Power Bank", "Portable Charger"],
    productPrice: 29.99,
    labelPrice: 39.99,
    category: "Accessories",
    images: [
      "https://example.com/images/powerbank1.jpg",
      "https://example.com/images/powerbank2.jpg",
    ],
    isVisible: true,
    brand: "ChargePlus",
    model: "PB20K",
  },
  {
    productId: "P005",
    productName: "4K Ultra HD Smart TV 55 inch",
    productDescription: "Crystal clear 4K display with built-in streaming apps.",
    altName: ["Smart TV", "4K TV"],
    productPrice: 499.99,
    labelPrice: 599.99,
    category: "Home Entertainment",
    images: [
      "https://example.com/images/tv1.jpg",
      "https://example.com/images/tv2.jpg",
    ],
    isVisible: true,
    brand: "ViewTech",
    model: "VT55UHD",
  },
];

// Category color map for badge variety
const categoryColors = {
  "Electronics": "bg-blue-50 text-blue-700 border border-blue-200",
  "Wearables": "bg-violet-50 text-violet-700 border border-violet-200",
  "Accessories": "bg-amber-50 text-amber-700 border border-amber-200",
  "Home Entertainment": "bg-teal-50 text-teal-700 border border-teal-200",
};

export default function AdminProductsPage() {
  const [products] = useState(sampleProducts);
  const [search, setSearch] = useState("");

  const filtered = products.filter(
    (p) =>
      p.productName.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  const visibleCount = products.filter((p) => p.isVisible).length;

  return (
    <div className="relative flex h-full w-full flex-col overflow-y-scroll rounded-md bg-primary">
      {/* ── Page Header ── */}
      <div className="mb-6 sticky top-0 z-10 rounded-tl-md rounded-tr-md bg-primary/90 px-6 py-4 backdrop-blur-md">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-secondary/50">
          Admin Panel
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-secondary">
          Product Management
        </h1>
        <p className="mt-1 text-sm text-secondary/60">
          Oversee, edit, and manage all listed products.
        </p>
      </div>

      {/* ── Stat Cards ── */}
      <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {[
          { label: "Total Products", value: products.length, icon: <FaBoxOpen /> },
          { label: "Visible", value: visibleCount, icon: <FaEye /> },
          { label: "Hidden", value: products.length - visibleCount, icon: <FaEyeSlash /> },
          {
            label: "Categories",
            value: [...new Set(products.map((p) => p.category))].length,
            icon: <FaTag />,
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm ring-1 ring-primary/30 transition hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary text-sm">
              {stat.icon}
            </div>
            <div>
              <p className="text-2xl font-bold text-secondary">{stat.value}</p>
              <p className="text-xs text-secondary/50">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Table Card ── */}
      <div className="rounded-3xl bg-white shadow-xl ring-1 ring-primary/30">
        {/* Card Header */}
        <div className="flex flex-col gap-4 border-b border-primary/20 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-secondary">All Products</h2>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40 text-xs" />
            <input
              type="text"
              placeholder="Search by name, brand, category…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-primary/40 bg-primary/10 py-2 pl-8 pr-4 text-sm text-secondary placeholder-secondary/40 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-secondary/5 text-secondary/60">
                {["Product ID", "Product", "Price", "Discount", "Category", "Brand / Model", "Status"].map(
                  (h) => (
                    <th
                      key={h}
                      className="px-6 py-3 text-xs font-semibold uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody className="divide-y divide-primary/20">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-16 text-center text-secondary/40">
                    No products match your search.
                  </td>
                </tr>
              ) : (
                filtered.map((item) => (
                  <tr
                    key={item.productId}
                    className="group transition duration-150 hover:bg-primary/10"
                  >
                    {/* Product ID */}
                    <td className="px-6 py-4">
                      <span className="rounded-lg bg-secondary/10 px-2.5 py-1 font-mono text-xs font-semibold text-secondary">
                        {item.productId}
                      </span>
                    </td>

                    {/* Name + alt */}
                    <td className="px-6 py-4">
                      <p className="font-semibold text-secondary leading-snug">
                        {item.productName}
                      </p>
                      <p className="mt-0.5 text-xs text-secondary/45">
                        {item.altName?.[0] || "—"}
                      </p>
                    </td>

                    {/* Price */}
                    <td className="px-6 py-4">
                      <p className="font-bold text-accent">
                        {getFormatedPrice(item.productPrice)}
                      </p>
                      <p className="text-xs text-secondary/40 line-through">
                        {getFormatedPrice(item.labelPrice)}
                      </p>
                    </td>

                    {/* Discount badge */}
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-700 border border-green-200">
                        {getFormattedDiscount(item.labelPrice, item.productPrice)}%
                      </span>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          categoryColors[item.category] ??
                          "bg-primary/30 text-secondary border border-primary/40"
                        }`}
                      >
                        {item.category}
                      </span>
                    </td>

                    {/* Brand / Model */}
                    <td className="px-6 py-4">
                      <p className="font-medium text-secondary">{item.brand}</p>
                      <p className="text-xs text-secondary/45">{item.model}</p>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                          item.isVisible
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-red-50 text-red-600 border border-red-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.isVisible ? "bg-emerald-500" : "bg-red-400"
                          }`}
                        />
                        {item.isVisible ? "Visible" : "Hidden"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-primary/20 px-6 py-3 text-xs text-secondary/40">
          Showing {filtered.length} of {products.length} products
        </div>
      </div>

      {/* ── FAB ── */}
      <Link
        to="/admin/products/add-product"
        aria-label="Add new product"
        className="group fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-secondary shadow-lg shadow-secondary/30 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-secondary/40 active:scale-95"
      >
        <FaPlus className="text-primary text-base transition-transform duration-200 group-hover:rotate-90" />
      </Link>
    </div>
  );
}