import Header from "@/components/header/Header";

export default function AppLayout({children}){
    return(
        <>
        <Header/>
        <main className="bg-[#F2EFFF]">{children}</main>
        </>
    )
}