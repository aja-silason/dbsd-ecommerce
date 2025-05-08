
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
                        Na DBSD, acreditamos que uma experiência de compra eficiente e prática faz toda a diferença. Por isso, colocamos nossos clientes no centro de tudo o que fazemos. Nosso compromisso é garantir agilidade, confiança e comodidade em cada pedido realizado.
                    </label>
                    
                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        Entregamos seus produtos com rapidez: após a confirmação do pagamento, o prazo de entrega é de até 24 horas. E para tornar o processo ainda mais conveniente, utilizamos pontos de coleta estrategicamente localizados, sempre próximos a você. Dessa forma, sua compra fica disponível para retirada com total praticidade e segurança, no horário que melhor se encaixar na sua rotina.
                        </label>

                    <label className="sx:text-[12pt] md:text-[13pt] text-[#191c1e]">
                        Somos movidos pelo dinamismo e pela inovação, buscando sempre melhorar nossos serviços e atender às suas necessidades com excelência. Na DBSD, seu tempo é valorizado e sua satisfação é a nossa prioridade.
                    </label>

                </div>

                <div className="sx:w-full md:w-[50%] sx:itens-center sx:mx-auto"><Image
                    alt="star"
                    src="about.svg"
                    width={501}
                    height={404}
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