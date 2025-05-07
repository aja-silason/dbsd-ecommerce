"use client";
import Image from "next/image"; 
import { ModalProductFirst } from "./modal/productModalFirst";
import { UseSearch } from "@/hook/useSearch";  
import { ProductCard } from "./card/product-card";
import { ProductLess } from "./card/productless-card";
import { ProductContent } from "./product-content/products";
import { SearchInput } from "./input/search-product";
import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { CookSVG } from "./svg/cook";
import { IluminationSVG } from "./svg/ilumination";
import {  ManualToolsSVG } from "./svg/manualtools";
import { AccesoryToolsSVG } from "./svg/acessorytools";
import { HigieneAndSavitySVG } from "./svg/cozinha copy 3";
import { BatterySVG } from "./svg/cook copy 2";
import { ElectronicsSVG } from "./svg/cook copy";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};


export function Product() {

    const objectMaterial = [
        {
            id: 1,
            name: "UTENSÍLIOS DE COZINHA",
            background: "#DEFADE",
            color: "#32cd32",
            description: "",
            image: "category.svg",
            svg: <CookSVG/>

        },
        {
            id: 2,
            name: "ILUMINAÇÃO",
            background: "#FEFFC1",
            color: "#FFD700",
            description: "",
            image: "luz.svg",
            svg: <IluminationSVG/>

        },
        {
            id: 3,
            name: "FERRAMENTAS ELÉTRICAS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "electric.svg",
            svg: <ElectronicsSVG/>

        },
        {
            id: 4,
            name: "FERRAMENTAS MANUAIS",
            background: "#FFF5C5",
            color: "#FFA500",
            description: "",
            image: "wrench.svg",
            svg: <ManualToolsSVG/>

        }, {
            id: 5,
            name: "ACESSÓRIOS E CONSUMÍVEIS DE DESGASTE RÁPIDO",
            background: "#E5E8FF",
            color: "#00008B",
            description: "",
            image: "recycle.svg",
            svg: <AccesoryToolsSVG/>
        }, {
            id: 6,
            name: "HIGIENE E SEGURANÇA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "droplet.svg",
            svg: <HigieneAndSavitySVG/>

        }, {
            id: 7,
            name: "BATERIA",
            background: "#FFEAD3",
            color: "#FF4500",
            description: "",
            image: "setup.svg",
            svg: <BatterySVG/>

        }, {
            id: 8,
            name: "COLA E RESISTENTE",
            background: "#fffec1",
            color: "#ffd700",
            description: "",
            image: "luz.svg",
            svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="#ffd700" stroke-width="1.5" />
                <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        }, {
            id: 9,
            name: "ADITIVO DE LIMPEZA",
            background: "#F3E9FE",
            color: "#8A2BE2",
            description: "",
            image: "backpack.svg",
            svg: <svg viewBox="0 0 64 64" width={24} xmlns="http://www.w3.org/2000/svg"> <g data-name="11" id="_11"> <path d="M38,21.07s0,0,0-.07V19h1a1,1,0,0,0,1-1V15h5a1,1,0,0,0,.86-.49,1,1,0,0,0,0-1L42.11,6.74A5.33,5.33,0,0,0,37.45,4H21a1,1,0,0,0-1,1H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h.1A21.33,21.33,0,0,1,16,17.86a21.77,21.77,0,0,1-3.83,9.56,1,1,0,0,0,.1,1.28A1,1,0,0,0,13,29a1,1,0,0,0,.56-.17A17.5,17.5,0,0,0,21,18.2,15.58,15.58,0,0,0,21.3,15H24v3a1,1,0,0,0,1,1h1v2a.88.88,0,0,0,.06.28,1,1,0,0,0-.16.2l-6,9.93A13.38,13.38,0,0,0,18,38.34v16.9A5.6,5.6,0,0,0,23.42,61H40.58A5.6,5.6,0,0,0,46,55.24V30.71A9.52,9.52,0,0,0,38,21.07ZM17,7h3v4H17Zm2,10.8a13.83,13.83,0,0,1-2.22,5.1A22.73,22.73,0,0,0,18,18.14,23.24,23.24,0,0,0,18.12,13h1A13.8,13.8,0,0,1,19,17.8ZM22,12V6H37.45a3.33,3.33,0,0,1,2.91,1.71L43.3,13H22Zm16,3v2H26V15Zm-2,4v1H28V19Zm-8.68,4h9.59C40.82,23,44,26.46,44,30.71V38H20a11.47,11.47,0,0,1,.84-4A.7.7,0,0,0,21,34h5a1,1,0,0,0,0-2H21.89l.67-1.11A1.06,1.06,0,0,0,23,31h5a1,1,0,0,0,0-2H23.7l.6-1H29a1,1,0,0,0,0-2H25.51ZM44,48H20V40H44ZM40.58,59H23.42A3.61,3.61,0,0,1,20,55.24V50H44v5.24A3.61,3.61,0,0,1,40.58,59Z" fill="#8A2BE2"  />  <path d="M42,37a1,1,0,0,0,1-1V31a1,1,0,0,0-2,0v5A1,1,0,0,0,42,37Z" fill="#8A2BE2" /> <path d="M42,51a1,1,0,0,0-1,1v2.34A1.67,1.67,0,0,1,39.34,56H38a1,1,0,0,0,0,2h1.34A3.66,3.66,0,0,0,43,54.34V52A1,1,0,0,0,42,51Z" fill="#8A2BE2"/> </g></svg>
        }
    ]

    
    const { filterProductLuz, filterProduct, filterManualProducts, filterResistanceProducts, filterCleaningProducts, filterBatteryProducts, filterHygieneSafetyProducts,handleChangeSearch, filterElectricalProduct, filterAccessoryProducts, handleClickModal, handleTabChange, openProductSecond, product, activeTab } = UseSearch();
    
    const tabsConfig = [
        {
          id: 1,
          title: "Produtos de Cozinha",
          products: filterProduct,
        },
        {
          id: 2,
          title: "Melhores Produtos de Lâmpadas",
          products: filterProductLuz,
        },
        {
          id: 3,
          title: "Melhores Ferramentas Elétricas",
          products: filterElectricalProduct,
        },
        {
          id: 4,
          title: "Melhores Ferramentas Manuais",
          products: filterManualProducts,
        },
        {
          id: 5,
          title: "Melhores Acessórios",
          products: filterAccessoryProducts,
        },
        {
          id: 6,
          title: "Melhores Produtos de Higiene e Segurança",
          products: filterHygieneSafetyProducts,
        },
        {
          id: 7,
          title: "Melhores Produtos de Batéria",
          products: filterBatteryProducts,
        },
        {
          id: 8,
          title: "Melhores Produtos de Cola e Resistente",
          products: filterResistanceProducts,
        },
        {
          id: 9,
          title: "Melhores Produtos de Aditivo de Limpeza",
          products: filterCleaningProducts,
        },
    ];

    const width = useWindowWidth()

    if(width == null) return null;

    return (
        <>
            <div className="mt-36">
                <h1 className="font-semibold ml-10 lg:text-[22px] sm:text-[19px] text-black">Categorias De Produtos</h1>

                <div className={`tabs mt-7 ${width >= 850 ? 'px-[4em]' : 'px-[2em]'} flex flex-wrap gap-4 justify-between`}>
             
                    <div className="flex flex-wrap gap-5 w-full">
            
                        {objectMaterial.map((item) => (
                            <button key={item.id} className={` flex flex-row gap-[.5em] rounded-[15px] justify-start items-center p-[1em] py-auto text-[14px] font-medium ${activeTab === item?.id ? "active" : ""}`} style={{ background: `${item?.background}`, color:`${ item?.color}`}}
                                onClick={() => handleTabChange(item?.id)} >
                              {item.svg}
                                <span className="mt-1">{item?.name}</span>
                            </button>
                        ))}
                    </div>
                    <SearchInput handleSearch={handleChangeSearch}/>
                </div>

                <div className="tab-content mb-12 mt-10">
                    {
                        tabsConfig?.map(({id, products, title}) => 
                            activeTab === id ? (
                                <ProductContent handleClickModal={handleClickModal} openProductSecond product={product} products={products} title={title} key={id}/>
                            ) : null
                    )}
                </div>
            </div>
        </>
    );
}
