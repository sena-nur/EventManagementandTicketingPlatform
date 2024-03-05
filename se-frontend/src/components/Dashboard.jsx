import "../Dashboard.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import giphy from "/giphy.gif"; // Dosya yolunu doğru belirtmek için sadece dosya adı yeterli olabilir
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

function EventGrid() {
  // Örnek etkinlik verileri
  const [selected, setSelected] = useState(null);
  const events = [
    {
      name: "Elif Şafak Söyleşisi",
      location: "Eskişehir Kongre Merkezi",
      date: "15 Ocak Cum - 18:00",
      price: "150.00TL",
      priceSpecial: "200.00TL",
      image: "/party.jpg",
      address: "Sazova, Anadolu Üniversitesi, 26555 Tepebaşı/Eskişehir",
      details: {
        description:
          "Elif Şafak, yeni kitabı üzerine bir söyleşi gerçekleştirecek. Edebiyat tutkunları için kaçırılmayacak bir etkinlik!",
        artists: ["Elif Şafak"],
        genre: "Edebiyat",
        type: "Söyleşi",
        ticketInfo: true,
      },
    },
    {
      name: "Eskişehir Film Festivali",
      location: "Eskişehir Kültür Sanat Merkezi",
      date: "3-7 Şubat",
      price: "Ücretsiz",
      image: "/party.jpg",
      address:
        "Yıldız, 75. Yıl Mahallesi, Atatürk Blv. No:10, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Eskişehir Film Festivali, yerli ve yabancı birçok filmle sinemaseverlere unutulmaz anlar yaşatacak. Herkesi bekliyoruz!",
        artists: ["Çeşitli Filmler"],
        genre: "Film",
        type: "Festival",
        ticketInfo: false,
      },
    },
    {
      name: "Eskişehir Senfoni Orkestrası Konseri",
      location: "Eskişehir Büyükşehir Belediyesi Salonu",
      date: "10 Şubat Cuma - 20:00",
      price: "180.00TL",
      priceSpecial: "250.00TL",
      image: "/party.jpg",
      address: "Sazova, Anadolu Üniversitesi, 26555 Tepebaşı/Eskişehir",
      details: {
        description:
          "Eskişehir Senfoni Orkestrası, klasik müziğin en seçkin eserlerini seslendirecek. Müzik dolu bir gece için biletler tükenmeden alın!",
        artists: ["Eskişehir Senfoni Orkestrası"],
        genre: "Klasik Müzik",
        type: "Konser",
        ticketInfo: true,
      },
    },
    {
      name: "Çağan Şengül Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "21 Aralık Per - 21:30",
      price: "250.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Çağan Şengül, enerjik performansı ve sevilen parçalarıyla dinleyicilerini eğlendirmeye geliyor. Unutulmaz bir gece için yerinizi şimdiden ayırtın!",
        artists: ["Çağan Şengül"],
        genre: "Pop",
        type: "Konser",
        ticketInfo: true,
      },
    },
    {
      name: "Can Ozan Konseri",
      location: "Milyon Performance Hall Eskişehir",
      date: "24 Aralık Paz - 21:30",
      price: "220.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Can Ozan, müziğini dinleyicilerine sunmaya devam ediyor. En sevilen şarkılarıyla unutulmaz bir geceye hazır olun!",
        artists: ["Can Ozan"],
        genre: "Pop",
        type: "Tiyatro",
        ticketInfo: false,
      },
    },
    {
      name: "Pera Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "27 Aralık Çar - 22:00",
      price: "200.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Ankara kökenli olan Pera, 'Sensiz Ben', 'Biri Vardı' ve 'Belki De Aşık Oldun' adlı popüler şarkılarıyla bilinmektedir. Müziklerini alternatif rock tarzında icra eden grup, dinleyicilerine unutulmaz bir gece sunmayı hedefliyor.",
        artists: ["Pera"],
        genre: "Alternatif Rock",
        type: "Sinema",
        ticketInfo: true,
      },
    },
    {
      name: "Eskişehir Fotoğraf Sergisi",
      location: "Eskişehir Sanat Galerisi",
      date: "5-20 Mart",
      price: "Ücretsiz",
      image: "/party.jpg",
      address: "Batıkent, Hasan Polatkan Cd. No:71, 26150 Odunpazarı/Eskişehir",
      details: {
        description:
          "Eskişehir'in güzelliklerini fotoğraflarla keşfetmek için sergimize davetlisiniz. Sergimiz ücretsizdir.",
        artists: ["Eskişehir Fotoğrafçılar Derneği"],
        genre: "Fotoğraf",
        type: "Sergi",
        ticketInfo: false,
      },
    },
    {
      name: "Eskişehir Çocuk Tiyatro Festivali",
      location: "Eskişehir Çocuk Tiyatrosu",
      date: "10-15 Nisan",
      price: "20.00TL",
      image: "/party.jpg",
      address: "Tepebaşı, Atatürk Cd. No:123, 26140 Tepebaşı/Eskişehir",
      details: {
        description:
          "Eskişehir Çocuk Tiyatro Festivali, çocuklar için renkli ve eğlenceli tiyatro oyunları sunacak. Etkinliğimizde yerinizi ayırtmayı unutmayın!",
        artists: ["Çeşitli Tiyatro Grupları"],
        genre: "Çocuk",
        type: "Tiyatro",
        ticketInfo: true,
      },
    },
    {
      name: "Eskişehir Dans Festivali",
      location: "Eskişehir Dans Akademisi",
      date: "22-25 Mayıs",
      price: "50.00TL",
      image: "/party.jpg",
      address: "Sazova, Anadolu Üniversitesi, 26555 Tepebaşı/Eskişehir",
      details: {
        description:
          "Eskişehir Dans Festivali, dans tutkunları için birbirinden özel performanslarla dolu bir etkinlik sunuyor. Biletlerimiz hızla tükeniyor!",
        artists: ["Çeşitli Dans Grupları"],
        genre: "Dans",
        type: "Festival",
        ticketInfo: true,
      },
    },
    {
      name: "Çağan Şengül Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "21 Aralık Per - 21:30",
      price: "250.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Çağan Şengül, enerjik performansı ve sevilen parçalarıyla dinleyicilerini eğlendirmeye geliyor. Unutulmaz bir gece için yerinizi şimdiden ayırtın!",
        artists: ["Çağan Şengül"],
        genre: "Pop",
        type: "Konser",
        ticketInfo: true,
      },
    },
    {
      name: "Can Ozan Konseri",
      location: "Milyon Performance Hall Eskişehir",
      date: "24 Aralık Paz - 21:30",
      price: "220.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Can Ozan, müziğini dinleyicilerine sunmaya devam ediyor. En sevilen şarkılarıyla unutulmaz bir geceye hazır olun!",
        artists: ["Can Ozan"],
        genre: "Pop",
        type: "Tiyatro",
        ticketInfo: false,
      },
    },
    {
      name: "Pera Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "27 Aralık Çar - 22:00",
      price: "200.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Ankara kökenli olan Pera, 'Sensiz Ben', 'Biri Vardı' ve 'Belki De Aşık Oldun' adlı popüler şarkılarıyla bilinmektedir. Müziklerini alternatif rock tarzında icra eden grup, dinleyicilerine unutulmaz bir gece sunmayı hedefliyor.",
        artists: ["Pera"],
        genre: "Alternatif Rock",
        type: "Sinema",
        ticketInfo: true,
      },
    },
    {
      name: "Çağan Şengül Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "21 Aralık Per - 21:30",
      price: "250.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Çağan Şengül, enerjik performansı ve sevilen parçalarıyla dinleyicilerini eğlendirmeye geliyor. Unutulmaz bir gece için yerinizi şimdiden ayırtın!",
        artists: ["Çağan Şengül"],
        genre: "Pop",
        type: "Konser",
        ticketInfo: true,
      },
    },
    {
      name: "Can Ozan Konseri",
      location: "Milyon Performance Hall Eskişehir",
      date: "24 Aralık Paz - 21:30",
      price: "220.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Can Ozan, müziğini dinleyicilerine sunmaya devam ediyor. En sevilen şarkılarıyla unutulmaz bir geceye hazır olun!",
        artists: ["Can Ozan"],
        genre: "Pop",
        type: "Tiyatro",
        ticketInfo: false,
      },
    },
    {
      name: "Pera Konseri",
      location: "IF Performance Hall Eskişehir",
      date: "27 Aralık Çar - 22:00",
      price: "200.00 TL",
      priceSpecial: "350.00TL",
      image: "/party.jpg",
      address:
        "Hoşnudiye, Cassaba Modern AVM, 748. Spk No:3/A, 26130 Tepebaşı/Eskişehir",
      details: {
        description:
          "Ankara kökenli olan Pera, 'Sensiz Ben', 'Biri Vardı' ve 'Belki De Aşık Oldun' adlı popüler şarkılarıyla bilinmektedir. Müziklerini alternatif rock tarzında icra eden grup, dinleyicilerine unutulmaz bir gece sunmayı hedefliyor.",
        artists: ["Pera"],
        genre: "Alternatif Rock",
        type: "Sinema",
        ticketInfo: true,
      },
    },

    // ... Diğer etkinlikler
  ];

  const navigate = useNavigate();
  const handleClick = (index) => {
    setSelected(index === selected ? null : index);
    navigate("/details", { state: { sentence: events[index] } });
  };

  return (
    <div className="event-grid">
      {events.map((event, index) => (
        <div
          key={index}
          className={`event-item ${selected === index ? "selected" : ""}`}
          onClick={() => handleClick(index)}
          style={{ cursor: "pointer" }}
        >
          <div className="event-content">
            <img src={event.image} alt={event.name} />
            <div className="event-details">
              <div className="event-name-box">
                <h3>{event.name}</h3>
              </div>
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}
              </p>
              <p>
                <FontAwesomeIcon icon={faCalendarAlt} /> {event.date}
              </p>
              <p>
                {event.price} <FontAwesomeIcon icon={faShoppingCart} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
function Dashboard() {
  const location = useLocation();
  let { sentence } = location.state || {};

  const navigate = useNavigate();

  const handleDashboardClick = () => {
    // Logic for handling the click event and navigating to Dashboard.jsx
    navigate("/"); // Navigate to the root path (Dashboard)
  };

  return (
    <div>
      <Navbar />
      <section className="main-page">
        <div className="container">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search for event artists or venues"
            />

            <div className="city-container">
              <button onClick={handleDashboardClick} className="city-btn">
                <p className="city-p">{sentence || "İstanbul"}</p>
              </button>
            </div>
          </div>

          <div className="gif-container">
            <img src={giphy} alt="Example GIF" className="gif-image" />

            <div className="categories">
              <nav className="category-navbar">
                <button className="category-button">Konser</button>
                <button className="category-button">Tiyatro</button>
                <button className="category-button">Festival</button>
                <button className="category-button">Stand Up</button>
                <button className="category-button">Çocuk Aktiviteleri</button>
              </nav>
            </div>
          </div>
          <EventGrid />
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
