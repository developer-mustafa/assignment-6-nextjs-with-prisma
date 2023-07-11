import './Header.css'

const Header = (props) => {


  return (
    <>
      <div className="header-container">

        <div className="header-title p-2">
          <h1>{props.title}</h1>
        </div>

      
      </div>
    </>
  );
};

export default Header;