import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAxios from "../../CustomHooks/useAxios";
import PostedJobProfileCard from "../../components/postedJobsProfileCard/postedJobProfileCard";

function ApplicantCards({ name, email, phone, description, isActive }) {
  return (
    <>
      <div className="application w-full rounded bg-gray-200 p-4">
        <h1 className="font-poppinsBold text-center">{name}</h1>
        <h4 className="font-">Email: {email}</h4>
        <h5 className="">Phone Number: {phone}</h5>
        <h6 className="">Description: {description}</h6>
      </div>
    </>
  );
}

export default function Profile() {
  const [applicants, setApplicants] = useState([]);
  const [postedJobs, setPostedJobs] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [applicantCard, setApplicantCards] = useState([]);

  async function GetApplicants() {
    const response = await useAxios("/applicants", []);
    const groupedJobs = {};

    response.data.data.forEach((job) => {
      const jobId = job[0]; // Assuming job_id is the first element

      // If the job_id doesn't exist in the dictionary, create an empty array
      if (!groupedJobs[jobId]) {
        groupedJobs[jobId] = [];
      }

      // Add the job entry to the corresponding job_id array
      groupedJobs[jobId].push(job);
    });

    setApplicants(groupedJobs);
    renderPostedJobs(groupedJobs);
  }

  function handleSelect(e) {
    const itemID = e.currentTarget.getAttribute("data-id");
    setActiveCard(itemID);
  }

  function generateApplicantCards() {
    const cards = applicants[activeCard]?.map((card) => {
      return (
        <ApplicantCards
          key={card[12]}
          name={card[8]}
          email={card[9]}
          phone={card[10]}
          description={card[11]}
        />
      );
    });
    setApplicantCards(cards);
  }

  function renderPostedJobs(groupedJobs) {
    const holder = [];
    Object.keys(groupedJobs).forEach((jobId) => {
      let filtered = [
        groupedJobs[jobId][0][0],
        groupedJobs[jobId][0][1],
        groupedJobs[jobId][0][3],
        groupedJobs[jobId][0][4],
        groupedJobs[jobId][0][11],
      ];
      holder.push(filtered);
    });
    console.log(groupedJobs);

    const cards = holder.map((item) => (
      <PostedJobProfileCard
        key={item[0]}
        id={item[0]}
        title={item[1]}
        date={item[6]}
        location={item[2]}
        pay={item[3]}
        onClick={handleSelect}
        isActive={activeCard}
      />
    ));
    console.log();
    console.log("activeCard", activeCard);
    setPostedJobs(cards);
  }

  useEffect(() => {
    GetApplicants();
  }, [activeCard]);

  useEffect(() => {
    generateApplicantCards();
  }, [activeCard]);

  return (
    <>
      <div className="Profile-navbar border-customDark relative flex h-[7vh] items-center justify-center border-b px-3 lg:px-6">
        <Link to="/" className="absolute">
          <FontAwesomeIcon icon={faArrowLeft} className="text-customDark" />
        </Link>
      </div>
      <div className="profile-body container mx-auto flex h-[93vh] gap-8 py-2">
        <section className="left h-full w-[35%] overflow-scroll rounded-xl bg-gray-50 px-2 py-4">
          <div className="font-poppinsBold mb-6 text-center text-3xl">
            welcome Sophia Robinson
          </div>
          <div className="posted-jobs mb-6 flex flex-col items-center rounded bg-gray-200 py-2">
            <h1 className="text-customRenchGray mb-2">Posted Jobs</h1>
            <div className="posted-jobs flex w-full flex-col items-center gap-4">
              {postedJobs}
            </div>
          </div>
          <div className="applied-jobs flex flex-col items-center rounded bg-gray-200 py-2">
            <h1 className="text-customRenchGray mb-2">Jobs Applied To</h1>
            <div className="posted-jobs flex w-full flex-col items-center gap-4">
              <div className="h-40 w-[85%] rounded-lg border border-black transition duration-300 ease-in-out hover:scale-105">
                <div className="dash-job-title font-poppinsBold mb-5 pt-1 text-center text-xl">
                  dog sitter
                </div>
                <div className="text-center">July 13th 2024</div>
                <div className="text-center">New York, NY</div>
                <div className="pt-5 text-center text-xs">$13-16 /hr</div>
              </div>
              <div className="h-40 w-[85%] rounded-lg border border-black transition duration-300 ease-in-out hover:scale-105">
                <div className="dash-job-title font-poppinsBold mb-5 pt-1 text-center text-xl">
                  dog sitter
                </div>
                <div className="text-center">July 13th 2024</div>
                <div className="text-center">New York, NY</div>
                <div className="pt-5 text-center text-xs">$13-16 /hr</div>
              </div>
              <div className="h-40 w-[85%] rounded-lg border border-black transition duration-300 ease-in-out hover:scale-105">
                <div className="dash-job-title font-poppinsBold mb-5 pt-1 text-center text-xl">
                  dog sitter
                </div>
                <div className="text-center">July 13th 2024</div>
                <div className="text-center">New York, NY</div>
                <div className="pt-5 text-center text-xs">$13-16 /hr</div>
              </div>
            </div>
          </div>
        </section>

        <section className="right flex h-full max-h-full max-w-[60%] flex-grow flex-col items-center overflow-scroll">
          <div className="applicants my-10 flex h-full w-[85%] flex-col gap-2 overflow-scroll rounded-xl bg-gray-50 p-2">
            <h1 className="text-center">Applicants</h1>

            {applicantCard}
          </div>
        </section>
      </div>
    </>
  );
}
