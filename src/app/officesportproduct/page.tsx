
import { NavBar } from "../../components/layouts/navBar/navBar";
import Image from "next/image"
import { Product } from "../../components/product";
import { Footer } from "../../components/footer/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import { ProductOneCategory } from "@/components/card/product-onecategory";
import { OfficeAndSportProduct } from "@/components/mook/officeandsport";

const OfficeSportProduct = () => {

    const produc = OfficeAndSportProduct;

    return (
        <>
            <NavBar />

                <div className="gap-24 flex justify-between sx:flex-col md:flex-row px-16 mt-16">

                    <div className="w-full">
                        <h1 className="md:text-[30px] sx:text-[22px] mf:text-[40px] text-[#191c1e]">Na DBSD, sua compra é a nossa prioridade! Entregamos em até 24 horas após a confirmação do pagamento.</h1>

                        <label className="sx:text-[13px] md:text-[20px] text-[#191c1e]">Sua compra te esperando em um ponto de coleta conveniente, pronto para retirada. A poucos passos de você.  </label>
                    </div>

                    <div className="sx:w-full md:w-[50%] sx:itens-center sx:mx-auto">
                        <Image alt="star" src="/cadeira.jpg" width={501} height={404} className="-mt-2" /> 
                    </div>

                </div>
                <ProductOneCategory data={produc} title="Escritório, Desporto e Educação"/>
            <Footer />
            <Analytics />
            <SpeedInsights />

        </>
    )
}


export default OfficeSportProduct;