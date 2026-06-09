export default function LocSection({children}){
    return(
        <section className="flex flex-col gap-4 w-[1050px] mt-8">
            {children}
        </section>
    );
}