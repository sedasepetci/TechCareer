import React from "react";
import JobCard from "./JobCard";
import "./JobList.css";
const jobs = [
    {
        title: "Sistem ve Ağ Mühendisi",
        company: "Alışan Şirketler Grubu",
        location: "İstanbul (Asya) / Türkiye",
        workHours: "Tam Zamanlı",
        workModel: "İş Yerinde",
        logo: "/assets/images/Alisan.png",
        view: "https://www.techcareer.net/jobs/detail/sistem-ve-ag-muhendisi-4002489"
    },
    {
        title: "DevOps Academy at HangiKredi",
        company: "HangiKredi",
        location: "İstanbul / Türkiye",
        workHours: "Tam Zamanlı",
        workModel: "Uzaktan",
        logo: "/assets/images/HngKredi.png",
        view: "https://www.techcareer.net/jobs"
    },
    {
        title: "Senior .Net Yazılım Geliştirici",
        company: "B.E.K E-BİLGİ TEKNOLOJİ",
        location: "Bursa / Türkiye",
        workHours: "Tam Zamanlı",
        workModel: "Uzaktan",
        logo: "/assets/images/BlgTek.png",
        view: "https://www.techcareer.net/jobs/detail/senior-.net-yazlm-gelistirici-4002240"
    }
];

const JobList = () => {
    return (
        <div className="jobList-container">
            <div className="job-list-inner">
                <div className="job-list-header">
                    <h2>Güncel İş İlanları</h2> </div>
                <div className="job-list">
                    {jobs.map((job, index) => (
                        <JobCard key={index} {...job} />
                    ))}
                </div>
                <a href="https://www.techcareer.net/jobs" className="all-jobs-button">
                    Tüm İş İlanları
                </a>
            </div>
        </div>
    );
};

export default JobList;