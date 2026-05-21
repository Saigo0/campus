function Container({children}){
    return(
        <div className="flex flex-col w-full max-w-6xl mx-auto px-4 py-12 gap-10 justify-center">
            {children}
        </div>
    )
}

export default Container;