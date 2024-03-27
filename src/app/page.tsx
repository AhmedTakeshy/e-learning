import Banner from "./_components/banner";
import MapPreview from "./_components/mapPreview";
import MusicPlayer from "./_components/musicPlayer";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full gap-8">
      <Banner />
      <MapPreview />
      <MusicPlayer />
    </div>
  );
}
