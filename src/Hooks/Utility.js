import axios from "axios"


export const saveorupdateuser = async (userdata) => {


    const { data } = await axios.post('https://fin-track-backend-five.vercel.app/users', userdata)

    return data
}