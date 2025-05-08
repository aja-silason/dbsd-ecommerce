"use client";
import { UseSearch } from "@/hook/useSearch";  
import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { SearchInput } from "../input/search-product";
import { ProductContent } from "../product-content/products";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

type props = {
    data: any[],
    title: string
}

export function ProductOneCategory({data, title}: props) {

    
    const { handleChangeSearch, handleClickModal, handleTabChange, openProductSecond, product, activeTab } = UseSearch();
    

    const width = useWindowWidth()

    if(width == null) return null;

    return (
        <>
            <div className="">
                
                <div className={`tabs mt-7 ${width >= 850 ? 'px-[4em]' : 'px-[2em]'} flex flex-wrap gap-4 justify-between`}>
                    <SearchInput handleSearch={handleChangeSearch}/>
                </div>

                <div className="tab-content mb-12 mt-10">
                    <ProductContent handleClickModal={handleClickModal} openProductSecond={openProductSecond} product={product} products={data} title={title}/>
                </div>
            </div>
        </>
    );
}
