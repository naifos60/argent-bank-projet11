import logo from "../../asset/img/argentBankLogo.png";


function Header(){
    return(
    <header className="header">
        <nav className="header_main-nav">
      <a className="header_main-nav-logo" href="./">
        <img
          className="header_main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="header_main-nav-item" href="./signIn">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    </header>
    )
}

export default Header;