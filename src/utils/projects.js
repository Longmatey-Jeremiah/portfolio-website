// import { KOTAGE_EDIT, KOTAGE_HOME, KOTAGE_SOURCE, ACACIA, PAPPERMAP_2, ACACIA_WEB } from './cachedImages';

export const projects = [
    {
        id: 1,
        title: "Acacia",
        description: "Acacia web app is the web version of the Acacia mobile app developed with react, chakra-ui and typescript. Like the mobile app Clients can browse frequent health recommendations, receive water consumption reminders, track prescriptions straight from the hospital, report complaints in a chat forum, or talk directly with Dr. Cacia.",
        image: '/images/acaciaWeb.png',
        link: "https://acaciaweb.symliq.com/",
    },
    {
        id: 2,
        title: "Kotage",
        description: "Kotage's user-friendly interface and extensive analytics capabilities make it simple for procurement teams to leverage the value of real-time data. Whether it's a little firm or a major corporation, our Procurement Management System delivers the tools you need to maintain efficient inventory management, cut expenses, and improve overall operational efficiency.",
        image: '/images/kotage_mockup.png',
        link: 'https://deploy-preview-34--kotage-ui.netlify.app/'
    },
    {
        id: 3,
        title: "Pappermap",
        sub: "This is an in-house project still under development",
        description: "Pappermap tracks inventory levels in real time at many places. This capability enables firms to easily check stock levels, track movements, and identify abnormalities. Allowing businesses to make more informed purchasing, stocking, and order fulfillment decisions.",
        image: '/images/pappermap_mockup.png',
        info: [
            {
                title: "Suppliers' Portal",
                image: '/images/pappermap_2.png',
                description: "Suppliers are presented with a wide range of tools and data that streamline their operations. These resources provide real-time insights, allowing suppliers to focus on strategic decisions. With advanced analytics and integrated solutions, managing inventory and customer relationships becomes simpler and more effective, enhancing overall business performance and responsiveness in a competitive market.",
                hasLink: false
            },
            {
                title: '',
                image: '/images/pappermap_1.png',
                description: "The admin portal provides an easy-to-use interface with all the necessary tools for managing platform users and gathering data for analysis. Administrators can more effectively support users and keep an eye on system performance thanks to this simplified access. The portal's integrated job management and data analysis features improve operational efficiency, aid in system function optimization, and elevate user experience overall.",
                hasLink: false
            },
        ]
    },
    {
        id: 4,
        title: "Acacia Mobile App",
        description: 'Acacia Health Insurance (Acacia) is a Private Commercial Health Insurance Company registered under the laws of Ghana which operates for the benefit of its members and this app presents Acacia with a platform tailor measured for this sole purpose.',
        image: '/images/acaciaMobile_mockup.png',
        info: [
            {
                title: 'Android Version',
                link_label: 'Download now',
                image: '/images/acacia_mobile.webp',
                description: "Acacia 2021 is a cross-platform mobile application developed with react native. Clients can browse frequent health recommendations, receive water consumption reminders, track prescriptions straight from the hospital, report complaints in a chat forum, or talk directly with Dr. Cacia.",
                link: 'https://play.google.com/store/apps/details?id=com.acacia.acaciahealthinsurance'
            },
            {
                title: 'IOS Version',
                link_label: 'Download now',
                description: "The app also presents users with hospitals which are affiliated with Acacia and their respective locations powered by google map and apple maps.",
                images: [
                    '/images/acacia_mobile_1.webp',
                    '/images/acacia_mobile_2.webp',
                    '/images/acacia_mobile_3.webp'
                ],
                link: 'https://apps.apple.com/gh/app/acacia-health-insurance/id1535233495'
            }
        ]
    },
    // {
    //     id: 5,
    //     title: "KOTAGE",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     image: KOTAGE_SOURCE
    // },
    // {
    //     id: 6,
    //     title: "TOOMI",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //     image: KOTAGE_EDIT
    // },
];