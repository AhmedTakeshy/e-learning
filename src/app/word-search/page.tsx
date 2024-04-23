import Exercises from "../_components/exercises";

type Props = {
    searchParams: {
        [key: string]: string | string | undefined;
    }
}

export default function page({ searchParams }: Props) {
    const chosenExercise = searchParams.exercise as string;
    const wordSearches = [
        {
            id: 1,
            link: "https://wordwall.net/embed/ac16566a5fcc4fac9cfc08568965df44?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/ac16566a5fcc4fac9cfc08568965df44_0",
            title: "Family members",
        },
        {
            id: 2,
            link: "https://wordwall.net/embed/76417fc42b054ca5b15f194300143e42?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/76417fc42b054ca5b15f194300143e42_1",
            title: "Adventures",
        },
        {
            id: 3,
            link: "https://wordwall.net/embed/a20e5f3a0a67499780e648af542c271b?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/a20e5f3a0a67499780e648af542c271b_2",
            title: "Body parts",
        },
        {
            id: 4,
            link: "https://wordwall.net/embed/2948a3bc33a145598b9268082dfdd121?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/2948a3bc33a145598b9268082dfdd121_3",
            title: "Weather and emotions",
        },
        {
            id: 5,
            link: "https://wordwall.net/embed/a6ae75a2e54f42cd860c51005b1a5726?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/a6ae75a2e54f42cd860c51005b1a5726_4",
            title: "Clothes and fashion",
        },
        {
            id: 6,
            link: "https://wordwall.net/embed/f3edb1d67dbf4d9187080def0fe8ccaa?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/f3edb1d67dbf4d9187080def0fe8ccaa_0",
            title: "Stuff in the kitchen",
        },
        {
            id: 7,
            link: "https://wordwall.net/embed/f1a1865760384139a4c2af6877f91587?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/f1a1865760384139a4c2af6877f91587_0",
            title: "Food",
        },
        {
            id: 8,
            link: "https://wordwall.net/embed/39947e1e2015436b98e6aa48edf2e5a7?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/39947e1e2015436b98e6aa48edf2e5a7_45",
            title: "Animals",
        },
        {
            id: 9,
            link: "https://wordwall.net/embed/7f0d1fea9b554364b339993debbdb1f1?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/7f0d1fea9b554364b339993debbdb1f1_0",
            title: "Months",
        },
        {
            id: 10,
            link: "https://wordwall.net/embed/cb70a137c7aa46cf9bcef9059a07dd76?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/cb70a137c7aa46cf9bcef9059a07dd76_0",
            title: "Jobs",
        },
        {
            id: 11,
            link: "https://wordwall.net/embed/ecbe563bc3314923b2ab40e13320bc28?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/ecbe563bc3314923b2ab40e13320bc28_0",
            title: "sports",
        },
        {
            id: 12,
            link: "https://wordwall.net/embed/cc30e7e5f3d5405fa90294af7928dfd3?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/cc30e7e5f3d5405fa90294af7928dfd3_0",
            title: "Present perfect tense verbs",
        },

        {
            id: 13,
            link: "https://wordwall.net/embed/6c2ae14b34934e22affa583a2681e1b3?themeId=2&templateId=10&fontStackId=0",
            imgSrc: "https://wordwallscreens.azureedge.net/200/6c2ae14b34934e22affa583a2681e1b3_0",
            title: "Irregular verbs",
        },
    ]
    return (
        <Exercises
            exercises={wordSearches}
            sectionId="word-searches"
            title="Welcome to the word search page."
            subText="Choose a word search game from the list below to get started."
            chosenExercise={chosenExercise}
        />
    )
}

