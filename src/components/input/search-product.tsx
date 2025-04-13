import Image from "next/image"
import { ChangeEvent } from "react"

type props = {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({handleSearch}: props) => {
    return (
        <div className="flex border-gray-400 border h-[48px] lg:w-[520px] rounded-[5px] mr-4  bg-white flex-row gap-1">
            <input type="text" placeholder="Pesquisar Produto..." onChange={handleSearch} className="w-full bg-transparent pl-3 outline-none rounded-sm" />
            <Image src="/search.svg" alt="search" width={20} height={20} className="m-3" />
        </div>
    )
}