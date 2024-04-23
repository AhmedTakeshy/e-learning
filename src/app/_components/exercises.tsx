import Link from 'next/link';
import Image from 'next/image';

type ExercisesProps = {
  exercises: {
    id: number;
    link: string;
    imgSrc: string;
    title: string;
  }[],
  sectionId: string,
  title: string,
  chosenExercise: string
  subText: string
}
export default function Exercises({ exercises, sectionId, title, chosenExercise, subText }: ExercisesProps) {
  return (
    <section id={`${sectionId}`} className="flex flex-col mt-12 container mx-auto">
      <h2 className="font-semibold text-5xl text-center mt-20">
        {title}
      </h2>
      {chosenExercise ? (
        <div className="flex justify-center items-center gap-1 flex-col my-20">
          <iframe
            src={exercises[Number(chosenExercise.split("-")[1]) - 1].link}
            className="rounded-lg lg:w-2/4 sm:w-3/4 h-[26rem] m-4"
            allowFullScreen
          />
          <Link
            href="/quiz"
            className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:tracking-widest transition-all duration-500 w-2/4 text-center hover:bg-slate-600"
          >
            Back to exercises
          </Link>
        </div>
      ) : (
        <p className="mb-12 mt-4 text-xl text-center">
          {subText}
        </p>

      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-x-5 gap-y-9 mt-12">
        {exercises.map((exercise) => (
          <Link
            key={exercise.id}
            href={{
              query: {
                exercise: `${exercise.title}-${exercise.id}`
              }
            }}
            className="dark:bg-white bg-slate-200 shadow-lg hover:-translate-y-8 transition-transform duration-500 rounded-xl p-2 flex justify-center items-center flex-col"
          >
            <Image src={exercise.imgSrc} alt="Quiz" className="object-cover rounded-lg" width={320} height={200} />
            <p className="p-4 text-slate-700 font-bold text-lg">
              {exercise.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
