import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Image from "next/image";
import { ProductModalSearch } from "../product-modal";


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<HTMLElement>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

type modalProps = {
    modal_title: string
}

export default function SearchModal({modal_title}: modalProps) {
 
  const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false);  };

    
    const handleDialogClose = (_event: React.SyntheticEvent, reason?: string) => {
        if (reason && (reason === "backdropClick" || reason === "escapeKeyDown")) {
            return;
        }

        handleClose();
    };

    
    return (
        <React.Fragment>

            <div className="flex border-gray-400 border h-[48px] lg:w-[520px] rounded-[5px] mr-4  bg-white flex-row gap-1">
                <button type="button" onClick={handleClickOpen} className="w-full text-left bg-transparent pl-3 outline-none rounded-sm">{modal_title}</button>
                <Image src="/search.svg" alt="search" width={20} height={20} className="m-3" />
            </div>                 
                       
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleDialogClose}
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{
                    style: {
                        width: "100%",
                        maxWidth: "70%",
                        height: "100%",
                        borderRadius: "8px",
                        maxHeight: "80%",
                    },
                }}
                BackdropProps={{
                    style: { backgroundColor: "rgba(0, 0, 0, 0.6)" },
                }}
                disableEscapeKeyDown
            >
                <DialogTitle className="flex items-center justify-between font-normal text-[22px]" padding={0}>
                    <p className="text-[13pt]">Pesquisar Producto</p>
                    <button onClick={handleClose} className="border-[.1em] rounded-[1em] w-8 h-8 flex items-center justify-center text-[#000] cursor-pointer hover:border-[#ccd] ">X</button>
                </DialogTitle>

                    <DialogContent>                        
                        <ProductModalSearch />
                    </DialogContent>
            </Dialog>
        </React.Fragment>
    );
}