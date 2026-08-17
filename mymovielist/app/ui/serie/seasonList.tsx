"use client";

import { GetSerieEpisodes, GetSerieById } from "@/app/lib/data";
import { Serie, SerieEpisode } from "@/app/lib/definitions";
import { useState, useEffect } from "react";

export default function SeasonList({ id }: { id: number }) {
  const [nbrSeason, setNbrSeason] = useState(1);
  const [seasons, setSeasons] = useState(1);
  const [episodes, setEpisodes] = useState(null);

  useEffect(() => {
    async function loadEpisodes(){
      try {
        const season = await GetSerieById(id);
        setNbrSeason(season.number_of_seasons);

        const episode = await GetSerieEpisodes(id, season);

      } catch (e) {}
    }
  })


  return (
    <div className="w-full border p-2">
      <div>
        <div className="flex flex-row-reverse">
          <select
            className="bg-violet-500 py-1 px-3 rounded-lg"
            name="season"
          >
            {Array.from({ length: 1 }, (_, index) => (
              <option className="bg-black" key={index} value={index + 1}>
                Season {index + 1}
              </option>
            ))}
            );
          </select>
        </div>
      </div>
      <div></div>
    </div>
  );
}

async function GetEpisodes(
  id: number,
  nbrSeason: number,
): Promise<SerieEpisode[]> {
  const Episodes = await GetSerieEpisodes(id, nbrSeason);

  return Episodes;
}

async function GetSerie(id: number): Promise<Serie>{
  const serie = await GetSerieById(id);

  return serie;
}