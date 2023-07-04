import moon from "../../assets/images/icon-moon.svg";

const Header = () => {
  return (
    <div className="">
      <h1>TODO</h1>
      <button>
        <img src={moon} alt="moon" />
      </button>
    </div>
  );
};

export default Header;
