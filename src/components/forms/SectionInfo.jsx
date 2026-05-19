function SectionInfo({children, id, title, description, className}){
    return(
        <section className={`w-full mt-7`}>
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mb-7">{description}</p>
            <div className={`${className}`}>
                {children}
            </div>
        </section>
    )
}

export default SectionInfo;