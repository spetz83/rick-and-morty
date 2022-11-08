import { useQuery } from "@tanstack/react-query";
import { Episode, EpisodesResponse } from "../models/episode";

function useEpisodes() {
  return useQuery({
    queryKey: ["episodes"],
    queryFn: (): Promise<EpisodesResponse> =>
      fetch("https://rickandmortyapi.com/api/episode").then(response =>
        response.json()
      ),
    select: data => {
      const obj: EpisodesResponse = {
        info: data.info,
        results: data.results.map(episode => Episode.FromJson(episode)),
      };
      return obj;
    },
  });
}

export { useEpisodes };
