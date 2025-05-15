'use server'

import { revalidatePath } from "next/cache";

const key = process.env.API_KEY;

if(!key) throw new Error('API key not found')

export const fetchWeatherData = async (search:string) => {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${search}&aqi=no`)
        .then((response) => response.json())
        .catch((err) => console.error(err));
}


export const searchPlace = async (place:string) => {
    fetchWeatherData(place)
    revalidatePath('/')
    return
}
