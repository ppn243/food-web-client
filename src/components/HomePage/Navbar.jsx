import './navbar.css';
import img from '../../assets/AT10-1.png' 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-container'>
          <img className='img_nav' src={img} alt={"img"}></img>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/">Giới thiệu</Link>
            </li>
            <li>
              <Link to="/">Sản phẩm</Link>
            </li>
            <li>
              <Link to="/">Liên hệ</Link>
            </li>
            <li>
              <Link to="/at10admin">Hướng dẫn</Link>
            </li>
            <li>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;