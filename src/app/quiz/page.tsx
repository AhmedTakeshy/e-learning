import Exercises from "../_components/exercises";

type Props = {
    searchParams: {
        [key: string]: string | string | undefined;
    }
}

export default function page({ searchParams }: Props) {
    const chosenExercise = searchParams.exercise as string;
    const quizzes = [
        {
            id: 1,
            link: "https://wordwall.net/embed/b016c497e8674cfbb114e7bbbf7d2ce4?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/b016c497e8674cfbb114e7bbbf7d2ce4_0",
            title: "comparative and superlative exercise",
        },
        {
            id: 2,
            link: "https://wordwall.net/embed/a1e384f3d8f34ce48c95a088011eef5b?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/a1e384f3d8f34ce48c95a088011eef5b_0",
            title: "Comparative adjectives exercise",
        },
        {
            id: 3,
            link: "https://wordwall.net/embed/4c139e2855ab427eb89707a28d76ae24?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/4c139e2855ab427eb89707a28d76ae24_0",
            title: "Weather and emotions exercise",
        },
        {
            id: 4,
            link: "https://wordwall.net/embed/0ab2be67bfd142f1bece0ae21e07dbe8?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/0ab2be67bfd142f1bece0ae21e07dbe8_0",
            title: "Will/be going to exercise",
        },
        {
            id: 5,
            link: "https://wordwall.net/embed/03d3433af47840ad8d795b6dad89eb3d?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/03d3433af47840ad8d795b6dad89eb3d_45",
            title: "Past continues exercise",
        },
        {
            id: 6,
            link: "https://wordwall.net/embed/f07dbf6af2d94b1484f2a9ad0b2c5858?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/f07dbf6af2d94b1484f2a9ad0b2c5858_6",
            title: "What time is it? exercise",
        },
        {
            id: 7,
            link: "https://wordwall.net/embed/e489541d923f4d209b20eeec5625d850?themeId=2&templateId=5&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/e489541d923f4d209b20eeec5625d850_0",
            title: "Tourism vocabulary exercise",
        }

    ]


    return (
        <Exercises
            exercises={quizzes}
            sectionId="quizzes"
            title="Welcome to the quizzes page."
            subText="Choose a quiz from the list below to get started."
            chosenExercise={chosenExercise}
        />
    )
}

