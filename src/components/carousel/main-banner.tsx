'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import "../../app/globals.css"
import image1 from "../../../public/cover.png"
import image2 from "../../../public/backgroundimage2.jpg"


const images = [image1, image2];

export const MainBannerCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((src, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={src} alt={`Slide ${i}`} fill className="object-cover" />
        </div>
      ))}

      <div className="back">
          <div className="back2 flex flex-col gap-[1em]">
            <h1 className=" text-white font-bold xl:text-5xl  mf:text-4xl text-2xl">
            Na DBSD, sua compra é a nossa prioridade! Entregamos em até 24 horas após a confirmação do pagamento.
            </h1>
            <h2 className=" text-white mf:text-lg xl:text-xl font-normal md:base">
              Sua compra te esperando em um ponto de coleta conveniente.
            </h2>
          </div>
      </div>

    </div>
  );
};
