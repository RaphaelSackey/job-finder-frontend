import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Profile(){
    return (
      <>
        <div className="Profile-navbar border-customDark relative flex h-[7vh] items-center justify-center border-b px-3 lg:px-6">
          <Link to="/" className="absolute">
            <FontAwesomeIcon icon={faArrowLeft} className="text-customDark" />
          </Link>
        </div>
        <div className="profile-body container mx-auto flex h-[93vh] gap-8 py-2">
          <section className="left h-full w-[35%] overflow-scroll rounded-xl bg-gray-50 px-2 py-4">
            <div className="font-poppinsBold mb-6 text-3xl">
              welcome joh doe
            </div>
            <div className="posted-jobs mb-6 flex flex-col items-center rounded bg-gray-200 py-2">
              <h1 className="text-customRenchGray text-">Posted Jobs</h1>
              <div className="posted-jobs flex w-full flex-col items-center gap-4">
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
              </div>
            </div>
            <div className="applied-jobs flex flex-col items-center rounded bg-gray-200 py-2">
              <h1 className="text-customRenchGray text-">Jobs Applied To</h1>
              <div className="posted-jobs flex w-full flex-col items-center gap-4">
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
                <div className="h-40 w-[85%] rounded-lg bg-red-600 transition duration-300 ease-in-out hover:scale-105"></div>
              </div>
            </div>
          </section>

          <section className="right flex h-full max-h-full flex-grow flex-col items-center overflow-scroll">
            <div className="applicants my-10 flex h-full w-[85%] flex-col gap-2 rounded-xl bg-gray-50 p-2">
              <h1 className="text-center">Applicants</h1>
              <div className="application rounded bg-slate-300">
                <h1>allie zinba</h1>
                <h4>emal: asddsa</h4>
                <h5>phone: 1232321</h5>
                <h6>description: werewrew</h6>
              </div>
              <div className="application rounded bg-slate-300">
                <h1>allie zinba</h1>
                <h4>emal: asddsa</h4>
                <h5>phone: 1232321</h5>
                <h6>description: werewrew</h6>
              </div>
              <div className="application rounded bg-slate-300">
                <h1>allie zinba</h1>
                <h4>emal: asddsa</h4>
                <h5>phone: 1232321</h5>
                <h6>description: werewrew</h6>
              </div>
            </div>
          </section>
        </div>
      </>
    );
}