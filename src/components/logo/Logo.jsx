import Image from "next/image";

export default function Logo(){
    return(
        <Image
            src="/images/logo.png"
            alt="Logo"
            width={120}
            height={120}
            className="w-auto h-auto"
        ></Image>
    )
}