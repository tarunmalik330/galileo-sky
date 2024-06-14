import {
  Linkdin,
  Discoard,
  Telegram,
  Twitter,
  TwitterSvg,
  DiscordSvg,
  TeligramSvg,
  InSvg,
} from "./Icon";

//--------------HEADER---------------
export const headerSocialIcon = [
  {
    link: "https://x.com/login",
    headersvg: <TwitterSvg />,
    label: "Twitter",
  },
  {
    link: "https://discord.com/",
    headersvg: <DiscordSvg />,
    label: "Discord",
  },
  {
    link: "https://web.telegram.org/a/",
    headersvg: <TeligramSvg />,
    label: "Teligram",
  },
  {
    link: "https://www.linkedin.com/login",
    headersvg: <InSvg />,
    label: "In",
  },
];

// ============================ FOOTER ============================
export const socialIcons = [
  {
    url: "https://in.linkedin.com/",
    svg: <Linkdin />,
    lable: "linkedin",
  },
  {
    url: "https://discord.com/",
    svg: <Discoard />,
    lable: "discord",
  },
  {
    url: "https://web.telegram.org/",
    svg: <Telegram />,
    lable: "telegram",
  },
  {
    url: "https://x.com/?lang=en",
    svg: <Twitter />,
    lable: "twitter",
  },
];

export const footerLink = [
  {
    link: "Home",
    path: "#home",
  },
  {
    link: "Games",
    path: "#games",
  },
  {
    link: "AI-Platform",
    path: "#platform",
  },
  {
    link: "Team",
    path: "#team",
  },
  {
    link: "Careers",
    path: "#careers",
  },
  {
    link: "Privacy Policy",
    path: "#privacy",
  },
];
