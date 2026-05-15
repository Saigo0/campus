import Link from "next/link";

function RedirectButton({children, destiny}){
    return(
        <Link href={destiny} className="bg-linear-to-r from-[#1B3B99] to-[#819BFF] text-white p-2 rounded-xl">{children}</Link>
    )
}

export default RedirectButton;