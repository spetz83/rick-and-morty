import { PayloadInfo } from "./payload";

export type EpisodesResponse = {
  info: PayloadInfo;
  results: Episode[];
};

export class Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;

  constructor(
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
  ) {
    this.id = id;
    this.name = name;
    this.air_date = air_date;
    this.episode = episode;
    this.characters = characters;
    this.url = url;
    this.created = created;
  }

  static FromJson(data: any): Episode {
    return new Episode(
      data.id,
      data.name,
      data.air_date,
      data.episode,
      data.characters,
      data.url,
      data.created
    );
  }

  getSeason(): string {
    const parts = this.episode.split("E");
    let season = parts[0].split("S")[1];
    // Seems sorta janky, but rolling with it for now
    if (season[0] === "0") {
      season = `Season ${season[1]}`;
    } else {
      season = `Season ${season}`;
    }
    return season;
  }

  getEpisodeNumber(): string {
    const parts = this.episode.split("E");
    console.log("DERP", parts);
    let episode = parts[1];
    let episodeString = episode;
    // Seems sorta janky, but rolling with it for now
    if (episode[0] === "0") {
      episodeString = episode[1];
    }
    episode = `Episode ${episodeString}`;
    return episode;
  }
}
