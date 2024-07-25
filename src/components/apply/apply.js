import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Axios from "../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Apply() {
  const location = useLocation();
  let jobId
  let jobInfo
  
  if(localStorage.getItem('jobId') && localStorage.getItem('jobInfo')){
    jobId = JSON.parse(localStorage.getItem("jobId"));
    jobInfo = JSON.parse(localStorage.getItem("jobInfo"));

    // localStorage.removeItem('jobId')
    // localStorage.removeItem('jobInfo')
  } else{
    jobId = location.state.jobId;
    jobInfo  = location.state.jobInfo;

    localStorage.setItem('jobId', JSON.stringify(jobId))
    localStorage.setItem('jobInfo', JSON.stringify(jobInfo))
  }
  
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    description: '',
    email: ''
  })
  const axios = Axios()

  const navigate = useNavigate()

  function handleFormChange(event){
    setApplicationData(prev => ({
        ...prev,
        [event.target.id]: event.target.value
    }))
  }

  async function applyToJob(){

    const hasEmptyValue = Object.values(applicationData).some(
        (value) => value === "",
    );
    if (hasEmptyValue) {
        alert("Please fill out all the information");
        return
    }

    const response = await axios.post('/apply', {...applicationData, jobId:jobId})
    if (response.status != 200){
        alert('something went wrong')
        return
    }

    alert('successfully applied for job')
    navigate('/')
  }




  return (
    <>
      <div className="signInSignup-navbar border-customRenchGray relative flex h-[8vh] items-center justify-center border-b px-3 lg:px-6">
        <Link to="/" className="absolute">
          <FontAwesomeIcon icon={faArrowLeft} className="text-customDark" />
        </Link>
      </div>
      <div className="flex h-[90vh] items-center justify-center">
        <form className="border-customRenchGray flex h-[80%] w-1/2 flex-col gap-2 rounded-lg border px-5 py-2">
          <div className="font-poppinsBold flex justify-center items-center">
            {jobInfo[3]}<span className="text-customRenchGray text-xs pl-2">{jobInfo[2]}</span>
          </div>
          <label htmlFor="firstName">First Name</label>
          <input
            className="h-12 rounded pl-2"
            id="firstName"
            onChange={handleFormChange}
            value={applicationData.firstName}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            className="h-12 rounded pl-2"
            id="lastName"
            value={applicationData.lastName}
            onChange={handleFormChange}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="h-12 rounded pl-2"
            value={applicationData.email}
            onChange={handleFormChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            className="h-12 rounded pl-2"
            type="tel"
            id="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={applicationData.phone}
            onChange={handleFormChange}
          />

          <label htmlFor="description">Tell us a little about yourself</label>
          <textarea
            id="description"
            className="h-56 rounded py-2 pl-2"
            onChange={handleFormChange}
            value={applicationData.description}
          ></textarea>
          <div>
            <button
              className="text-customWhite rounded-md bg-blue-300 px-4 py-2"
              onClick={applyToJob}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
