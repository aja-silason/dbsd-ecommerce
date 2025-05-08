import Image from "next/image"
import Link from 'next/link';
import { ArrowRightSVG } from "./svg/arrowright";

export function PublicityProductSecond(){
    const phone = 936884337;
    const menssage = "Olá! Estou interessado(a) em dos produtos de sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
   
    return(
        <Link href="/officesportproduct">
        <div className=" flex items-center justify-center  ">   

                <div className={`flex flex-col md:ml-12 `}>
                    <div className={`flex flex-col justify-center mx-auto h:mb-24  `}>
                        <div className="bg-[#f3de6d] w-[312px] pt-3">
                        
                            <div className="text-center flex flex-col gap-[1em] justify-center ">
                                <h1 className="text-[#be4646] font-semibold text-[14px] mx-auto mt-3 text-center ">Escritório, Desporto e Educação</h1>

                                <Link href="/officesportproduct" className="rounded-[4px]  bg-[#2591d2] py-[12px] px-[32px] text-white w-[80%]  mx-auto   justify-center flex flex-row gap-3"> Visitar&nbsp;Productos<ArrowRightSVG/></Link>

                                <h3 className="font-semibold text-[32px] text-center "> 32% Desconto</h3>

                                <h5 className="text-[#475156] font-normal text-[16px]">Para todos os matérias de <br/> Escritório e Escolar</h5>                                
                                
                                <Link href={`https://wa.me/${phone}?text=${menssage}`} target="_blank"  className="rounded-[4px]  bg-[#2591d2] py-[12px] px-[32px] text-white w-[80%]  mx-auto   justify-center flex flex-row gap-3 " > Comprar&nbsp;agora 
                                    <ArrowRightSVG/>
                                </Link>
                            </div>

                        </div>
                    </div>
                
                    <Image
                    alt="imagem de publicidade"
                    src="set2.svg"
                    width={312}
                    height={428}/>

                </div>

            </div>
        </Link>
    )
}