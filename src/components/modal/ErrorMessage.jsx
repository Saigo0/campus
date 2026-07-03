export default function ErrorMessage({children}){
    return(
        <div className="mb-4 p-3 rounded-md bg-red-100 text-red-600 text-sm">
            {children}
        </div>
    )
}