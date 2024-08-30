import moment from "moment/moment";
export default function PostedJobProfileCard({id, title, date, location, pay, onClick, isActive}){
    const fDate = moment(date).format("MMMM Do YYYY");
    console.log(isActive, id)
    return (
      <>
        <div
        onClick={onClick}
          className={`h-40 w-[85%] rounded-lg border border-black transition duration-300 ease-in-out hover:scale-105 ${isActive == id ? 'shadow-black shadow-sm' : ''}`}
          data-id={id}
        >
          <div className="dash-job-title font-poppinsBold mb-5 pt-1 text-center text-xl">
            {title}
          </div>
          <div className="text-center">{fDate}</div>
          <div className="text-center">{location}</div>
          <div className="pt-3 text-center text-xs">{pay} /hr</div>
        </div>
      </>
    );
}