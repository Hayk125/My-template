
function Footer() {
    return (
        <footer>
            <div className="footer__container">
                <div className="card1">
                    <p className="p0">БУДЕМ НА СВЯЗИ</p>
                    <div className="icons">
                    <ion-icon name="logo-vk" className="icon"></ion-icon>
                    <ion-icon name="logo-facebook"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                </div>
                <div className="card1">
                    <p className="p1">ДАВАЙТЕ ДРУЖИТЬ</p>
                    <input type="email" placeholder="Добавьте эл. почту*"/>
                    <button>ОК</button>
                    <p className="p2">© 2035 МАГАЗИН ЖЕНСКОЙ ОДЕЖДЫ «ВАЛЕНТИНА».</p>
                    <p className="p3">Сайт создан на Wix.com</p>
                </div>
                <div className="card1">
                    <p className="p4">НУЖНА ПОМОЩЬ?</p>
                    <p className="p5">+7 (495) 000-00-00</p>
                    <p className="p6">info@mysite.ru</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer