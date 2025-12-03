import React, { useState } from "react";
import "./App.css";

// 🔒 Change this to whatever password you want
const ACCESS_PASSWORD = "GAMMAX";

const CLASS_DATA = [
  {
    day: "Monday",
    classes: [
      {
        time: "4:30 PM",
        name: "Kids Kickboxing",
        level: "Ages 7–12",
        location: "St Clair",
      },
      {
        time: "5:30 PM",
        name: "Teens Kickboxing",
        level: "Ages 13–17",
        location: "St Clair",
      },
      {
        time: "6:30 PM",
        name: "Adults Kickboxing",
        level: "All Levels",
        location: "St Clair",
      },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      {
        time: "4:30 PM",
        name: "Kids Kickboxing",
        level: "Ages 7–12",
        location: "St Clair",
      },
      {
        time: "5:30 PM",
        name: "Family Class",
        level: "Parents & Kids",
        location: "St Clair",
      },
      {
        time: "6:30 PM",
        name: "Open Sparring",
        level: "Invite Only",
        location: "St Clair",
      },
    ],
  },
  {
    day: "Saturday",
    classes: [
      {
        time: "9:00 AM",
        name: "Kids Kickboxing",
        level: "Ages 7–12",
        location: "St Clair",
      },
      {
        time: "10:00 AM",
        name: "Teens / Adults",
        level: "Mixed Level",
        location: "St Clair",
      },
    ],
  },
];

const MEMBERSHIP_PLANS = [
  {
    name: "Kids / Teens",
    price: "$XX / fortnight",
    desc: "Unlimited regular classes for kids and teens. Journey to black belt included.",
  },
  {
    name: "Adults",
    price: "$XX / fortnight",
    desc: "Access to all adult classes and open sparring (invite only).",
  },
  {
    name: "Private 1-on-1",
    price: "$50 / 30 mins · $65 / 45 mins",
    desc: "Personalised coaching focused on your goals (fitness, grading, sparring).",
  },
];

const PROMOS = [
  {
    title: "Join now, pay nothing until 2026",
    text: "Lock in your spot, start training today. Limited spots available.",
  },
  {
    title: "Family Class Coming Soon",
    text: "Kids and parents train together. Ages 7+. At least one active member per family.",
  },
];

function App() {
  const [tab, setTab] = useState("home");
  const [passwordInput, setPasswordInput] = useState("");
  const [isAuthed, setIsAuthed] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === ACCESS_PASSWORD) {
      setIsAuthed(true);
      setError("");
      setPasswordInput("");
      // Optional: remember login in this browser
      // localStorage.setItem("gx_authed", "true");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  // Optional: uncomment if you want to auto-remember auth between refreshes
  // React.useEffect(() => {
  //   if (localStorage.getItem("gx_authed") === "true") {
  //     setIsAuthed(true);
  //   }
  // }, []);

  if (!isAuthed) {
    return (
      <div className="app login-screen">
        <div className="login-card">
          <div className="logo-circle">GX</div>
          <h1>Gamma X Access</h1>
          <p>Enter the password to view the members app.</p>

          <form onSubmit={handleLogin}>
            <input
              type="password"
              className="login-input"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            {error && <p className="error-text">{error}</p>}
            <button type="submit" className="primary-btn">
              Enter
            </button>
          </form>

          <p className="login-hint">Ask Coach Francis for the access code.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="logo-circle">GX</div>
        <div>
          <h1>Gamma X Martial Arts</h1>
          <p>St Clair · Sydney NSW</p>
        </div>
      </header>

      {/* Tabs */}
      <nav className="tab-bar">
        <button
          className={tab === "home" ? "tab active" : "tab"}
          onClick={() => setTab("home")}
        >
          Home
        </button>
        <button
          className={tab === "timetable" ? "tab active" : "tab"}
          onClick={() => setTab("timetable")}
        >
          Timetable
        </button>
        <button
          className={tab === "membership" ? "tab active" : "tab"}
          onClick={() => setTab("membership")}
        >
          Membership
        </button>
        <button
          className={tab === "contact" ? "tab active" : "tab"}
          onClick={() => setTab("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Content */}
      <main className="content">
        {tab === "home" && <Home />}
        {tab === "timetable" && <Timetable />}
        {tab === "membership" && <Membership />}
        {tab === "contact" && <Contact />}
      </main>
    </div>
  );
}

function Home() {
  return (
    <div className="screen">
      <h2>Welcome to Gamma X</h2>
      <p>
        Kickboxing, confidence and community. Train in a focused home-gym
        environment in St Clair with small groups and real coaching.
      </p>

      <button
        className="primary-btn"
        onClick={() => {
          window.location.href = "https://m.me/YOUR_PAGE_LINK_HERE";
        }}
      >
        Message us to book a free trial
      </button>

      <section className="card-list">
        {PROMOS.map((promo, i) => (
          <div className="card" key={i}>
            <h3>{promo.title}</h3>
            <p>{promo.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

function Timetable() {
  return (
    <div className="screen">
      <h2>Class Timetable</h2>
      {CLASS_DATA.map((dayBlock) => (
        <div className="card" key={dayBlock.day}>
          <h3>{dayBlock.day}</h3>
          {dayBlock.classes.map((c, i) => (
            <div className="class-row" key={i}>
              <div>
                <strong>{c.time}</strong> – {c.name}
              </div>
              <div className="class-meta">
                <span>{c.level}</span>
                <span>{c.location}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Membership() {
  return (
    <div className="screen">
      <h2>Membership Options</h2>
      <p>
        All memberships are direct debit, no lock-in long-term contracts.
        Simple, clear and focused on your training.
      </p>
      <div className="card-list">
        {MEMBERSHIP_PLANS.map((plan) => (
          <div className="card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p>{plan.desc}</p>
          </div>
        ))}
      </div>

      <button
        className="primary-btn secondary"
        onClick={() => {
          window.location.href =
            "mailto:YOUR_EMAIL_HERE?subject=Gamma X Membership Enquiry";
        }}
      >
        Email us about memberships
      </button>
    </div>
  );
}

function Contact() {
  return (
    <div className="screen">
      <h2>Contact & Location</h2>
      <div className="card">
        <h3>St Clair Home Gym</h3>
        <p>St Clair, Penrith City Council, Sydney NSW</p>
        <p>Exact address provided after booking.</p>
      </div>

      <div className="card">
        <h3>Get in touch</h3>
        <p>Phone: 04XX XXX XXX</p>
        <p>Email: youremail@example.com</p>
        <div className="button-row">
          <button
            className="small-btn"
            onClick={() => (window.location.href = "tel:04XXXXXXXX")}
          >
            Call now
          </button>
          <button
            className="small-btn"
            onClick={() =>
              (window.location.href = "https://maps.app.goo.gl/YOUR_MAP_LINK")
            }
          >
            Open in Maps
          </button>
        </div>
      </div>

      <div className="card">
        <h3>Socials</h3>
        <ul className="social-list">
          <li>
            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/YOUR_PAGE"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com/@YOUR_HANDLE"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
