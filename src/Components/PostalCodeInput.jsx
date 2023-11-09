// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { clearData , setLocationData , setCode } from "../Services/PostalSlice";

// const PostalCodeInput = () => {



// const dispatch = useDispatch();

//  const [postalCode, setPostalCode] = useState("");

// const handlePostal = (e) =>{
//     const result = e.target.value.replace(/\D/g, "");

//     setPostalCode(result);
// }

// const handleSubmit = async (e) =>{

// e.preventDefault();




// const options = {
//   method: 'GET',
//   url: `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${postalCode}`,
//   headers: {
//     'X-RapidAPI-Key': 'a21e3241bfmsh0e4280df0a76fbfp105466jsn520ab027509b',
//     'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
//     dispatch(setCode(postalCode));
//     dispatch(setLocationData(response.data));
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


// };



// const handleClear = () => {
//     dispatch(clearData()); 
//     setPostalCode("");
//   }


//   return (
//     <div className="">
//         <form className="flex flex-col mt-10 w-full " onSubmit={handleSubmit}>
        //     <input className="p-5 border-gray-500  bg-white text-black " type="text" placeholder="Postal Code" value={postalCode} onChange={handlePostal} />
        //    <div className="my-4 flex items-center gap-10"> 
        //    <button type="submit" className="flex flex-col bg-green-500 rounded p-5 mt-5 text-black" >Submit</button> 
        //     <button type="submit" className="flex flex-col bg-green-500 rounded p-5 mt-5 text-black "  onClick={handleClear}>Clear</button>
        //    </div>
//         </form>
    
      
//     </div>
//   )
// }

// export default PostalCodeInput


import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { clearData, setLocationData, setCode } from "../Services/PostalSlice";
import loader from '../assets/loader.svg';

const PostalCodeInput = () => {
  const dispatch = useDispatch();
  const [postalCode, setPostalCode] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handlePostal = (e) => {
    const result = e.target.value.replace(/\D/g, "");
    setPostalCode(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(clearData());
    setIsLoading(true); // Set loading state

//     const options = {
//   method: 'GET',
//   url: `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${postalCode}`,
//   headers: {
//     'X-RapidAPI-Key': 'a21e3241bfmsh0e4280df0a76fbfp105466jsn520ab027509b',
//     'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
//   }
// };

// const options = {
//   method: 'GET',
//   url: `https://api.zippopotam.us/country/${postalCode}`,
  
// };



    try {
      const response = await axios.request(`https://api.zippopotam.us/IN/${postalCode}`);

      const array = response.data;
      dispatch(setCode(postalCode));
      dispatch(setLocationData(array));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false); // Set loading state back to false
    }
  };

  const handleClear = () => {
    dispatch(clearData());
    setPostalCode("");
  };

  return (
    <div className="">
      {isLoading ? ( // Check if data is loading
             <img src={loader} alt="Loading..." />
      ) : (
        <form className="flex flex-col mt-10 w-full " onSubmit={handleSubmit}>
           <input className="p-5 border-gray-500  bg-white text-black " type="text" placeholder="Postal Code" value={postalCode} onChange={handlePostal} />
           <div className="my-4 flex items-center justify-between"> 
           <button type="submit" className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group' ><span className="w-48 h-48 rounded rotate-[-40deg] bg-red-960 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span> 
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Submit</span></button>

            <button className=' relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group' onClick={handleClear}><span className="w-48 h-48 rounded rotate-[-40deg] bg-[#6469ff] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Clear</span></button>
           </div>
        </form>
      )}
    </div>
  );
};

export default PostalCodeInput;
