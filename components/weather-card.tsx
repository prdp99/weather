import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import SearchBar from "./search-bar";
import WeatherIcon from "./weather-icon";

interface WeatherData {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        windchill_c: number;
        windchill_f: number;
        heatindex_c: number;
        heatindex_f: number;
        dewpoint_c: number;
        dewpoint_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    };
}


interface WeatherCardProps {
    data: WeatherData
}

export default function WeatherCard({
    data,
}: WeatherCardProps) {


    const today = new Date();
    const td = today.getDay();
    const date = today.getDate();
    const month = today.getMonth();
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    function getMonth() {
        return months[month - 1];
    }
    function getToday() {
        for (let i = 0; i < week.length; i++) {
            if (i === td) {
                return week[i];
            }
        }
    }
    const day = getToday();
    const thisMonth = getMonth();

    return (
        <Card className="w-full max-w-md overflow-hidden backdrop-blur-xs bg-white/0 border-white/10 shadow-xl rounded-4xl">
            <CardContent className="p-0">
                <div className="relative h-full w-full">
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 z-0"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Search bar */}
                        <SearchBar />

                        {/* Weather information */}
                        <div className="flex flex-col items-center justify-center p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <MapPin />
                                <span className="text-xl font-bold  "
                                    style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
                                >{data?.location?.name}</span>
                            </div>

                            <div className="my-4">
                                <WeatherIcon condition={data?.current?.condition?.text} className="h-32 w-32 mx-auto" />
                            </div>

                            <p className="text-lg opacity-90 mb-2">{data?.current?.condition?.text}</p>

                            <h1 className="text-7xl font-light mb-2">{data?.current?.temp_c}°</h1>

                            <p className="text-lg mb-8">
                                {day}, {date} {thisMonth}
                            </p>

                            {/* Weather details */}
                            <div className="grid grid-cols-3 gap-6 w-full bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                                <div className="flex flex-col items-center">
                                    <p className="text-xl font-medium">{data?.current?.wind_mph}</p>
                                    <p className="text-sm opacity-80">km/h</p>
                                    <p className="text-xs mt-1 opacity-70">Wind</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-xl font-medium">{data?.current?.humidity}</p>
                                    <p className="text-sm opacity-80">%</p>
                                    <p className="text-xs mt-1 opacity-70">Humidity</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    <p className="text-xl font-medium">{data?.current?.uv}</p>
                                    <p className="text-sm opacity-80">index</p>
                                    <p className="text-xs mt-1 opacity-70">UV</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
