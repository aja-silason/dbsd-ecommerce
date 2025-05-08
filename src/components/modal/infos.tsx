import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import { useWindowWidth } from "@/hook/behavioral/useResponsivity";
import { UseSearch } from "@/hook/useSearch";
import { DialogActions } from "@mui/material";
import { BuyLink } from "../button-link/buy-link";
import { UseCurrencyConverter } from "@/hook/util/currency";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<HTMLElement>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type modalProps = {
    children: React.ReactNode,
    data: any
}

export default function Infos({children, data}: modalProps) {
 
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false);  };

    
    const handleDialogClose = (_event: React.SyntheticEvent, reason?: string) => {
        if (reason && (reason === "backdropClick" || reason === "escapeKeyDown")) {
            return;
        }

        handleClose();
    };
    const { filterProductLuz, filterProduct, filterManualProducts, filterResistanceProducts, filterCleaningProducts, filterBatteryProducts, filterHygieneSafetyProducts,handleChangeSearch, filterElectricalProduct, filterAccessoryProducts, filterSportAndEducationProducts, handleClickModal, handleTabChange, openProductSecond, product, activeTab } = UseSearch();


      const {convertCurrency} = UseCurrencyConverter()

        const width = useWindowWidth()
    
        if(width == null) return null;

        console.log(data)
    

    
    return (
        <React.Fragment>

            <div>
                <button type="button" onClick={handleClickOpen} className="w-full text-left bg-transparent pl-3 outline-none rounded-sm">{children}</button>
            </div>                 
                       
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        width: "80%",
                        maxWidth: "30%",
                        height: "55%",
                        borderRadius: "8px",
                        maxHeight: "80%",
                    },
                }}
                BackdropProps={{
                    style: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
                }}
                disableEscapeKeyDown
            >
                <DialogTitle className="flex items-center justify-end font-normal text-[22px]" padding={0}>
                    <button onClick={handleClose} className="border-[.1em] rounded-[1em] w-8 h-8 flex items-center justify-center text-[#000] cursor-pointer hover:border-[#ccd] ">X</button>

                </DialogTitle>

                    <DialogContent>
                              
                        <div className="mt-4 flex flex-col gap-4">
                        
                        <div>
                            <Image alt="produto" src={`${data?.srcImage}`} width={200} height={250} className="mx-auto h-[250px] w-[320px] object-cover"/>
                        </div>
            
                        <div>
                            <h2 className="text-lg font-bold">{data?.nameProduct}</h2>
                            <h2 className="text-base font-semibold">Preço {convertCurrency(data?.price)}</h2>
                            <BuyLink product_info={data}/>
                        </div>
            
                        </div>
            
                    </DialogContent> 
            
                    
            </Dialog>
        </React.Fragment>
    );
}