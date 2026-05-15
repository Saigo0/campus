function BoxInfo({children, title}){
return(
    <div className="bg-white p-3">
        <h3>{title}</h3>
        {children}
    </div>
)
}

export default BoxInfo;