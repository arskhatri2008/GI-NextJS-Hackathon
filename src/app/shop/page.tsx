import React from "react";
import Link from "next/link"
import Image from "next/image";
import ShopImage from "@/Pictures/shophero.png";
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/components/Products";
import BlowHero from "@/components/ShopBlowHero";

export default function ShopHero() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }

  const data: Card[] = [
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/Leviosa.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/Lolito.png",
      description: "Luxury big sofa",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/Respira.jpg  ",
      description: "Outdoor bar table and stool",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/Leviosa.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/Lolito.png",
      description: "Luxury big sofa",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/Respira.jpg  ",
      description: "Outdoor bar table and stool",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/Leviosa.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/Lolito.png",
      description: "Luxury big sofa",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/Respira.jpg  ",
      description: "Outdoor bar table and stool",
    },
    {
      name: "Syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/Syltherine.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/Leviosa.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/Lolito.png",
      description: "Luxury big sofa",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/Respira.jpg  ",
      description: "Outdoor bar table and stool",
    },
  ];

  return (
    <>
      <div className="shopsect">
        <Image src={ShopImage} alt="Picture of the author" />
        <h3 className="font-bold text-[1.5rem]">Shop</h3>
        <h5 className="shopPara">
          <span className=" font-bold">
            Home <span> {">"} </span>
          </span>{" "}
          Shop
        </h5>
      </div>
      <BlowHero />
      <div className="cardsContainer">
        {data.map((card, index) => (
          <div className="card" key={index} style={{ width: "15rem" }}>
            <img
              src={card.image}
              style={{ width: "18rem", height: "18rem" }}
              className="card-img-top"
              //   alt={card.title}
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.name}
              </h5>
              <p className="card-text">{card.description}</p>
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {card.price}
              </h5>
              <Link
                href="/ProductDetailPage"
                className="inline-block border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3 
          font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors duration-300">
                Buy Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
