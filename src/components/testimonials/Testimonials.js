import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const CardWithCircle = ({ imageSrc, title, position, description }) => (
  <div className="testimonial-card-with-circle">
    <div className="testimonial-circle">
      <img src={imageSrc} alt={title} />
    </div>
    <div className="testimonial-card-layout">
      <div className="testimonial-card">


        <div className="testimonial-card-content">
          <h3 className="testimonial-text-title">{title}</h3>
          <span className="testimonial-text-subtitle">{position}</span>
          <p className="testimonial-text-body">{description}</p>

        </div>
        <div className="testimonial-icon-quotes">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.77564 6.29305C2.62029 7.49287 1.99998 8.83856 1.99998 11.02C1.99998 14.8585 4.75489 18.299 8.76387 20L9.76555 18.4887C6.02466 16.5102 5.29331 13.9428 5.00055 12.324C5.6029 12.6289 6.39146 12.7352 7.16544 12.6651C9.18899 12.4819 10.7841 10.8576 10.7841 8.83856C10.7841 7.82051 10.3704 6.84416 9.63417 6.12429C8.89791 5.40442 7.89932 5 6.85809 5C5.6545 5 4.50251 5.5374 3.77564 6.29305ZM14.9927 6.29305C13.8373 7.49287 13.217 8.83856 13.217 11.02C13.217 14.8585 15.9719 18.299 19.9809 20L20.9826 18.4887C17.2417 16.5102 16.5104 13.9428 16.2187 12.324C16.8211 12.6289 17.6096 12.7352 18.3825 12.6651C20.406 12.483 22 10.8587 22 8.83856C22 7.82051 21.5864 6.84416 20.8501 6.12429C20.1138 5.40442 19.1153 5 18.074 5C16.8704 5 15.7184 5.5374 14.9916 6.29305"
              fill="#00c26d"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      imageSrc: "/assets/images/fotograf11.png",
      title: "Bertuğ İnal",
      position: ".Net Core Domination Bootcamp",
      description:
        ".NET Core Domination Bootcamp'a katılmaktan büyük memnuniyet duydum. Bu eğitim, Microsoft teknolojilerini en güncel tekniklerle öğrenmek isteyenler için benzersiz bir fırsat sunuyor. Hocamızın anlaşılır anlatımı sayesinde, başlangıç seviyesinden ileri seviyeye hızla ilerledim. Eğitim, temel kavramlarla başlayıp, öz güven kazandıran kapsamlı örnekler ve proje tabanlı yaklaşım sunuyor. Teorik bilgilerin yanı sıra gerçek dünya senaryolarını ve en iyi uygulamaları ele alıyor, MSSQL, .NET Core ve C# ile proje geliştirme imkanı tanıyor. Techcareer.net’in profesyonel eğitmenleri eşliğinde, sektörde gereken bilgi ve becerileri geliştirme şansı buldum. Bu değerli eğitimi, yazılım sektörüne adım atmak isteyen herkese tavsiye ederim.",
    },
    {
      imageSrc: "/assets/images/fotograf2.png",
      title: "Gülen Ayça Gülen",
      position: "Digital Marketing Bootcamp",
      description:
        "Techcareer Digital Marketing Bootcamp'e katılmak, benim için oldukça verimli ve öğretici bir deneyim oldu. Farklı projeler üzerinde çalışarak kazandığım pratik beceriler, profesyonel yaşama hazırlanmamda büyük katkı sağladı. Eğitim süreci son derece iyi organize edilmişti ve uygulamalı anlatımlar sayesinde öğrenim çok daha etkili hale geldi. Eğitmenimizin ise anlatım tarzı oldukça faydalıydı; sorduğumuz her soruya hızlı, net ve anlaşılır yanıtlar almak süreci daha da etkili hale getirdi. Ayrıca, Techcareer ekibi de teknik sorunlar karşısında sundukları hızlı destekle bu deneyimi çok daha rahat ve keyifli hale getirdiler. Hem bu kadar etkili hem de eğlenceli geçen bu süreç için tüm Techcareer ekibine ve eğitmenlerine çok teşekkür ederim. ",
    },
    {
      imageSrc:
        "https://www.techcareer.net/_next/image?url=https%3A%2F%2Fcdn.gcp.techcareer.net%2FMehmet_Saltan_6efe6bc110%2FMehmet_Saltan_6efe6bc110.jpg&w=256&q=100",
      title: "Doğan Başaran",
      position: "Digital Marketing Bootcamp",
      description:
        "Techcareer.net tarafından düzenlenen bootcamp’e katılmanın benim için son derece verimli ve geliştirici olduğunu belirtmeliyim. Program boyunca edindiğim bilgiler kazandığım yetkinlikler teknin gelişimimi sağlarken kişisel gelişimime de oldukça önemli katkılar sağladı. Alanında uzman eğitmenimiz aynı zamanda çok da destekleyiciydi. Bu programdan edindiğim her şey kuşkusuz ki gelecekteki profesyonel adımlarımı yönlendirmede bana yol gösterici olacak. techcareer.net’in gelişim ve kariyer hedeflerine ulaşmada güçlü bir partner olduğunu düşünüyorum. ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef(null);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };


  const handleMouseDown = (e) => {
    const startX = e.pageX;
    const scrollLeft = cardContainerRef.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - startX;
      cardContainerRef.current.scrollLeft = scrollLeft - x;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="testimonial-fixed-layout">
      <div className="testimonial-frame">
        <div className="testimonial-layout">
          <div className="testimonial-text-layout">
            <h2>
              Bizi Katılımcılarımızdan<span> Dinle</span>
            </h2>
          </div>

          <div
            className="testimonial-card-container"
            ref={cardContainerRef}
            onMouseDown={handleMouseDown}
          >

            <button className="testimonial-card-button-left" onClick={handlePrevious}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.05388 12L18 20.3335L16.211 22L6.37043 12.8332C6.13324 12.6122 6 12.3125 6 12C6 11.6875 6.13324 11.3878 6.37043 11.1668L16.211 2L18 3.66647L9.05388 12Z"
                  fill="#00c26d"
                />
              </svg>
            </button>


            <CardWithCircle
              imageSrc={testimonials[currentIndex].imageSrc}
              title={testimonials[currentIndex].title}
              position={testimonials[currentIndex].position}
              description={testimonials[currentIndex].description}
            />
            <CardWithCircle
              imageSrc={
                testimonials[(currentIndex + 1) % testimonials.length].imageSrc
              }
              title={testimonials[(currentIndex + 1) % testimonials.length].title}
              position={testimonials[(currentIndex + 1) % testimonials.length].position}
              description={
                testimonials[(currentIndex + 1) % testimonials.length]
                  .description
              }
            />
          </div>


          <button className="testimonial-card-button-right" onClick={handleNext}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.9461 12L6 20.3335L7.78897 22L17.6296 12.8332C17.8668 12.6122 18 12.3125 18 12C18 11.6875 17.8668 11.3878 17.6296 11.1668L7.78897 2L6 3.66647L14.9461 12Z"
                fill="#00c26d"
              />
            </svg>
          </button>
        </div>
        <button
          className="testimonial-button-tertiary"
          onClick={() => window.open("https://www.techcareer.net/user-stories", "_blank")}
        >
          Tüm Yorumları Gör
        </button>
      </div>
    </div>
  );
};

export default Testimonials;