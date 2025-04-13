import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { ProductCard } from "../card/product-card"
import { ProductLess } from "../card/productless-card"
import { ModalProductFirst } from "../modal/productModalFirst"

type ProductType = {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
};

type props = {
    title: string,
    products: ProductType[],
    openProductSecond: boolean,
    product: any,
    handleClickModal: any
}

export const ProductContent = ({title, products, openProductSecond, product, handleClickModal}: props) => {

    const width = useWindowWidth();

    return (
        <div>
            <h2 className="mx-[2em] font-semibold lg:text-[24px] sm:text-[19px]">{title}</h2>
            <div className={`${width >= 850 ? 'lg:ml-[4em] sm:ml-0 flex flex-wrap gap-10' : 'flex flex-col justify-center items-center gap-[2em] px-[2em]'} mt-[3em]`}>
                {products.length > 0 ? products?.map((item: ProductType) => (
                    <ProductCard onClick={() => handleClickModal(item)} data={item} />
                    
                )) : (
                    <ProductLess text="Estamos sem producto"/>
                )}

                {openProductSecond && (
                    <ModalProductFirst product={product} />
                )}
            </div>
        </div>
    )
}