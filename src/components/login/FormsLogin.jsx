function FormsLogin({children, onSubmit}){
    return(
        <form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default FormsLogin;