import { Link } from "react-router-dom";
import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="header-container">

                <div className="logo">
                    <Link to="/">MyCompany</Link>
                </div>

                <nav className="menu">
                    <Link to="/">홈</Link>
                    <Link to="/board">게시판</Link>
                    <Link to="/notice">공지사항</Link>
                    <Link to="/mypage">마이페이지</Link>
                </nav>

                <div className="user-menu">
                    <Link to="/login">로그인</Link>
                </div>

            </div>
        </header>
    )
}

export default Header;