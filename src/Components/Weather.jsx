import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { WiDayRainWind } from "react-icons/wi";
import { WiNightAltSnowWind } from "react-icons/wi";
import { MdSunny } from "react-icons/md";
import { IoPartlySunny } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { FaCloud } from "react-icons/fa";
import { FaCloudMoon } from "react-icons/fa6";
import { FaCloudSunRain } from "react-icons/fa6";
import { FaCloudMoonRain } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { IoRainyOutline } from "react-icons/io5";
import { WiStrongWind } from "react-icons/wi";
import { TbTemperature } from "react-icons/tb";
import { FaWater } from "react-icons/fa";

const Weather = () => {
  const inputRef = useRef();

  const [weatherData, setWeatherData] = useState(false);

  const allIcons = {
    "01d": <IoIosSunny/>,
    "01n": <MdSunny/>,
    "02d":  <IoPartlySunnyOutline />,
    "02n":  <IoPartlySunny />,
    "03d":  <CiCloudOn />,
    "03n":  <FaCloud />,
    "04d": <FaCloudMoon />,
    "04n": <FaCloudMoon />,
    "09d": <IoRainyOutline />,
    "09n": <IoRainyOutline />,
    "10n": <FaCloudMoonRain />,
    "10d": <FaCloudSunRain />,
    "13d": <FaRegSnowflake />,
    "13n": <FaRegSnowflake />,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter city Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      const icon = allIcons[data.weather[0].icon] || IoIosSunny;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather Data");
    }
  };

  useEffect(() => {
    search("Ibadan");
  }, []);

  return (
    <div className="font-mono">
      <div className="flex items-center place-content-center p-10 gap-32">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a city"
          className="w-128 h-10 p-4 rounded-full"
        />
        <button
          onClick={() => search(inputRef.current.value)}
          className="bg-white p-3 items-center rounded-full"
        >
          <FaSearch />
        </button>
      </div>

      {weatherData ? (
        <>
          <div className="flex place-content-center items-center mt-10">
            <div className="shadow-md rounded-md p-16 h-96">
              <div className="flex gap-52">
                <div>
                  <p className="text-10xl text-center  text-yellow-300">
                    {weatherData.icon}
                  </p>
                </div>

                <div className="grid gap-3 font-mono">
                  <h1 className="text-2xl font-mono">Today</h1>
                  <h1 className="text-5xl font-serif">
                    {weatherData.location}
                  </h1>
                  <h1 className="text-2xl font-mono flex items-center gap-2">
                    Temperature: {weatherData.temperature}°C <TbTemperature />
                  </h1>
                  <h1 className="text-2xl font-mono flex items-center gap-2">
                    humidity: {weatherData.humidity}% <FaWater />
                  </h1>
                  <h1 className="text-2xl font-mono flex items-center gap-2">
                    wind: {weatherData.windSpeed}km/h <WiStrongWind />
                  </h1>
                </div>
              </div>

              <div className="flex mt-6 gap-10">
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
