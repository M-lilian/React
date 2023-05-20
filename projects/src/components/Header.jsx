import Logo from "../assets/logo.png";
export const Header = () => {
    return (
        <header>
        <div className="logo">
        <img src={Logo} alt="Company's logo" />
        <span>Taskmate</span>
        </div>
        </header>
    )
}
