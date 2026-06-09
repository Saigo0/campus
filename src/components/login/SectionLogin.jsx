function SectionLogin({children}){
    return(
        <section className="bg-white dark:bg-[#1f1f25] p-5 md:p-10 items-center rounded-3xl flex flex-col gap-5 w-3/4 md:w-2/4 lg:w-1/3">
            {children}
        </section>
    )
}

export default SectionLogin;