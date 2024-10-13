import { NextResponse } from 'next/server';

/* export async function GET() {
  const fetchData = await fetch(
    `${process.env.WEATHER_API_URL}?q=Odesa&appid=${process.env.WEATHER_APPID}`
  );
  const data = await fetchData.json();

  return NextResponse.json({ status: 200, data });
} */

const { WEATHER_API_URL, WEATHER_APPID } = process.env;

export async function GET(/* req: Request */) {
  const geocodingQueryParams = new URLSearchParams({
    q: 'Kyiv',
    // limit: '5',
    appid: WEATHER_APPID || '',
  });
  const geocodingData = await fetch(
    `${WEATHER_API_URL}/geo/1.0/direct?${geocodingQueryParams}`
  );
  const geocoding = await geocodingData.json();
  const { lat, lon /* , name, local_names, country */ } = geocoding[0];

  const weatherDataParams = new URLSearchParams({
    lat,
    q: 'Kyiv',
    lon,
    appid: WEATHER_APPID || '',
    units: 'metric',
    lang: 'uk',
  });
  const weatherData = await fetch(
    `${WEATHER_API_URL}/data/2.5/weather?${weatherDataParams}`
  );
  const weather = await weatherData.json();

  const forecastDataParams = new URLSearchParams({
    q: 'Kyiv',
    lat,
    lon,
    appid: WEATHER_APPID || '',
    units: 'metric',
    lang: 'uk',
  });
  const forecastData = await fetch(
    `${WEATHER_API_URL}/data/2.5/forecast?${forecastDataParams}`
  );
  const forecast = await forecastData.json();

  //api.openweathermap.org/data/2.5/forecast?appid={{my_appid}}&units=metric&lang=uk&lat=50.4500336&lon=30.5241361

  /* fetch('https://api.poeditor.com/v2/projects/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      api_token: 'ac77ebb10c02836e4497dcea6984d94d',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error('Error:', error));
  const fetchData = await fetch(
    `https://api.poeditor.com/v2/projects/list?api_token=ac77ebb10c02836e4497dcea6984d94d`
  ); */

  // Нажаль на поточний час прогноз погоди не доступний

  return NextResponse.json({ status: 200, data: { weather, forecast } });
}
