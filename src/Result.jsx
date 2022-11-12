function Result({ Weather }) {
  const { main, name } = Weather;
  const { pressure, temp, temp_max, temp_min } = main;

  return (
    <div className="flex  px-4 flex-col items-end ">
      <h1 className="font-bold bg-gray-100 p-2 rounded-md">
        CITY NAME = {name}
      </h1>
      <h1 className="font-bold bg-gray-100 p-2 rounded-md">
        PRESSURE = {pressure}
      </h1>
      <h1 className="font-bold bg-gray-100 p-2 rounded-md">TEMP = {temp}</h1>
      <h1 className="font-bold bg-gray-100 p-2 rounded-md">
        TEMPRATURE MAX = {temp_max}
      </h1>
      <h1 className="font-bold bg-gray-100 p-2 rounded-md">
        TEMPRATURE MIN = {temp_min}
      </h1>
    </div>
  );
}

export default Result;
