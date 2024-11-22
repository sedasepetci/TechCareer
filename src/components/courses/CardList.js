import React from "react";
import EducationCard from "./EducationCard";
import "./CardList.css";

const CardList = () => {
    const courses = [
        {
            title: "React Native ile Mobil Uygulama Geliştirme",
            description: "React Native, cross-platform mobile uygulama geliştirme framework'üdür.",
            tags: ["React", "Framework"],
            level: "Orta",
            time: "17 saat",
            certificate: "Var",
            instructor: "Hamit Mızrak",
            instructorImage: "/assets/images/HmtMzrk.png", /* Buraya profil fotoğrafı yolu */
            image: "/assets/images/edu1.png",
            review: "https://www.techcareer.net/courses/react-native-egitimi"
        },
        {
            title: "Uygulamalarla SQL Eğitimi",
            description: "SQL, veritabanı yönetimi ve veri sorgulama için kullanılan bir dildir. Bu eğitimde, SQL'in temel prensiplerini ve pratik uygulamalarını...",
            tags: ["SQL", "Veri Tabanı"],
            level: "Orta",
            time: "10 saat",
            certificate: "Var",
            instructor: "Hamit Mızrak",
            instructorImage: "/assets/images/HmtMzrk.png",/* Buraya profil fotoğrafı yolu */
            image: "/assets/images/edu2.png",
            review: "https://www.techcareer.net/courses/uygulamalarla-sql-egitimi"
        },

        {
            title: "Unity ile Oyun Geliştirme",
            description: "Unity, oyun geliştirmek için kullanılan güçlü ve esnek bir oyun motorudur. Bu eğitimde, Unity'nin temel prensiplerini ve pratik uygulamalarını...",
            tags: ["Unity", "Oyun Geliştirme"],
            level: "Orta",
            time: "6 saat",
            certificate: "Var",
            instructor: "Hamit Mızrak",
            instructorImage: "/assets/images/AhmtKya.png", /* Buraya profil fotoğrafı yolu */
            image: "/assets/images/edu3.png",
            review: "https://www.techcareer.net/courses/unity-ile-oyun-gelistirme"
        },
    ];

    return (
        <div className="cardlist-container">
            <div className="cardlist-card-list-inner">
                <div className="card-list-header">
                    <h2>Eğitimler</h2>
                </div>
                <div className="cardlist-card-list">
                    {courses.map((course, index) => (
                        <EducationCard key={index} {...course} />
                    ))}
                </div>
                <a href="https://www.techcareer.net/courses" className="all-jobs-button">
                    Tüm Eğitimler
                </a>
            </div>
        </div>
    );
};

export default CardList;
