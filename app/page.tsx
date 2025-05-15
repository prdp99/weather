import { fetchWeatherData } from "@/actions/weather"
import WeatherCard from "@/components/weather-card"

type searchParams = Promise<{ q: string }>

export default async function Home(props: { searchParams: searchParams }) {

  const searchParams = await props.searchParams
  const query =  searchParams?.q

  const weatherData = await fetchWeatherData(query || 'Kathmandu')

  return (
    <main className="min-h-screen flex items-center justify-center  p-4">
      <WeatherCard data={weatherData} />
    </main>
  )
}
