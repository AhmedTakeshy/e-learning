import Exercises from "../_components/exercises";

type Props = {
    searchParams: {
        [key: string]: string | string | undefined;
    }
}

export default function page({ searchParams }: Props) {
    const chosenExercise = searchParams.exercise as string;
    const crossword = [
        {
            id: 1,
            link: "https://wordwall.net/embed/8264c41c0a64474298778ad6d09f3f35?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/8264c41c0a64474298778ad6d09f3f35_4",
            title: "Comparative and superlative adjectives",
        },
        {
            id: 2,
            link: "https://wordwall.net/embed/afb742374acb4929a2db725cccc06825?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/afb742374acb4929a2db725cccc06825_0",
            title: "Weather and emotions",
        },
        {
            id: 3,
            link: "https://wordwall.net/embed/98c217fc068049b5a5760d260e4710fc?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/98c217fc068049b5a5760d260e4710fc_3",
            title: "Objects and prepositions",
        },
        {
            id: 4,
            link: "https://wordwall.net/embed/559fa2e9e56d47abb234890ee7d8e34f?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/559fa2e9e56d47abb234890ee7d8e34f_0",
            title: "English puzzle",
        },
        {
            id: 5,
            link: "https://wordwall.net/embed/2b8579de612d49b69edafe27c83ab2e0?themeId=2&templateId=11&fontStackId=12",
            imgSrc: "https://wordwallscreens.azureedge.net/200/2b8579de612d49b69edafe27c83ab2e0_46",
            title: "English puzzle 2",
        },
        {
            id: 6,
            link: "https://wordwall.net/embed/7d67ec586fff449a9e6dbb09a91083f8?themeId=2&templateId=11&fontStackId=21",
            imgSrc: "https://wordwallscreens.azureedge.net/200/7d67ec586fff449a9e6dbb09a91083f8_3",
            title: "Days of the week",
        },
        {
            id: 7,
            link: "https://wordwall.net/embed/04b2722bdcc34daf8e1a50acde69286d?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/04b2722bdcc34daf8e1a50acde69286d_0",
            title: "Sports",
        },
        {
            id: 8,
            link: "https://wordwall.net/embed/11e1393e3d0e44639bc728ce2eda290a?themeId=2&templateId=11&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/11e1393e3d0e44639bc728ce2eda290a_55",
            title: "Jobs and services",
        },
    ]
    return (
        <Exercises
            exercises={crossword}
            sectionId="crossword-puzzle"
            title="Welcome to the crossword puzzle page."
            subText="Choose a crossword puzzle game from the list below to get started."
            chosenExercise={chosenExercise}
        />
    )
}

