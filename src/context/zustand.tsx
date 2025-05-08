import { create } from 'zustand';


type zustandData = {
    openProductFirst: boolean;
    openProductSecond: boolean;
    openSearchModal: boolean;
    handleClickFirst: (value: boolean) => void;
    handleClickSecond: (value: boolean) => void;
    handleOpenSearchModal: (value: boolean) => void
}

export const useZustand = create<zustandData>((set) => ({
    openProductFirst: false,
    openProductSecond: false,
    openSearchModal: false,
    handleOpenSearchModal: (value: boolean) => set({openSearchModal: value}),
    handleClickFirst: (value: boolean) => set({ openProductFirst: value }),
    handleClickSecond: (value: boolean) => set({ openProductSecond: value })
}));