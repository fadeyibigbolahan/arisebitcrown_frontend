import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
import { FaHome, FaTasks, FaUser } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
    icon: FaHome,
  },
  {
    id: "1",
    title: "Task",
    url: "/tasks",
    icon: FaTasks,
  },
  {
    id: "2",
    title: "Team",
    url: "/team",
    icon: RiTeamFill,
  },
  {
    id: "4",
    title: "Me",
    url: "/me",
    icon: FaUser,
  },
];

export const tasks = [
  {
    id: "0",
    title: "Landing Pages",
    desc: "Create pages to collect leads, sell products and more.",
    url: "landing-pages",
  },
  {
    id: "1",
    title: "Signup Forms",
    desc: "Invite people from across the web to become subscribers.",
    url: "signup-forms",
  },
];

export const sendEmailNav = [
  {
    id: "0",
    title: "Email Marketing",
    desc: "Grow your audience and build stronger relationship.",
    url: "email-marketing",
  },
  {
    id: "1",
    title: "Automation",
    desc: "Send perfectly-time and targeted email automatically.",
    url: "automation",
  },
  {
    id: "2",
    title: "Newsletter Editor",
    desc: "Design emails yourself with an ai-powered drag & drop editor.",
    url: "newsletter-editor",
  },
  {
    id: "3",
    title: "Email Notification",
    desc: "Send timely emails triggered by activity on your website or app.",
    url: "email-notification",
  },
];

export const buildSoftwareNav = [
  {
    id: "0",
    title: "Hire A Web Expert",
    desc: "Contact a Website Designer to build a user and SEO-friendly website for your brand.",
    url: "hire-a-web-expert",
  },
  {
    id: "1",
    title: "Hire A Developer",
    desc: "At affordable prices, you can hire a developer to help me automate the needs of your brand by developing a mobile application.",
    url: "hire-a-developer",
  },
];

export const collectLeadNav = [
  {
    id: "0",
    title: "Landing Pages",
    desc: "Create pages to collect leads, sell products and more.",
    url: "landing-pages",
  },
  {
    id: "1",
    title: "Signup Forms",
    desc: "Invite people from across the web to become subscribers.",
    url: "signup-forms",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Fade...",
    text: "fade****@gmail.com",
    price: "5000",
  },
  {
    id: "1",
    title: "Temi...",
    text: "temi****@gmail.com",
    price: "5000",
  },
  {
    id: "2",
    title: "Mayo...",
    text: "mayo****@gmail.com",
    price: "5000",
  },
  {
    id: "3",
    title: "Odun...",
    text: "odun****@gmail.com",
    price: "5000",
  },
  {
    id: "4",
    title: "Jare...",
    text: "jare****@gmail.com",
    price: "5000",
  },
  {
    id: "5",
    title: "Dotu...",
    text: "dotu****@gmail.com",
    price: "5000",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
