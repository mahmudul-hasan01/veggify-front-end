import axios from "axios";

const useAxiosPublic = () => {
   const axiosPublic = axios.create({
      //  baseURL: 'http://localhost:5000'
      baseURL: 'https://veggify-back-end.vercel.app'
   })
   return axiosPublic
};

export default useAxiosPublic;