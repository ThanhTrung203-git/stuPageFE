import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header3.css";

const menuItems = [
  { title: "Trang chủ", link: "/" },
  {
    title: "Giới thiệu", link: "/gioi-thieu" },
  
  {
    title: "Đào tạo",
    subItems: [
      { title: "Biểu đồ giảng dạy & Học tập", link: "/bieu-do-giang-day-va-hoc-tap" },
      { title: "Cẩm nang", link: "/cam-nang" },
      { title: "Chương trình đào tạo", link: "/chuong-trinh-dao-tao" },
    ],
  },
];

const Header3 = () => {
  const [openIndex, setOpenIndex] = useState(null);


  return (
    <div className="menu">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="menu-item"
          onMouseEnter={() => item.subItems && setOpenIndex(index)}  // Chỉ áp dụng hover cho mục có submenu
          onMouseLeave={() => item.subItems && setOpenIndex(null)}  // Chỉ áp dụng hover cho mục có submenu
        >
          {item.link ? (
            <Link to={item.link} className="menu-title">
            {item.title}
          </Link> // Sử dụng Link thay vì navigate để điều hướng
          ) : (
            <>
              {item.title}
              {openIndex === index && (
                <div className="submenu">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.link}>
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Header3;
