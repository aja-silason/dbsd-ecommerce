"use client"

import { NavBar } from "@/components/layouts/navBar/navBar";
import "./globals.css"
import { Product } from "../components/product";

import { Footer } from "../components/footer/footer";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import { SlideProduct } from "../components/slide-product";

import { Publicity } from "../components/publicity"
import { PublicityProductSecond } from "../components/publicity2";
import Image from "next/image"

import { motion, useInView } from "framer-motion";
import {  useRef } from "react";
import { MainBannerCarousel } from "@/components/carousel/main-banner";
import { ContentValueCard } from "@/components/card/content-values-card";
export default function Home() {



  const variant = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50, damping: 25, duration: 1.5 } }
  };


  const ref0 = useRef(null);
  const isInView0 = useInView(ref0, { once: true });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  const ref2= useRef(null);
  const isInView2 = useInView(ref2, { once: true });

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3, { once: true });


  const ref4 = useRef(null);
  const isInView4 = useInView(ref4, { once: true });

  const contentValueData = [
    {
      id: 1,
      icon: '/entrega.svg',
      title: 'ENTREGA MAIS RÁPIDA',
      description: 'Entrega em 24/H sobre confirmação de pagamento em transferência ou depósito bancário, excepto feriados e finais de semana(Sábado e Domingo).'
    },
    {
      id: 2,
      icon: '/trop.svg',
      title: 'RETORNO EM 24 HORAS',
      description: 'As devoluções são feitas apenas sobre defeitos de fábrica. As devoluções não poderão ser efectuadas 24 horas após a data de compra. Os artigos e as embalagens a devolver terão de estar em boas condições. Sujeito a desconto de 12% referentes despesas bancarias e custos administrativos.'
    },
    {
      id: 3,
      icon: '/pagamento.svg',
      title: 'PAGAMENTO SEGURO',
      description: 'Seu dinheiro está seguro'
    },
    {
      id: 4,
      icon: '/music.svg',
      title: 'SUPORTE DE 24 HORAS POR <br /> DIA, 7 DIAS POR SEMANA',
      description: 'Contato/mensagem ao vivo'
    },
  ]



  return (
    <>
      <NavBar />

      <MainBannerCarousel />

      <motion.div ref={ref0} initial="initial" animate={isInView0 ? "animate" : "initial"} transition={{ duration: 0.2, delay: 0 }} variants={variant}> 
        <div className="p-7 justify-center my-[.5em] overflow-hidden flex flex-wrap border border-[#e4e7e9]">
          
          {
            contentValueData?.map((content) => (
              <ContentValueCard icon={content?.icon} title={content?.title} description={content?.description} key={1}/>
            ))
          }

        </div>
      </motion.div>

      <motion.div ref={ref1} initial="initial" animate={isInView1 ? "animate" : "initial"} transition={{ duration: 0.2, delay: 0 }} variants={variant}> 
        <Product />
      </motion.div>

      <motion.div  ref={ref2} initial="initial" animate={isInView2 ? "animate" : "initial"} transition={{ duration: 0.2, delay: 0 }}variants={variant}> 
        <Publicity />
      </motion.div>
    
      <div className="flex flex-col md:flex-row gap-8 mx-auto ">
        <motion.div ref={ref3} initial="initial" animate={isInView3 ? "animate" : "initial"} transition={{ duration: 0.2, delay: 0 }} variants={variant} >
          <PublicityProductSecond />
        </motion.div>
        
        <motion.div ref={ref4} initial="initial" animate={isInView4 ? "animate" : "initial"} transition={{ duration: 0.2, delay: 0 }} variants={variant}> 
          <SlideProduct />
        </motion.div>

      </div>

      <Footer />
      <Analytics />
      <SpeedInsights />

    </>
  );
}


