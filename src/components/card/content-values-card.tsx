import Image from "next/image"

type props = {
    icon: string;
    title: string;
    description: string;
}

export const ContentValueCard = ({icon, title, description}: props) => {
    return (
        <aside className="flex p-[2em] flex-row gap-4 justify-center md:border-r ">
            <div className="flex flex-col gap-2 w-[300px]">
                <Image
                src={icon}
                width={40}
                height={40}
                className=""
                alt={title}
                /><h1 className="font-medium text-[14px]">{title}</h1>
                <span className="font-normal text-[14px] text-justify">{description}</span>
            </div>
        </aside>
    )
}