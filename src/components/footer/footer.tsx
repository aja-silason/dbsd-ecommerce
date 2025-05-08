'use client'
import Image from "next/image"
import Link from 'next/link';
import {EnvelopeSimple, Phone} from "@phosphor-icons/react"

export function Footer(){

    const phonenumber = 936884337;
 
    const phone = phonenumber;
    const menssage = "Olá! Estou interessado(a) em um produto da sua empresa. Poderia me fornecer mais informações sobre ele, como preço, disponibilidade e características? Obrigado(a)!"
    return(
        <>
            <div id="contact" className=" relative w-full bg-[#0A1127] mt-36" style={{
                borderTop: '1px solid',
                borderImageSource: 'linear-gradient(90deg, rgba(1, 2, 2, 0.16) 0%, rgba(255, 255, 255, 0.16) 50%, rgba(1, 2, 2, 0.16) 100%)',
                borderImageSlice: 1
            }}>

                <div className="flex gap-10 shadow-lg  sx:flex-col md:flex-row justify-between mx-auto px-24 py-32">

                    <aside className="w-full text-[#fff] flex flex-col  ">
                        <Image alt="logo-footer" src="/footer_logo.jpg" width={352} height={8} className="-mt-24"/>
                    </aside>

                    <div className="flex sx:flex-col md:flex-row w-full md:gap-36 sx:gap-10">
                

                        <aside className="flex flex-col gap-3 ">
                            <h3 className="sx:text-[13px] lg:text-[18px] text-[#fff]">Serviços </h3>
                                
                            <Link href="/" className=" text-[#fff]  flex flex-row gap-3  text-[14px]">Home</Link> 
                            <Link href="/product" className=" text-[#fff]  flex flex-row gap-3  text-[14px]">Produtos</Link>
                        </aside>

                        <aside className="flex flex-col gap-3">
                            <h3 className="sx:text-[13px] lg:text-[18px] text-[#fff]">Contactos </h3>
                            
                                <Link  href={`https://wa.me/${phone}?text=${menssage}`} target="_blank" className=" text-[#fff] flex flex-row gap-3 text-[14px] ">
                                    <Phone size={20} height={20} width={20} color="#fff"/>
                                    (+244)&nbsp;936 884 337
                                </Link>
                                
                                <Link href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" className=" text-[#fff]  flex flex-row gap-3  text-[14px]">
                                    <EnvelopeSimple size={20} height={20} width={20} color="#fff"/>
                                    dbsd.angola@gmail.com
                                </Link>
                        </aside>
                        </div>

                </div>

            </div>
    </>
    )
}