"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const product = {
    id: 1,
    name: "Asgaard sofa",
    price: "Rs. 250,000.00",
    description:
      "Experience ultimate comfort with our Minimalist Sofa. Designed with clean lines and premium materials, this sofa seamlessly blends modern aesthetics with unparalleled comfort. Perfect for contemporary living spaces.",
    features: [
      "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.",
    ],
    images: ["/1.png", "/2.png", "/3.png"],
    colors: ["Beige", "Gray", "Dark Blue"],
    inStock: true,
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="mb-6 border rounded-xl overflow-hidden">
            <img
              src={"/Asgaard sofa.png"}
              alt={product.name}
              className="w-full h-[300px] object-cover"
            />
          </div>
          <div className="flex space-x-4">
            {product.images.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 border rounded-md overflow-hidden cursor-pointer 
                  ${selectedImage === img ? "border-[#B88E2F]" : ""}`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div>
          <h1 className="text-4xl font-bold text-[#3A3A3A] mb-4">
            {product.name}
          </h1>
          <p className="text-[#B88E2F] text-2xl font-semibold mb-6">
            {product.price}
          </p>

          <p className="text-[#666] mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Key Features:</h3>
            <ul className="list-disc list-inside text-[#666]">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex space-x-4">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border rounded-md hover:bg-gray-100"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2"
              >
                +
              </button>
            </div>

            <Link href="/CartPage"
              className="bg-[#B88E2F] text-white px-8 py-3 rounded-md hover:bg-[#9b7a26] transition-colors">
                Add to Cart
              
            </Link>
          </div>

          {/* Stock Status */}
          <p
            className={`${product.inStock ? "text-green-600" : "text-red-600"}`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
