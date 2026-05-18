function SectionInfo({children, id, title, description}){
    return(
        <section className="w-full">
            <h2 className="text-xl font-bold">{title}</h2>
            <p>{description}</p>
            {children}
        </section>
    )
}

export default SectionInfo;