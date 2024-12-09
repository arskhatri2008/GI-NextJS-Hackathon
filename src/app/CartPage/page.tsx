"use client";

import React, { useState } from "react";
import Link from "next/link";

// Define TypeScript interface for cart items
interface CartItem {
  id: number;
  name: string;
  price: number; // Changed to `number` to make calculations easier
  image: string;
  category: string;
  quantity: number;
}

// Initialize cart items
const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Stylish Sofa",
    price: 2500000, // Numeric value for calculations
    image: "/Syltherine.png",
    category: "Stylish cafe chair",
    quantity: 1,
  },
  {
    id: 2,
    name: "Leviosa",
    price: 2500000,
    image: "/Leviosa.png",
    category: "Stylish cafe chair",
    quantity: 1,
  },
];

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>([...cartItems]);

  // Update the quantity of a specific item
  const updateQuantity = (id: number, newQuantity: number): void => {
    if (newQuantity < 0) return;
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate subtotal
  const calculateSubtotal = (): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate shipping cost
  const calculateShipping = (): number => {
    const subtotal = calculateSubtotal();
    return subtotal > 5000000 ? 0 : 50000;
  };

  // Calculate total amount
  const calculateTotal = (): number => {
    return calculateSubtotal() + calculateShipping();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-[#3A3A3A] mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-12 bg-[#F9F1E7] rounded-xl">
          <p className="text-2xl text-[#666] mb-6">Your cart is empty</p>
          <Link
            href="/shop"
            className="inline-block bg-[#B88E2F] text-white px-8 py-3 rounded-md 
            hover:bg-[#9b7a26] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="col-span-2">
            <div className="bg-white shadow-md rounded-xl overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#F9F1E7]">
                  <tr>
                    <th className="p-4 text-left">Product</th>
                    <th className="p-4 text-center">Price</th>
                    <th className="p-4 text-center">Quantity</th>
                    <th className="p-4 text-right">Total</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="p-4 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                        <div>
                          <span className="font-semibold block">
                            {item.name}
                          </span>
                          <span className="text-[#666] text-sm">
                            Color: {} | Size: {}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        Rp {item.price.toLocaleString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center justify-center border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="px-3 py-1 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        Rp {(item.price * item.quantity).toLocaleString()}
                      </td>
                      <td className="p-4 text-right">
                        <button
                          onClick={() =>
                            setItems((prevItems) =>
                              prevItems.filter((i) => i.id !== item.id)
                            )
                          }
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Actions */}
            <div className="mt-8 flex justify-between">
              <Link
                href="/shop"
                className="border-2 border-[#B88E2F] text-[#B88E2F] 
                px-6 py-2 rounded-md hover:bg-[#B88E2F] hover:text-white 
                transition-colors"
              >
                Continue Shopping
              </Link>
              <button
                onClick={() => setItems([])}
                className="border-2 border-red-500 text-red-500 
                px-6 py-2 rounded-md hover:bg-red-500 hover:text-white 
                transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-[#F9F1E7] p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>Rp {calculateSubtotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {calculateShipping() === 0
                      ? "Free"
                      : `Rp ${calculateShipping().toLocaleString()}`}
                  </span>
                </div>
                <hr className="border-gray-300" />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rp {calculateTotal().toLocaleString()}</span>
                </div>
              </div>

              <button
                className="w-full mt-6 bg-[#B88E2F] text-white 
                py-3 rounded-md hover:bg-[#9b7a26] transition-colors"
              >
                Proceed to Checkout
              </button>

              {calculateSubtotal() < 5000000 && (
                <p className="text-sm text-[#666] mt-4 text-center">
                  Add Rp{" "}
                  {(5000000 - calculateSubtotal()).toLocaleString()} more to get
                  free shipping!
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
