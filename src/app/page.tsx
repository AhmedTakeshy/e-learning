import Banner from "./_components/banner";
import Contact from "./_components/contact";
import GameSection from "./_components/gameSection";
import MapPreview from "./_components/mapPreview";

type Props = {
  searchParams: { [key: string]: string | undefined }
};

export default function Home({ searchParams }: Props) {
  let level: string | undefined = undefined;
  level = searchParams.level === "A1-A2" ? "easy" : searchParams.level === "B1-B2" ? "hard" : undefined;


  return (
    <div className="flex flex-col items-center w-full ">
      <Banner />
      <MapPreview />
      <GameSection level={level} />
      <Contact />
    </div>
  );
}
