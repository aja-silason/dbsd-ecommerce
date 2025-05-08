'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from 'next/link'; 
import { useZustand } from "../context/zustand";
import { ModalProduct } from "./modal/productInfo";
import { kitchenProduct } from "./mook/kitchenProduct";
import { ProductCard } from "./card/product-card";
import { cleaningProducts } from "./mook/cleaning";
import { resistanceProduct } from "./mook/resistanceProduct";
import { lightingProduct } from "./mook/lightingProduct";
import { hygieneSafety } from "./mook/hygieneSafety";
import { electricalProduct } from "./mook/electricalProduct";
import { batteryProducts } from "./mook/battery";
import { accessoryProducts } from "./mook/accessoryProducts";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

type productsProps = {
    title: string;
    items: ProductType[]
}

const allProducts: productsProps[] = [
    { title: "Produtos de Cozinha", items: kitchenProduct },
    { title: "Produtos de Limpeza", items: cleaningProducts },
    { title: "Acessórios de Contrução", items: accessoryProducts },
    { title: "Tipos de Baterias", items: batteryProducts },
    { title: "Produtos de Eléctricos", items: electricalProduct },
    { title: "Produtos de Segurança", items: hygieneSafety },
    { title: "Produtos de Iluminação", items: lightingProduct },
    { title: "Produtos Resistentes", items: resistanceProduct }
];

export function SlideProduct() {
    const { openProductFirst, handleClickFirst } = useZustand();
    const [product, setProduct] = useState<ProductType>({
        id: 0,
        nameProduct: "",
        details: "",
        srcImage: "",
        alt: "",
        price: 0,
    });

    const handleClickModal = (item: ProductType) => {
        setProduct(item);
        handleClickFirst(true);
    };

    const [index, setIndex] = useState(0);
    const [fade, setfade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setfade(false);
            setTimeout(() => {
                setIndex((prevState) => (prevState + 1) % allProducts?.length);
                setfade(true)
            }, 500)
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    const current = allProducts[index];

    return (
        <>
            <div className="p-[.5em] px-[1em]">
                <div className="flex sx:flex-col md:flex-row justify-between">
                    <h1 className="font-semibold text-[22px] text-black">Categorias De Produtos</h1>
                    <Link href="/product" className="sx:ml-10 text-[#1a73e8]  font-medium text-[14px] flex items-center flex-row gap-3">
                        Ver&nbsp;mais Productos
                        <Image alt="seta" src="setBlue.svg" width={24} className="" height={24} />
                    </Link>
                </div>

                <div className="tab-content flex flex-col justify-center items-center mb-[4em]">
                    <h2 className="text-[20px] font-semibold left-0 w-full mt-[3em] mb-[1em]">{current?.title}</h2>

                    <div className={`px-[2em] sm:ml-0 flex flex-wrap justify-start gap-10 py-[4em] h-[70vh] overflow-hidden overflow-y-scroll scroll-smooth transition-opacity duration-700 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                        {current?.items?.map((item) => (
                            <ProductCard key={item.id} onClick={() => handleClickModal(item)} data={item} />
                        ))}
                    </div>
                </div>

                {openProductFirst && (
                    <ModalProduct product={product} />
                )}
            </div>
        </>
    );
}
