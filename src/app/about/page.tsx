
import { NavBar } from "../../components/layouts/navBar/navBar";
import Image from "next/image"
import { Product } from "../../components/product";
import { Footer } from "../../components/footer/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";

const About = () => {

    return (
        <>
            <NavBar />

            <div className="gap-24 flex justify-between sx:flex-col md:flex-row px-16 mt-16">

                <div className="w-full flex flex-col gap-[1em]">
                    <h1 className="md:text-[30px] sx:text-[22px] mf:text-[40px] text-[#191c1e]">Sobre a DBSD</h1>

                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        A DBSD é uma empresa dinâmica, especializada na comercialização de ferramentas manuais, elétricas e utensílios profissionais. Trabalhamos com marcas reconhecidas pela sua qualidade e durabilidade, como Bosch, Yato, Flux, Tramontina e VITO, garantindo soluções confiáveis para profissionais e empresas de todos os setores.
                    </label>
                    
                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        Nosso modelo de negócio é focado no comércio digital, uma escolha estratégica que nos permite oferecer atendimento ágil, proximidade com o cliente e preços competitivos, com entregas rápidas em todo o país. Mantemos uma ampla gama de produtos em stock para entrega imediata, o que nos diferencia pela prontidão no serviço.
                        </label>

                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        Além do fornecimento de produtos, a DBSD também presta serviços de formação na área administrativa, com foco em gestão comercial, contabilidade e ferramentas de produtividade como o Primavera Software, ajudando negócios a crescer com mais organização e eficiência.
                    </label>

                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        Nosso compromisso é com o profissionalismo, a confiança e a inovação.
                    </label>

                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        💼 DBSD – Acelerando o sucesso com dinamismo.
                    </label>

                </div>

                <div className="sx:w-full md:w-[50%] sx:itens-center sx:mx-auto"><Image
                    alt="star"
                    src="/infoboard.jpg"
                    width={501}
                    height={504}
                    className="-mt-2"
                /> </div>
            </div>
            <Footer />
            <Analytics />
            <SpeedInsights />

        </>
    )
}


export default About;