import { useState,useEffect } from "react";
import Card from "../../components/card/card";
import useAxios from "../../CustomHooks/useAxios";
import { useDropdownContext } from "../../CustomHooks/navContext";

export default function Home() {
  const dropdown = useDropdownContext();

  console.log(dropdown)

  return (
    <div className="container mx-auto min-h-screen">
      <div className="container relative mx-auto flex max-h-[100vh] h-[100vh] min-h-[100vh] w-full gap-28 overflow-scroll pt-6">
        <div className="job_wrapper border-customRenchGray flex h-[100%] min-h-[100%] w-[50%] justify-center overflow-scroll rounded-lg border pt-3">
          <div className="card-holder flex min-h-full w-[100%] flex-wrap justify-center px-2 xl:justify-between 2xl:w-[80%] 2xl:px-0">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="job_info_wrapper sticky top-0 min-h-full w-[50%] py-8">
          <div className="job_info_innerWrapper h-full rounded-lg border border-customRenchGray p-1 bg-white">
            <div className="job_info h-[30%] border-b bg-white px-3 pt-7">
              <div className="font-poppinsBold mb-3 text-3xl">
                Professional dog sitter
              </div>
              <div className="text-customRenchGray text-lg">New York, NY</div>
              <div className="text-customRenchGray text-lg">$24 per hour</div>
              <div className="ml-2 mt-1 text-lg underline">verified</div>
              <div className="flex justify-end px-7">
                <button className="text-customWhite rounded-md bg-blue-300 px-4 py-2">
                  Apply now
                </button>
              </div>
            </div>
            <div className="job_insight h-[70%] flex-grow bg-white px-3 pt-6">
              <h1 className="line- text-xl font-semibold">
                Full job description
              </h1>
              <h5 className="mt-5 leading-loose">
                Are you passionate about dogs? We're seeking a reliable and
                enthusiastic Professional Dog Sitter. Responsibilities include
                walking, feeding, playing, and providing companionship for dogs
                while their owners are away. You must ensure their safety and
                administer medications if needed. Experience with various breeds
                and strong communication skills are required. If you love dogs
                and are dedicated to excellent pet care, we'd love to hear from
                you!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
