"use client";
import { UseSearch } from "@/hook/useSearch";  
import { ProductContent } from "./product-content/products";
import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { CookSVG } from "./svg/cook";
import { IluminationSVG } from "./svg/ilumination";
import {  ManualToolsSVG } from "./svg/manualtools";
import { AccesoryToolsSVG } from "./svg/acessorytools";
import { HigieneAndSavitySVG } from "./svg/higieneandsavity";
import { CleanAdictiveSVG } from "./svg/cleanadictive";
import { ElectronicsSVG } from "./svg/electronic";
import { GlueAndResistentsSVG } from "./svg/glueandresistents";
import { BatterySVG } from "./svg/batery";
import { SearchInputModal } from "./input/search-product-modal";
import { ProductContentSearchModal } from "./product-content/products-search-modal";

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};


export function ProductModalSearch() {

    const objectMaterial = [
        {
            id: 1,
            name: "FERRAMENTAS ELÉTRICAS",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "electric.svg",
            svg: <ElectronicsSVG/>
            
        },
        {
            id: 2,
            name: "FERRAMENTAS MANUAIS",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "wrench.svg",
            svg: <ManualToolsSVG/>

        },
        {
            id: 3,
            name: "UTENSÍLIOS DE COZINHA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "category.svg",
            svg: <CookSVG/>
            
        },
        {
            id: 4,
            name: "ILUMINAÇÃO",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "luz.svg",
            svg: <IluminationSVG/>

        },
        {
            id: 5,
            name: "ACESSÓRIOS E CONSUMÍVEIS DE DESGASTE RÁPIDO",
            background: "#D7F1FF",
            color: "#1E90FF",
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
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "setup.svg",
            svg: <BatterySVG/>

        }, {
            id: 8,
            name: "COLA E RESISTENTE",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "luz.svg",
            svg: <GlueAndResistentsSVG/>

        }, {
            id: 9,
            name: "ADITIVO DE LIMPEZA",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "backpack.svg",
            svg: <CleanAdictiveSVG/>
        }, {
            id: 10,
            name: "ESCRITÓRIO, DESPORTO E EDUCAÇÃO",
            background: "#D7F1FF",
            color: "#1E90FF",
            description: "",
            image: "luz.svg",
            svg: <IluminationSVG/>
        }
    ]
    
    const { filterProductLuz, filterProduct, filterManualProducts, filterResistanceProducts, filterCleaningProducts, filterBatteryProducts, filterHygieneSafetyProducts,handleChangeSearch, filterElectricalProduct, filterAccessoryProducts, filterSportAndEducationProducts, handleClickModal, handleTabChange, openProductSecond, product, activeTab } = UseSearch();
    
    const tabsConfig = [
        {
          id: 3,
          title: "Produtos de Cozinha",
          products: filterProduct,
        },
        {
          id: 4,
          title: "Melhores Produtos de Lâmpadas",
          products: filterProductLuz,
        },
        {
          id: 1,
          title: "Melhores Ferramentas Elétricas",
          products: filterElectricalProduct,
        },
        {
          id: 2,
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
        {
            id: 10,
            title: "Melhores Produtos Desportista e Escolares",
            products: filterSportAndEducationProducts,
          },
    ];
    
    const width = useWindowWidth()

    if(width == null) return null;

    return (
        <>
            <div className="">
                
                <div className="px-[2em]">
                    <SearchInputModal handleSearch={handleChangeSearch}/>
                </div>
                
                <h1 className="font-[500] mt-[1em] ml-10 lg:text-[14pt] sm:text-[13pt] text-black">Categorias De Produtos</h1>

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
                </div>

                <div className="tab-content mb-12 mt-10">
                    {
                        tabsConfig?.map(({id, products, title}) => 
                            activeTab === id ? (
                                <ProductContentSearchModal handleClickModalSearch={handleClickModal} openProductSecond={openProductSecond} product={product} products={products} title={title} key={id}/>
                        ) : null
                    )}
                </div>
            </div>
        </>
    );
}
