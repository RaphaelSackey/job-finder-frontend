import Axios from "../api/axios";

export default async function useAxios(request_path, request_data){
    let refreshTried = false
    // console.log('in custom hook')
    let final_result;
    if(request_path && request_data){
        final_result = await MakeRequest()
    }

    async function MakeRequest(){
            // console.log("making a request");
            let refreshSuccess;
            try {
              const access_token = localStorage.getItem("access_token");
              const axios = Axios();
              const results = await axios.post(request_path, request_data, {
                headers: { Authorization: `Bearer ${access_token}` },
              });
            //   console.log('retuning data')
              return results;
            } catch (e) {
                // console.log('i have to refresh token, access token expired ')
                if(!refreshTried){
                    refreshSuccess = await RefreshToken();
                    refreshTried = true
                }else{
                    refreshSuccess = false
                }
              
            //   console.log("done waiting for refreshToken");
              if (refreshSuccess){
                // console.log('making new request with new access token')
                return await MakeRequest()
              }

            }

    }

  async function RefreshToken(){
    // console.log('refreshing token')
    const refresh_token = localStorage.getItem('refresh_token')
    const axios = Axios()
    try{
      const response =  await axios.post('/refreshToken',{}, {headers: {Authorization: `Bearer ${refresh_token}`}})
      const new_access_token = response.data.access_token; 
      localStorage.setItem("access_token", new_access_token);
    //   console.log('token refreshed success')
      return true;
    }catch (e) {
        // console.log('refresh token has also expired')
        return false
    }finally{
      console.clear()
    }
  }

//   console.log('returning result')
  return final_result
}

