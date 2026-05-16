import Link from "next/link";
import {Inter}from "next/font/google";

const inter = Inter({ 
  weight: ['400', '700'],
  subsets: ['latin'],
});

function RedirectButton({children, destiny}){
    return(
        <Link href={destiny} className={`bg-linear-to-r from-[#1B3B99] to-[#819BFF] text-white py-2 px-6 font-semibold rounded-2xl text-sm ${inter.className}`}>{children}</Link>
    )
}

export default RedirectButton;