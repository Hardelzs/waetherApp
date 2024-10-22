import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { WiDayRainWind } from "react-icons/wi";
import { WiNightAltSnowWind } from "react-icons/wi";

const Weather = () => {


  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`

      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      

    } catch (error) {
      
    }
  }

  useEffect(()=>{
    search("London")
  },[])


  return (
    <div className="font-mono">
      <div className="flex items-center place-content-center p-10 gap-32">
      <input type="text" placeholder="Enter a city" className="w-128 h-10 p-4 rounded-full"/>
      <button className="bg-white p-3 items-center rounded-full"><FaSearch /></button>
      </div>

      <div className="flex place-content-center items-center mt-10">
        <div className="shadow-md rounded-md p-16 h-96">
          <div className="flex gap-52">
            <div>
            <IoIosSunny className="text-10xl text-center  text-yellow-300" />
            </div>

            <div className="grid gap-3 font-mono">
              <h1 className="text-2xl font-mono">Today</h1>
              <h1 className="text-5xl font-serif">New york</h1>
              <h1 className="text-2xl font-mono">Temperature: 17°c</h1>
              <h1 className="text-2xl font-mono">Clear sky</h1>
            </div>
          </div>

          <div className="flex mt-6 gap-10" >
            <div className=" w-40 items-center grid place-content-center text-center text-black font-mono font-medium rounded-3xl h-32 shadow-2xl">
              <h1>Wednesday</h1>
              <IoIosSunny className="text-7xl  text-yellow-300" />
              <h2 className="text-2xl">21°c</h2>
            </div>

            <div className=" w-40 items-center grid place-content-center text-center text-black font-mono font-medium rounded-3xl h-32 shadow-2xl">
              <h1>Thursday</h1>
              <WiDayRainWind className="text-7xl  text-blue-300" />
              <h2 className="text-2xl">23°c</h2>
            </div>

            <div className=" w-40 items-center grid place-content-center text-center text-black font-mono font-medium rounded-3xl h-32 shadow-2xl">
              <h1>Friday</h1>
              <WiNightAltSnowWind className="text-7xl  text-purple-300" />
              <h2 className="text-2xl">24°c</h2>
            </div>

            <div className=" w-40 items-center grid place-content-center text-center text-black font-mono font-medium rounded-3xl h-32 shadow-2xl">
              <h1>Saturday</h1>
              <IoIosSunny className="text-7xl  text-yellow-300" />
              <h2 className="text-2xl">21°c</h2>
            </div>


            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Weather