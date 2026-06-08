import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Main from "@/components/home/Main";
export default function AppLayout({children}){
    return(
        <>
        <Header/>
        <main className="bg-[#F2EFFF] dark:bg-[#03132c] dark:text-white">{children}</main>
        <Footer/>
        </>
    )
}