import React from "react";
import "./WhyTechcareer.css";
// İkonu import edin



const CardsSection = () => {
    const cardsData = [
        {
            id: 1,
            title: "Ücretsiz etkinliklere katıl",
            description:
                "Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile başlayacaksın.",
            icon: "/assets/icons/why-tcn-icon1.png", // İkon yolunu burada kullanıyoruz
        },
        {
            id: 2,
            title: "Kendini kanıtla",
            description:
                "Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak hem becerilerini geliştirecek hem de ödül kazanma fırsatı yakalayacaksın.",
            icon: "/assets/icons/why-tcn-icon2.png", // İkon yolunu burada kullanıyoruz
        },
        {
            id: 3,
            title: "İş fırsatı yakala",
            description:
                "Sektöründe lider teknoloji şirketleriyle tanışacak ve iş fırsatları yakalayacaksın.",
            icon: "/assets/icons/why-tcn-icon3.png", // İkon yolunu burada kullanıyoruz
        },
    ];

    return (
        <section className="whytech-cards-section">
            <h2 className="whytech-section-title">
                Neden Tech<span className="highlight">career</span>.net?
            </h2>
            <div className="whytech-cards-container">
                {cardsData.map((card) => (
                    <div key={card.id} className="whytech-card">
                        <div className="whytech-card-icon-container">
                            <div
                                className="whytech-card-icon"
                                style={{
                                    backgroundImage: `url(${card.icon})`, // Artık direkt olarak icon1 import edilmiş oldu
                                }}
                            ></div>
                        </div>
                        <div className="whytech-card-content-whytech">
                            <h3 className="whytech-card-title">{card.title}</h3>
                            <p className="whytech-card-description">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CardsSection;
