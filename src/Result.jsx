function Result({ Weather }) {
  const { main, weather } = Weather;
  console.log("weather", weather);

  console.log("main:", main);
  const { pressure, temp, temp_max, temp_min } = main;
  let { description } = weather;
  console.log("presure", pressure);
  return (
    <div className="flex  flex-col">
      <h1>{pressure}</h1>
      <h1>{temp}</h1>
      <h1>{temp_max}</h1>
      <h1>{temp_min}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default Result;
