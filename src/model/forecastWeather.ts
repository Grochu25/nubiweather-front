import { Condition } from "./condition";
import { CurrentWeather } from "./currentWeather";

export interface ForecastWeather {
  city: string;
  country: string;
  forecast: Forecast[];
}

export interface Forecast {
  date: string;
  day: DayForecast;
  hours: HourForecast[];
}

interface DayForecast {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
}

interface HourForecast
  extends Omit<CurrentWeather, "dataCollectTime" | "city" | "country"> {
  time: Date;
  snow_cm: number;
  will_it_rain: 0;
  chance_of_rain: 0;
  will_it_snow: 0;
  chance_of_snow: 0;
}
