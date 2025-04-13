import { UseCurrencyConverter } from "@/hook/utli/currency";
import Image from "next/image"
import Link from "next/link"

type props = {
    product_info: {
        product: {
            nameProduct: string;
            price: number;
        },
    };
}

export const BuyLink = ({product_info}: props) => {

    const {convertCurrency} = UseCurrencyConverter();
    const phone = 936884337;

    return (
        <Link href={`https://wa.me/${phone}?text=Olá! Estou interessado(a) no produto ${product_info?.product?.nameProduct} que esta no valor de ${convertCurrency(product_info?.product?.price)}. Poderia me fornecer mais informações sobre ele, disponibilidade e características? Obrigado(a)!`} className="flex mt-4 gap-1 bg-[#F3DE6D] p-2 rounded-lg w-full justify-center" target="_blank">
            <span className="text-[#191c1f] font-medium">Comprar</span>
            <Image src="/set.svg" alt="seta" width={20} height={20} className="ml-2"/>
        </Link>
    )
}