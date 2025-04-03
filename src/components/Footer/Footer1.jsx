import React from "react";
import "./Footer1.css";
import { Link } from "react-router-dom";
const Footer1 = () => {
  return (
    <>
    <div className="F1_container">
            <div className="column">
            <h3>KHOA ĐÀO TẠO</h3>
            <ul>
                <li><Link to={"/khoa-cn-tt"} className="link">Khoa Công nghệ Thông tin</Link></li>
                <li><Link to={"/khoa-kt-ct"} className="link">Khoa Kỹ thuật Công trình</Link></li>
                <li><Link to={"/khoa-cn-tp"} className="link">Khoa Công nghệ Thực phẩm</Link></li>
                <li><Link to={"/khoa-dien-dientu"} className="link">Khoa Điện - Điện tử</Link></li>
                <li><Link to={"/khoa-co-khi"} className="link">Khoa Cơ khí</Link></li>
                <li><Link to={"/khoa-qt-kd"} className="link">Khoa Quản trị kinh doanh</Link></li>
                <li><Link to={"/khoa-design"} className="link">Khoa Design</Link></li>
            </ul>
            </div>
            <div className="column">
            <h3>TUYỂN SINH</h3>
            <ul>
                <li><Link to={"/"} className="link">Trình độ Thạc sinh</Link></li>
                <li><Link to={"http://daotao2.stu.edu.vn/thongtintuyensinh/"} className="link">Tuyển sinh Đại học</Link></li>
            </ul>
            </div>
            <div className="column">
            <h3>SINH VIÊN</h3>
            <ul>
                <li><Link to={"http://daotao3.stu.edu.vn/tracuutotnghiep/"} className="link">Tra cứu Dữ liệu Tốt Nghiệp</Link></li>
                <li><Link to={"/bieu-mau"} className="link">Biểu mẫu</Link></li>
                <li><Link to={"http://daotao1.stu.edu.vn/"} className="link">Cổng Thông tin Đào tạo</Link></li>
                <li><Link to={"/"} className="link">Nghiên cứu Khoa học</Link></li>
            </ul>
            </div>
            <div className="column">
            <h3>TÍNH NĂNG THƯỜNG DÙNG</h3>
            <ul>
                <li><Link to={"/"} className="link">Đăng nhập</Link></li>
                <li><Link to={"https://accounts.google.com/v3/signin/identifier?continue=http%3A%2F%2Fmail.google.com%2Fa%2Fstu.edu.vn%2F&hd=stu.edu.vn&sacu=1&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-332307488%3A1743659082908670"} className="link">Email: @stu.edu.vn</Link></li>
                <li><Link to={"/https://accounts.google.com/v3/signin/identifier?flowEntry=AddSession&flowName=GlifWebSignIn&hd=student.stu.edu.vn&sacu=1&service=mail&dsh=S-2013176839%3A1743657989542467"} className="link">Email: @student.stu.edu.vn</Link></li>
                <li><Link to={"/"} className="link">Tuyển sinh & Hướng nghiệp</Link></li>
                <li><Link to={"/ban-do-den-stu"} className="link">Đường dẫn tới STU</Link></li>
                <li><Link to={"/"} className="link">Nghiên cứu Khoa học</Link></li>
                <li><Link to={"https://thuvien.stu.edu.vn/"} className="link">Thư viện điên tử</Link></li>
            </ul>
            </div>
        </div>
    </>
  );
};

export default Footer1;
