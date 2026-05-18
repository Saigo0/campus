function BoxInfo({children, title}){
return(
    <div className="bg-white p-3 w-full">
        <h3>{title}</h3>
        {children}
    </div>
)
}

export default BoxInfo;