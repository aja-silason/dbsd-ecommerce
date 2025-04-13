import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'; 
import { useZustand } from "../context/zustand";
import { ModalProduct } from "./modal/productInfo";
import { kitchenProduct } from "./mook/kitchenProduct";
import { ProductCard } from "./card/product-card";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

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
                    <div className="px-[2em] sm:ml-0 flex flex-wrap  gap-10 py-[4em]">
                        {kitchenProduct?.map((item: ProductType) => (
                            <ProductCard onClick={() => handleClickModal(item)} data={item} />
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
