export default function LocCard({img, imgAlt, eyebrow, title, pricing, url}){
    return(
      <div>
        <img className="rounded-t-xl" width={400} height={200} src={img} alt={imgAlt}/>
        <div className=" rounded-b-xl py-4 px-4 bg-white shadow-xl">
          <div className="text-xs font-bold text-sky-500">{eyebrow}</div>
          <div className="mt-1 font-bold text-gray-700">
            <a href={url} className="hover:underline">
              {title}
            </a>
          </div>
          <div className="mt-2 text-sm text-gray-600">{pricing}</div>
        </div>
    </div>
    )
}