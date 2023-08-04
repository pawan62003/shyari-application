import axios from "axios"

export  const  fetchData = async (keyword) => {
    const data = await axios.get(`https://shayari-app-yb1r.onrender.com/shayari?keyword=${keyword}`)
    .then(res => res.data)
    return data
}