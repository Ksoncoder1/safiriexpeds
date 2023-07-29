import dashboard from "../images/dashboard.jpeg";
import memoryimg from "../images/memory.jpeg";

import brand1 from "../images/brand1.png";
import brand2 from "../images/brand2.png";
import brand3 from "../images/brand3.png";
import brand5 from "../images/brand5.png";

import place1 from "../images/img1.jpeg";
import place2 from "../images/img2.jpeg";
import place3 from "../images/img3.jpeg";
import place4 from "../images/img4.jpeg";
import place5 from "../images/img5.jpeg";
import place6 from "../images/img6.jpeg";
import place7 from "../images/img7.jpeg";
import place8 from "../images/img8.jpeg";
import place9 from "../images/img9.jpeg";
import place10 from "../images/img10.jpeg";

import standardicon from "../images/standardicon.png";
import preminumicon from "../images/preminum.png";
import checkbox from "../images/checkbox.svg";
import uncheckbox from "../images/uncheckbox.svg";

import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import youtube from '../images/youtube.svg';

import banner from '../images/banner.webp';

export const brands = [
  { iconSrc: brand3 },
  { iconSrc: brand2 },
  { iconSrc: brand1 },
  { iconSrc: brand5 },
];

export const navlinks = [
  { link: "Home", id: "home" },
  { link: "About", id: "about" },
  { link: "Explore", id: "explore" },
  { link: "Pricing", id: "pricing" },
  { link: "Contact", id: "contact" },
];

export const hero = {
  "title": "It's a Big World Out There",
  "subtitle": "Go, And Explore",
  "text": "We always provide you with your dream places. We always make our customers happy by providing many choices.",
  "btn1": "Get Started",
  "btn2": "Get Demo",
  "img": dashboard,
};

export const memory = {
  "title": "Sweet Memories",
  "subtitle": "Come To Life Again",
  "text": "What we have always taken care for 10 years is always prioritizing the comfort of our users. So, do not doubt our quality.",
  "img": memoryimg,
  "experience": [
    { "number": "10", "title": "Year Experience" },
    { "number": "400", "title": "Year Collaboration" },
    { "number": "30k+", "title": "Happy Customer" },
  ],
};

export const placesAPI = [
  { "placeImg": place1, "location": "Masai Mara", "distance": "4.0 hour drive" },
  { "placeImg": place2, "location": "Naivasha", "distance": "3 hour dirve" },
  { "placeImg": place3, "location": "Lake Nakuru", "distance": "3 hour drive" },
  { "placeImg": place4, "location": "Thomson Falls", "distance": "6.5 hour drive" },
  { "placeImg": place5, "location": "Giraffe Center", "distance": "0.5 hour drive" },
  { "placeImg": place6, "location": "Nairobi N. Park", "distance": "0.2 hour drive" },
  { "placeImg": place7, "location": "Diani Beach", "distance": "12 hour drive" },
  { "placeImg": place8, "location": "Nyali Beach", "distance": "11 hour drive" },
  { "placeImg": place9, "location": "Mt Kenya", "distance": "6 hour drive" },
  { "placeImg": place10, "location": "Amboseli N. Park", "distance": "6 hour drive" },
];

export const pricingapi = {
  "title": "Choose The Plan That Suits You",
  "text": "Many attractive offers by becoming a premium member",
  "btn1": "Monthly",
  "btn2": "Yearly",
  "plans": [
    {
      "planicon": standardicon,
      "title": "Standard Membership",
      "text": "Suitable for all users",
      "plantype": "Free / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "Limited Travel Stats" },
        { "iconbox": uncheckbox, "text": "Invite Friends Feature" },
        { "iconbox": uncheckbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Free",
    },
    {
      "planicon": preminumicon,
      "title": "Preminum Membership",
      "text": "Suitable for enthusiast travelers",
      "plantype": "$60 / Year",
      "plancontent": [
        { "iconbox": checkbox, "text": "Find Popular Destination" },
        { "iconbox": checkbox, "text": "Priority Booking Schedule" },
        { "iconbox": checkbox, "text": "Daily Destination News" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "Advanced Travel Stats" },
        { "iconbox": checkbox, "text": "Invite Friends Feature" },
        { "iconbox": checkbox, "text": "No Ads & Tax" },
      ],
      "buttonText": "Get Started",
    },
  ],
};

export const bannerAPI = {
  "title": "The Greet Outdoors",
  "text": "Whishlist Curated By SafiriExpeds.",
  "imgSrc": banner,
  "btnText": "Explore More"
}

export const footerAPI = {
  "titles": [ {"title": "About"},{"title": "Company"},{"title": "Support"} ],
  "links": [
    [
      {"link": "About US"},
      {"link": "Features"},
      {"link": "News"},
      {"link": "Menu"},
    ],
    [
      {"link": "Why SafiriExpeds?"},
      {"link": "Partner with Us"},
      {"link": "FAQ"},
      {"link": "Blog"},
    ],
    [
      {"link": "Account"},
      {"link": "Support Center"},
      {"link": "Feedback"},
      {"link": "Contact Us"},
      {"link": "Accesbility"},
    ],
  ],
  "sociallinks": [
    {"icon": facebook},{"icon": instagram},{"icon": twitter},{"icon": youtube},
  ]
};