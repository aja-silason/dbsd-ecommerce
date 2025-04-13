import Image from "next/image"

type props = {
    onClick: (value: any) => void;
    data: {
        id: number;
        alt: string;
        srcImage: string;
        nameProduct: string
    }
}

export const ProductCard = ({onClick, data}: props) => {

    return (
        <button key={data.id} onClick={() => onClick(data)} className="card border-[#e4e7e9] sx:w-[200px] md:w-[300px]  gap-3 flex flex-col border  rounded-[8px] p-[1em] transition-transform duration-300 hover:scale-110">
            <Image alt={data.alt} src={data.srcImage} width={250} height={180} className="mx-auto h-[180px] w-[250px] object-cover"/>

            <div className="flex flex-col gap-1">
                <Image alt="star" src="star.svg" width={80} height={16} className="mb-1" />
                <h4 className="font-semibold text-[16px] text-left">{data.nameProduct}</h4>
                <span className="text-[#2da5f3] text-left">Detalhe do Produto</span>
            </div>
        </button>
    )

}