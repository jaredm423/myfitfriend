import { useNavigate } from 'react-router-dom';

const NavBar = () => {

  const navigate = useNavigate();

  const handleNavButtonClick = (path) => {
    navigate(path);
  }

    return (
    <div className="Nav-div">
      <nav className="Nav-bar">
        <button className="Home-btn" onClick={() => handleNavButtonClick('/')}>Home</button>
        <button className="Meals-btn" onClick={() => handleNavButtonClick('/Meals')}>Meals</button>
        <button className="Weight-btn" onClick={() => handleNavButtonClick('/Weight')}>Weight</button>
        {/*<button className="Exercise-btn" onClick={() => handleNavButtonClick('/Exercise')}>Exercise</button>*/}
      </nav>
    </div>
    );
  }
  export default NavBar