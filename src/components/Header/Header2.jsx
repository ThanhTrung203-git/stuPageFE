import React from "react";
import "./Header2.css"
import stuLogo from "../../assets/logo1.png"
import ceaLogo from "../../assets/logo2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import stuCode from "../../assets/stuCode.png"
const Header2 = () => {
    return (
        <div className="H2_container">
            <div className="column-1">
                <img src={stuLogo} alt="" />
            </div>
            <div className="column-2">
            <img src={ceaLogo} alt="" />
            </div>
            <div className="column-3">
                <div className="search_container">
                    <input type="text" className="input_search" placeholder="Gõ thông tin cần tìm" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_search" />
                </div>
                <div className="stuCode_container">
                    <span>Mã Trường</span>
                    <img src={stuCode} alt="" />
                </div>
            </div>
        </div>
    );
} 

export default Header2;