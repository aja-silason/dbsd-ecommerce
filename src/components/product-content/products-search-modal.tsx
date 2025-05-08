import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { ProductCard } from "../card/product-card"
import { ProductLess } from "../card/productless-card"
import { ModalProductFirst } from "../modal/productModalFirst"
import { ModalProductFirstSearch } from "../modal/productModalFirstSearch";
import Infos from "../modal/infos";

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
    handleClickModalSearch: any
}

export const ProductContentSearchModal = ({title, products, openProductSecond, product, handleClickModalSearch}: props) => {

    const width = useWindowWidth();

    if(width == null) return null;

    return (
        <div>
            <h2 className="mx-[3.5em] font-normal lg:text-[14pt] sm:text-[13pt]">{title}</h2>
            <div className={`${width >= 850 ? 'lg:ml-[4em] sm:ml-0 flex flex-wrap gap-10' : 'flex flex-col justify-center items-center gap-[2em] px-[2em]'} mt-[3em]`}>
                {products.length > 0 ? products?.map((item: ProductType) => (
                    <Infos data={item} children={
                        <ProductCard onClick={() => {}} data={item} />}
                    />
                )) : (
                    <ProductLess text="Producto não encontrado"/>
                )}

            </div>
        </div>
    )
}