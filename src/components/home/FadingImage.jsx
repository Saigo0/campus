import Image from "next/image";

export default function FadingImage(){
    return(
        <div className="w-full h-[300px] relative overflow-hidden">

            <Image src="/images/reurbanizacao-campus-scaled.jpg" alt="" fill className="object-cover bg-blend-multiply bg-black       [-webkit-mask-image:linear-gradient(to_bottom, black_60%, transparent_100%)]"/>

            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F2EFFF] dark:to-[#131318] "></div>

        </div>
    )
    
}