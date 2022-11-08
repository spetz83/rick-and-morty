import { useEpisodes } from "../../hooks/episode";
import { Episode } from "../../models/episode";

export default function Episodes() {
  const { data, error, isLoading } = useEpisodes();
  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-3 p-6 min-h-screen">
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        data?.results.map((episode: Episode) => (
          <div className="flex flex-col justify-between bg-outerSpace-900 border-2 border-springGreen-900 text-springGreen-900 p-4 rounded-3xl">
            <h4 className="text-xs uppercase font-semibold">{`${episode.getSeason()} : ${episode.getEpisodeNumber()}`}</h4>
            <h3 className="text-3xl my-4 font-bold text-center">
              {episode.name}
            </h3>
            <p className="text-lg font-semibold text-center">
              <span className="font-bold text-xl">Originally aired:</span>{" "}
              {episode.air_date}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
