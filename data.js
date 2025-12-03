// 🔧 GAMMA X CONFIG - EDIT THIS FILE TO UPDATE YOUR APP

window.GX_CONFIG = {
  // 🔒 Password to access the app
  ACCESS_PASSWORD: "GXMA23",

  // ⏰ How long the login lasts before asking for password again (in milliseconds)
  // 1 hour = 60 * 60 * 1000
  PASSWORD_EXPIRY_MS: 60 * 60 * 1000,

  // 📅 Class timetable
  CLASS_DATA: [
    {
      day: "Monday",
      classes: [
        { time: "4PM", name: "Kids Kickboxing", 
        { time: "5PM", name: "kids Intermediate", 
        { time: "6PM", name: "Adults Kickboxing",
      ]
    },
    {
      day: "Wednesday",
      classes: [
        { time: "4PM", name: "Kids Kickboxing", 
        { time: "5PM", name: "kids Intermediate", 
        { time: "6PM", name: "Adults Kickboxing",
      ]
    },
    {
      day: "Saturday",
      classes: [
        { time: "9:00 AM", name: "Kids Kickboxing", level: "Ages 7–12", location: "St Clair" },
        { time: "10:00 AM", name: "Teens / Adults", level: "Mixed Level", location: "St Clair" }
      ]
    }
  ],

  // 💳 Membership plans
  MEMBERSHIP_PLANS: [
    {
      name: "Kids / Teens",
      price: "$75 / fortnight",
      desc: "Unlimited regular classes for kids and teens. Journey to black belt included."
    },
    {
      name: "Adults",
      price: "$75 / fortnight",
      desc: "Access to all adult classes and open sparring (invite only)."
    },
    {
      name: "Private 1-on-1",
      price: "$50 / 30 mins · $65 / 45 mins",
      desc: "Personalised coaching focused on your goals (fitness, grading, sparring)."
    }
  ],

  // 📢 Promo banners on Home
  PROMOS: [
    {
      title: "Join now, pay nothing until 2026",
      text: "Lock in your spot, start training today. Limited spots available."
    },
    {
      title: "Family Class Coming Soon",
      text: "Kids and parents train together. Ages 7+. At least one active member per family."
    }
  ],

  // 📞 Contact & social details
  CONTACT_INFO: {
    locationTitle: "St Clair Home Gym",
    locationLine1: "St Clair",
    locationNote: "Exact address provided after booking.",

    phoneDisplay: "0416 553 814",
    phoneHref: "04XXXXXXXX", // number with no spaces for tel: link

    email: "youremail@example.com",

    mapsUrl: "https://maps.app.goo.gl/YOUR_MAP_LINK",
    messengerUrl: "https://www.facebook.com/gxmartialarts/",

    socials: {
      instagram: {
        label: "Instagram",
        url: "https://instagram.com/YOUR_HANDLE"
      },
      facebook: {
        label: "Facebook",
        url: "https://facebook.com/YOUR_PAGE"
      },
      tiktok: {
        label: "TikTok",
        url: "https://tiktok.com/@YOUR_HANDLE"
      }
    }
  }
};
