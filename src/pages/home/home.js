import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import useAxios from "../../CustomHooks/useAxios";
import {
  useDropdownContext,
  useSearchbarContext,
} from "../../CustomHooks/navContext";
import moment from "moment/moment";
import Loading from "../../components/loading/loading";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [dropdownData, dropdownFunction] = useDropdownContext();
  const [searchbarData, searchbarFunction] = useSearchbarContext();
  const [cardData, setCardData] = useState([])
  const [cards, setCards] = useState([])
  const [activeCard, setActiveCard] = useState([])

  const navigate = useNavigate()

  //im only doing this to reset the local storage to fix the bug from the apply job

  useEffect(() => {
    if (localStorage.getItem('jobId') && localStorage.getItem('jobInfo')){
        localStorage.removeItem('jobId')
        localStorage.removeItem('jobInfo')
    }
  },[])


  const navbarData = {
    jobType: dropdownData.jobType.value,
    location: dropdownData.location.value,
    pay: dropdownData.pay.value,
    searchInput: searchbarData,
  };

  async function GetJobs(){
    const response = await useAxios('/getjobs', navbarData)
    setCardData(response.data.data)
}

  function generateCards(){
    let cards = cardData.map(info => {
      const id = info[0]
      const location = info[2]
      const title = info[3]
      const pay = info[5]
      const type = info[6]
      const date = moment(info[7]).format("MMMM Do YYYY");

      return (
        <Card key = {id} id = {id} location={location} title={title} pay={pay} type={type} date={date} onclick={manageActiveCard} active = {activeCard[0]} NavbarFilter = {navbarData}/>
      )
      
    })
    return cards
  }

  function manageActiveCard(event){
    const id = event.currentTarget.id
    let crd = cardData.filter((info) => info[0] === Number(id));
    crd = crd[0]
    setActiveCard(crd)
  }


  useEffect(() => {
    GetJobs()
  },[])
  
  useEffect(() => {
    setCards(generateCards())
  },[cardData, activeCard, dropdownData, searchbarData])

  useEffect(()=>{
    if (activeCard.length === 0 && cardData.length > 0) {
      setActiveCard(cardData[0]);
    }
  },[cardData])

  function handleApplyClick(event){
    const jobId = event.target.id
    navigate('/apply', { state: { jobId: jobId, jobInfo: activeCard }})
  }



  return (
    <div className="container mx-auto min-h-screen">
      <div className="container relative mx-auto flex h-[100vh] max-h-[100vh] min-h-[100vh] w-full gap-28 overflow-scroll pt-6">
        <div className="job_wrapper border-customRenchGray flex h-[100%] min-h-[100%] w-[50%] justify-center overflow-scroll rounded-lg border pt-3">
          <div className="card-holder flex min-h-full w-[100%] flex-wrap justify-center px-2 xl:justify-between 2xl:w-[80%] 2xl:px-0">
            {cards.length > 0 ? cards : <Loading />}
          </div>
        </div>
        <div className="job_info_wrapper sticky top-0 min-h-full w-[50%] py-8">
          <div className="job_info_innerWrapper border-customRenchGray h-full rounded-lg border bg-white p-1">
            {activeCard.length > 0 ? (
              <div className="job_info h-[30%] border-b bg-white px-3 pt-7">
                <div className="font-poppinsBold mb-3 text-3xl">
                  {activeCard[3]}
                </div>
                <div className="text-customRenchGray text-lg">
                  {activeCard[2]}
                </div>
                <div className="text-customRenchGray text-lg">
                  ${activeCard[5]} per hour
                </div>
                <div className="ml-2 mt-1 text-lg underline">verified</div>
                <div className="flex justify-end px-7">
                  <button
                    className="text-customWhite rounded-md bg-blue-300 px-4 py-2"
                    id={activeCard[0]}
                    onClick={handleApplyClick}
                  >
                    Apply now
                  </button>
                </div>
              </div>
            ) : (
              <Loading />
            )}
            {activeCard.length > 0 ? (
              <div className="job_insight h-[70%] flex-grow bg-white px-3 pt-6">
                <h1 className="line- text-xl font-semibold">
                  Full job description
                </h1>
                <h5 className="mt-5 leading-loose">{activeCard[4]}</h5>
              </div>
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
