"use client";

import { Dialog, DialogActions, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useZustand } from "../../context/zustand";
import { UseCurrencyConverter } from "@/hook/utli/currency";
import { BuyLink } from "../button-link/buy-link";
import { useWindowWidth } from "@/hook/behavioral/useResponsivity";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<HTMLElement>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type dataType = {
  product: {
    id: number;
    nameProduct: string;
    details: string;
    srcImage: string;
    alt: string;
    price: number;
  };
};

export function ModalProductFirst(product: dataType) {
  const { openProductSecond, handleClickSecond } = useZustand();

  const handleClose2 = () => {
    handleClickSecond(false);
  };

  const {convertCurrency} = UseCurrencyConverter()

  
  const handleDialogClose2 = (event: React.MouseEvent<HTMLDivElement>) => {
    const dialogContent = event.currentTarget.querySelector('.MuiDialogContent-root');
    if (dialogContent && !dialogContent.contains(event.target as Node)) {
      handleClose2();
    }
  };

  const width = useWindowWidth();

  return (
    <>
      <Dialog
        open={openProductSecond}
        TransitionComponent={Transition}
        keepMounted 
        onClose={handleClose2}  
        onClick={handleDialogClose2}
        aria-describedby="alert-dialog-slide-description"
        className="bg-gray"
        BackdropProps={{
          style: { backgroundColor: "rgba(0, 0, 0, 0.6)"},
        }}
        disableEscapeKeyDown
      >
        <DialogContent>
          
          <div className="mt-4 flex flex-col gap-4">
            
            <div>
              <Image alt="produto" src={`${product?.product?.srcImage}`} width={200} height={250} className="mx-auto h-[250px] w-[320px] object-cover"/>
            </div>

            <div>
              <h2 className="text-lg font-bold">{product?.product?.nameProduct}</h2>
              <h2 className="text-base font-semibold">Preço {convertCurrency(product?.product?.price)}</h2>
              <BuyLink product_info={product}/>
            </div>

          </div>

        </DialogContent> 

        <DialogActions className="flex flex-rows gap-5 mr-5">
          <button
            onClick={handleClose2}
            className="font-medium mr-4 text-sm absolute top-5 right-3 text-black"
          >
            <Image 
              alt="closed"
              src="closed.svg"
              width={24}
              className="mx-auto w-[24px] h-[24px]"
              height={24}
            />
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
