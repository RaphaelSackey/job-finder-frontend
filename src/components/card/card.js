export default function Card({date, title, type, pay, location, id, onclick, active}){
  const isActive = id == active ? 'shadow-gray-800 shadow-sm': ''
    return (
      <div className= {`card h-[21.5rem] max-h-[21.5rem] w-[17.2rem] max-w-[17.2rem] rounded-2xl bg-white p-2 mb-4 hover:scale-105 transform transition duration-300 ease-in-out ${isActive}`} id={id} onClick = {onclick}>
        <div className="card-top bg-customChampagnePink flex h-[80%] flex-col gap-4 rounded-xl p-1">
          <div className="j-date flex h-[20%] items-center">
            <span className="block h-fit w-fit rounded-full bg-white p-2">
              {date}
            </span>
          </div>
          <div className="j-name h-[33%] max-h-[33%] max-w-full">
            <h1 className="font-poppinsBold max-h-full max-w-full text-3xl">
              {title}
            </h1>
          </div>
          <div className="j-type flex h-[33%] items-center">
            <span className="j-date border-customRenchGray block h-fit w-fit rounded-full border bg-transparent px-3 py-1">
              {type}
            </span>
          </div>
        </div>
        <div className="card-bottom flex h-[20%] flex-col justify-center px-2">
          <h1 className="">${pay}</h1>
          <h5 className="text-customRenchGray text-xs">{location}</h5>
        </div>
      </div>
    );
}