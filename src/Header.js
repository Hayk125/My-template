import korzina from "./image/korzina.png";

function Header() {
    return(
        <header>
        <div className="header__container">
            <nav className="navbar">
                <ul className="menu">
                    <li className="menu_list"><a href="#" className="menu_link unical_link">ВАЛЕНТИНА</a></li>
                    <li className="menu_list"><a href="#" className="menu_link">Главная</a></li>
                    <li className="menu_list"><a href="#" className="menu_link">Магазин</a></li>
                    <li className="menu_list"><a href="#" className="menu_link">Распродажа</a></li>
                    <li className="menu_list"><a href="#" className="menu_link">Помощь покупателям</a></li>
                    <li className="menu_list"><a href="#" className="menu_link">Адреса</a></li>
                    <li className="menu_list"><a href="#" className="menu_link"><img src={korzina}/></a></li>
                </ul>
            </nav>
        </div>
        </header>
    )
}
export default Header