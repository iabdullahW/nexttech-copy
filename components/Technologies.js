"use client"
import React, { useState } from "react";
import Image from "next/image";
import "./Technologies.css";
import c from "./../public/assets/technology/c++.png";
import java from "./../public/assets/technology/java.png";
import javascript from "./../public/assets/technology/javascript.png";
import laravel from "./../public/assets/technology/laravel.png";
import php from "./../public/assets/technology/php.jpeg";
import phyton from "./../public/assets/technology/phyton.png";
import postgre from "./../public/assets/technology/postgre.png";
import reactIcon from "./../public/assets/technology/react.png";
import ruby from "./../public/assets/technology/ruby.png";
import swift from "./../public/assets/technology/swift.png";
import tailwind from "./../public/assets/technology/tailwind.png";
import typescript from "./../public/assets/technology/typescript.png";
import mysql from "./../public/assets/technology/mysql.png";
import mongodb from "./../public/assets/technology/mongodb.png";
import aws from "./../public/assets/technology/aws.png";
import docker from "./../public/assets/technology/docker.png";
import flutter from "./../public/assets/technology/flutter.png";
import reactnative from "./../public/assets/technology/reactnative.png";
import django from "./../public/assets/technology/django.png";
import spring from "./../public/assets/technology/spring.png";

const TechnologiesTabs = () => {
    const [activeTab, setActiveTab] = useState("WebPlatform");

    const technologies = {
        WebPlatform: [
            { name: "PHP", icon: php },
            { name: "JavaScript", icon: javascript },
            { name: "PostgreSQL", icon: postgre },
            { name: "Swift", icon: swift },
            { name: "TypeScript", icon: typescript },
            { name: "Python", icon: phyton },
            { name: "Tailwind", icon: tailwind },
            { name: "Java", icon: java },
            { name: "Ruby", icon: ruby },
            { name: "C++", icon: c },
            { name: "ReactJs", icon: reactIcon },
            { name: "Laravel", icon: laravel },
        ],
        Databases: [
            { name: "MySQL", icon: mysql },
            { name: "MongoDB", icon: mongodb },
        ],
        CloudDevOps: [
            { name: "AWS", icon: aws },
            { name: "Docker", icon: docker },
        ],
        MobileApps: [
            { name: "Flutter", icon: flutter },
            { name: "React Native", icon: reactnative },
        ],
        OtherFrameworks: [
            { name: "Django", icon: django },
            { name: "Spring", icon: spring },
        ],
    };

    return (
        <div className="pt- technologies-tabs" >
            <h2>
                We Use <span>Technologies</span>
            </h2>
            <div className="tabs max-sm:flex max-sm:flex-col">
                {Object.keys(technologies).map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="tab-content max-sm:flex max-sm:flex-col max-sm:items-center">
                {technologies[activeTab]?.map((tech) => (
                    <div
                        className="p-1 bg-white tech-item rounded-2xl "
                        key={tech.name}
                    >
                        <Image src={tech.icon} alt={tech.name} />
                        <p className="font-bold">{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnologiesTabs;
