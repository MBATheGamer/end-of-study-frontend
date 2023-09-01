import aboutImage from "$assets/network.png";
import service1Image from "$assets/service1.png";
import service2Image from "$assets/service2.png";
import service3Image from "$assets/service3.png";
import facebookImage from "$assets/facebook-icon.png";
import instagramImage from "$assets/instagram-icon.png";
import whatsappImage from "$assets/whatsapp-icon.png";
import twitterImage from "$assets/twitter-icon.png";
import linkedinImage from "$assets/linkedin-icon.png";
import snaochatImage from "$assets/snapchat-icon.png";
import user1Image from "$assets/user1.jpg";
import user2Image from "$assets/user2.jpg";

export const HEADER = "Nixalar";

export const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: aboutImage,
  WHY_CHOOSE_US_LIST: [
    "We provides Cost-Effective Digital Marketing than Others.",
    "High customer statisfaction and experience.",
    "Marketing efficiency and quick time to value.",
    "Clear & transparent fee structure.",
    "We provides Marketing automation which is an integral platform that ties all of your digital marketing together.",
    "A strong desire to establish long lasting business partnerships.",
    "Provide digital marketing to mobile consumer.",
    "We provides wide range to services in reasonable prices"
  ]
};

export const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#services", label: "Services" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
export const BANNER_DATA = {
  HEADING: "Go digital with nixalar",
  DECRIPTION:
    "Nixalar can help you skyrocket the ROI of your marketing campaign without having to spend tons of money or time to assemble an in-house team.",
  TUTORIAL_URL:
    "https://www.thinkwithgoogle.com/intl/en-gb/marketing-resources/programmatic/google-digital-academy/",
  WATCH_TUTORIAL: "Watch Tutorials"
};
export const SERVICE_DATA = {
  HEADING: "Our Services",
  ALL_SERVICES: "All Services",
  SERVICE_LIST: [
    {
      LABEL: "Search Engine Optimisation",
      DESCRIPTION:
        "To customise the content, technical functionality and scope of your website so that your pages show for a specific set of keyword at the top of a search engine list. In the end, the goal is to attract traffic to your website when they are searching for goods, services or business-related information.",
      URL: service1Image
    },
    {
      LABEL: "Content Marketing Strategy",
      DESCRIPTION:
        "It is tough but well worth the effort to create clever material that is not promotional in nature, but rather educates and inspires. It lets them see you as a reliable source of information by delivering content that is meaningful to your audience.",
      URL: service2Image
    },
    {
      LABEL: "Develop Social Media Strategy",
      DESCRIPTION:
        "Many People rely on social networks to discover, research, and educate themselves about a brand before engaging with that organization. The more your audience wants to engage with your content, the more likely it is that they will want to share it.",
      URL: service3Image
    }
  ]
};

export const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: user1Image,
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC"
    },
    {
      DESCRIPTION:
        "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: user2Image,
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz"
    }
  ]
};

export const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    facebookImage,
    instagramImage,
    whatsappImage,
    twitterImage,
    linkedinImage,
    snaochatImage
  ]
};

export const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "La trobe street docklands, Melbourne",
    MOBILE: "+1 61234567890",
    EMAIL: "nixalar@gmail.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};
