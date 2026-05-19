export default function LocCard({img, imgAlt, description, title, pricing, url, svgs}){
    return(
      <div>
        <img className="rounded-t-xl w-[400px] h-[200px] object-cover" src={img} alt={imgAlt}/>
        <div className=" rounded-b-xl py-4 px-4 bg-white shadow-xl">
          <div className="flex flex-row">
            <div className="mt-1 font-bold text-gray-700">
              <a href={url} className="hover:underline">
                {title}
              </a>
            </div>
            <div className="text-md font-bold text-sky-500 py-1 ml-auto">{pricing}</div>
          </div>
          
          
          <div className="mt-2 text-md text-gray-600">{description}</div>
        </div>

        <div className="">

        </div>
    </div>
    )
}