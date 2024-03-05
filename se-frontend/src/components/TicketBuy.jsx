import "../TicketBuy.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import QRCode from "react-qr-code";

function TicketBuy() {
  const [personCount, setPersonCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [money, setMoney] = useState();
  const serviceFee = 6;
  const [qrCodeVisible, setQrCodeVisible] = useState(false);
  const [eventData, setEventData] = useState("");
  const handleOpenModalClick = (event) => {
    if (event.target) setModalVisible(true);
  };
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (personCount > 0) {
      const total = personCount * money + serviceFee;
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [personCount, money]);

  const increaseCount = () => {
    setPersonCount(personCount + 1);
  };

  const decreaseCount = () => {
    if (personCount > 0) {
      setPersonCount(personCount - 1);
    }
  };

  const handlePriceClick = (event) => {
    setMoney(parseInt(ticketValues.price));
    if (event.target) setModalVisible(true);
  };

  const handleSpecialPriceClick = (event) => {
    setMoney(parseInt(ticketValues.priceSpecial));
    console.log(money);
    if (event.target) setModalVisible(true);
  };

  const handlePayNowClick = () => {
    const eventDataString = `${ticketValues.name}, ${ticketValues.date}, ${ticketValues.location}, ${ticketValues.address}, ${totalPrice}`;
    setEventData(eventDataString);
    setQrCodeVisible(true);
  };
  const handleCloseModalClick = () => {
    setModalVisible(false);
  };

  const location = useLocation();
  let { ticketValues } = location.state || {};

  return (
    <div className={`${!modalVisible ? "" : "hundred"}`}>
      <Navbar />
      <div className={`modal-ticket ${modalVisible ? "" : " hidden"}`}>
        <div className="modal-inside-ticket">
          <div className="modal-inside--inside-ticket">
            <div className="close-container">
              <button onClick={handleCloseModalClick} className="close-btn">
                X
              </button>
            </div>
            <div className="img-and-heading">
              <div className="img-container-ticket--buy">
                <img
                  className="img-ticket-buy"
                  src="concert-detail.png"
                  alt=""
                />
              </div>
              <div className="heading-date-location-container">
                <h5>{ticketValues.name}</h5>
                <p>{ticketValues.date}</p>
                <p>{ticketValues.location}</p>
              </div>
            </div>

            <div className="prices-container">
              <div className="left-of-prices">
                <h4>Ticket Prices</h4>
                <h3 style={{ color: "lightgreen" }}>{money + ".00TL"}</h3>
              </div>
              <div className="right-of-prices">
                <h4>Hizmet Bedeli</h4>
                <h3 style={{ color: "lightgreen" }}>6.00 TL</h3>
              </div>
            </div>

            <div>
              <div className="choose-person">
                <h4 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                  {"Please select number of people"}
                </h4>

                <div className="person-counter">
                  <button onClick={increaseCount}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <h3>{personCount}</h3>
                  <button onClick={decreaseCount}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
              <h2 style={{ marginBottom: "1rem", marginTop: "1rem" }}>
                {"Total Ticket Price"}
              </h2>
              <h3 style={{}}>
                <span style={{ color: "lightgreen" }}>
                  {totalPrice + ".00 TL"}
                </span>
              </h3>
            </div>

            <div className="buy-container-ticket">
              <div className="event-btn-container">
                <button onClick={handlePayNowClick} className="event-btn">
                  Pay Now
                </button>
              </div>
            </div>
            {qrCodeVisible && (
              <div className="qr-code-container">
                <QRCode value={eventData} size={150} />
                {/* Yukarıda oluşturduğunuz QR kodunu göstermek için bir alan */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-ticket">
        <div className="flex-column">
          <div className="flex-heading-p">
            <h1
              style={{ marginTop: "4rem", color: "#123456", fontSize: "3rem" }}
            >
              Select Cathegory
            </h1>
            <p>To buy select a cathegory.</p>
          </div>
          <div className="main-buy-container">
            <div className="heading-and-location">
              <h2>{ticketValues.name}</h2>
              <p>{ticketValues.location}</p>
            </div>
            <div className="main-container-inside">
              <div className="cathegory-and-ticket">
                <p style={{ fontWeight: "600" }}>Select Cathegory</p>
                <p style={{ fontWeight: "600" }}>Buy Tickets</p>
              </div>
              <div onClick={handlePriceClick} className="general-container">
                <div className="general-left">
                  <p>General Enterance Ticket</p>
                  <p>{ticketValues.date}</p>
                </div>
                <div className="general-right">
                  <p>{ticketValues.price}</p>
                  <button className="buy-btn-general">Buy Ticket</button>
                </div>
              </div>

              <div
                onClick={handleSpecialPriceClick}
                className="special-container"
              >
                <div className="special-left">
                  <p>Special Enterance Ticket</p>
                  <p>{ticketValues.date}</p>
                </div>
                <div className="special-right">
                  <p>{ticketValues.priceSpecial}</p>
                  <button className="buy-btn-special">Buy Ticket</button>
                </div>
              </div>
            </div>
          </div>
          <div className="requirments-container">
            <ul
              style={{
                letterSpacing: "0.2px",
                lineHeight: "1.7rem",
                padding: "1rem 1.4rem",
              }}
            >
              <li>
                <h4>Etkinlik hakkında bilinmesi gerekenler:</h4>
              </li>
              <li>Etkinlikte 18 yaş sınırı vardır. </li>
              <li>
                Mekanda kadın - erkek eşitliğine dikkat edilecektir. Kurala
                uyulmaması halinde bilet iadesi yapılmayacaktır.
              </li>
              <li>İndirimli biletler sınırlı sayıdadır.</li>
              <li>E-Biletiniz Mail ve Sms olarak size gelecektir.</li>
              <li>Çıktı almanıza gerek yoktur.</li>
              <li>
                Etkinlik girişinde bilet kontrolü yapılacaktır, biletinizi
                telefondan göstermeniz gerekmektedir.
              </li>
              <li>
                Organizasyon şirketi, etkinlik için uygun görmediği kişileri
                bilet bedelini iade etmek koşuluyla etkinlik mekanına almama
                hakkına sahiptir.
              </li>
            </ul>
          </div>
        </div>
        <div className="sitting-plan-container">
          <div className="sitting-plan-inside">
            <h1 style={{ marginTop: "4rem" }}>Sitting Plan</h1>
            <p className="plan-text">You can see sitting plan here</p>
            <div className="sitting-img-container">
              <img src="/sitting-plan.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketBuy;
