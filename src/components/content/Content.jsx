import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./newsItem";
import "./content.css";

const ContentPage = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await axios.get("https://stupage.onrender.com/news/");
                if (response.data.status === 200) {
                    const sortedNews = response.data.data.sort((a, b) => b.id - a.id); // Sắp xếp theo ID giảm dần
                    setNews(sortedNews);
                }
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu:", error);
            }
        };

        fetchNewsData();
    }, []);

    if (news.length === 0) return <p>Đang tải tin tức...</p>;

    return (
        <div className="news-container">
            <div className="news-header">
                <img src="../../src/assets/news.png" alt="news-icon" className="news-icon" />
                <span className="news-title">Tin Tức STU</span>
            </div>
            <div className="news-list">
                {news.slice(0, 5).map((item, index) => (
                    <NewsItem key={item.id} item={item} isFirst={index === 0} />
                ))}
            </div>
        </div>
    );
};

export default ContentPage;
