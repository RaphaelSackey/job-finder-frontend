export default function Card({date, title, type, pay, location, id, onclick, active, NavbarFilter}){
  const isActive = id == active ? 'shadow-gray-800 shadow-sm': ''
  
  function shouldShow(NavbarFilter) {
    const filterjobType = NavbarFilter.jobType;
    const filterlocation = NavbarFilter.location;
    const filterpay = NavbarFilter.pay;
    const filterSearchInput = NavbarFilter.searchInput;
    const showDecider = new Set();
  
    
    if (filterjobType && filterjobType !== type) {
      showDecider.add("none");
    }
    if (filterlocation && filterlocation !== location) {
      showDecider.add("none");
    }
    if (filterpay && filterpay !== pay) {
      showDecider.add("none");
    }
    if (
      filterSearchInput &&
      !title.toLowerCase().includes(filterSearchInput.toLowerCase())
    ) {
      showDecider.add("none");
    }
    

    const result = showDecider.size > 0? true: false
    return result
  }

  const display = shouldShow(NavbarFilter)
 
  
    return (
      <div
        className={`card mb-4 h-[21.5rem] max-h-[21.5rem] w-[17.2rem] max-w-[17.2rem] transform rounded-2xl bg-white p-2 transition duration-300 ease-in-out hover:scale-105 ${isActive} ${display? "hidden": ""}`}
        id={id}
        onClick={onclick}
      >
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
          <h1 className="">${pay} /hr</h1>
          <h5 className="text-customRenchGray text-xs">{location}</h5>
        </div>
      </div>
    );
}