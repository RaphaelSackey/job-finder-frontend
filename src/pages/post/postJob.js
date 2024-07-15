import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useAxios from "../../CustomHooks/useAxios";
import { useNavigate } from "react-router-dom";


export default function PostJobPage() {
  let navigate = useNavigate();
  const [jobForm, setJobForm] = useState({
    jobType: "General",
    jobName: "",
    Pay: "13-16",
    location: 'New York, NY',
    description: "",
  });

  function updateForm(event) {
    const name = event.target.name;
    const value = event.target.value;

    setJobForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handlePostJob(event) {
    event.preventDefault();
    const hasEmptyValue = Object.values(jobForm).some((value) => value === "");
    if (hasEmptyValue) {
      alert("Please fill out all the information");
      return;
    }
    PostJob()
  }

  async function PostJob() {
    const response = await useAxios("/postjob",{...jobForm} )
    if(!response){
      alert('You have to be singed in to be able to post a job')
      navigate("/loginSignup");
       return
    }
    if(response.status === 200){
      alert('Job successfully posted')
      setJobForm({
        jobType: "General",
        jobName: "",
        Pay: "13-16",
        description: "",
        location: "New York, NY"
      });

    }
    console.log(response)
  }

  return (
    <div className="post-job h-screen">
      <div className="signInSignup-navbar border-customDark relative flex h-[10%] items-center justify-center border-b px-3 lg:px-6">
        <Link to="/" className="absolute">
          <FontAwesomeIcon icon={faArrowLeft} className="text-customDark" />
        </Link>
        {/* <div className="circle flex flex-grow items-center justify-center">
          <span className="bg-customRenchGray h-12 w-12 rounded-full"></span>
        </div> */}
      </div>
      <div className="container mx-auto flex h-full flex-col items-center gap-7 pt-8">
        <div className="top-section flex min-h-[35%] w-[80%] rounded-2xl bg-gray-50 px-8">
          <div className="left flex h-full w-[60%] items-center">
            <span className="font-poppinsBold text-3xl">
              Post a job to the <br></br>community
            </span>
          </div>
          <div className="right hidden h-full w-[40%] sm:block xl:mr-6">
            <img
              src="./assets/animation/jobAnim.gif"
              className="h-full w-full object-cover"
            ></img>
          </div>
        </div>
        <div className="bottom-section h-fit w-[80%] rounded-2xl bg-gray-50 p-8">
          <span className="font-poppinsBold text-2xl">
            Please tell us a little more about your job opportunity
          </span>
          <form className="flex flex-col gap-2">
            <label htmlFor="jobType" className="pt-4">
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              className="border-customRenchGray h-12 rounded border"
              onChange={updateForm}
              value={jobForm.jobType}
            >
              <option value="General">General</option>
              <option value="Errand">Errand</option>
              <option value="Dog Sitting">Dog Sitting</option>
            </select>
            <label htmlFor="jobName" className="pt-4">
              Job Name
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              className="border-customRenchGray h-12 rounded border px-2"
              onChange={updateForm}
              value={jobForm.jobName}
            ></input>
            <label htmlFor="Pay" className="pt-4">
              Location
            </label>
            <select
              id="location"
              name="location"
              className="border-customRenchGray h-12 rounded border"
              onChange={updateForm}
              value={jobForm.location}
            >
              <option value="New York, NY">New York, NY</option>
              <option value="New Jersey">New Jersey</option>
              <option value="Arizona">Arizona</option>
            </select>
            <label htmlFor="Pay" className="pt-4">
              How much are you willing to pay per hour ?
            </label>
            <select
              id="Pay"
              name="Pay"
              className="border-customRenchGray h-12 rounded border"
              onChange={updateForm}
              value={jobForm.pay}
            >
              <option value="13-16">$ 13-16</option>
              <option value="17-20">$ 17-20</option>
              <option value="21+">$ 21+</option>
            </select>
            <label htmlFor="description" className="pt-4">
              Please write a short description about the job
            </label>
            <textarea
              id="description"
              name="description"
              className="border-customRenchGray h-56 rounded border p-2"
              onChange={updateForm}
              value={jobForm.description}
            ></textarea>
            <button
              className="post_job_button w-fit rounded bg-red-400 px-9 py-3"
              onClick={handlePostJob}
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
