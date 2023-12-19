let nkar = "https://static.wixstatic.com/media/84770f_b5b78cd83b6342199b7370a2ba6b9e06.jpg/v1/fill/w_1423,h_601,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b5b78cd83b6342199b7370a2ba6b9e06.jpg"
function Main() {
    return (
        <main>
            <div className="bg-image">
                <img src={nkar}/>
                <div className="weater">
                    <p>ОСЕНЬ И ЗИМА</p>
                    <button>В магазин</button>
                </div>
            </div>
            <div className="free">
                <p>БЕСПЛАТНАЯ ДОСТАВКА ПО РОССИИ</p>
            </div>
            <div className="allyear">
                <h2>КРУГЛЫЙ ГОД</h2>
                <div></div>
                <p>Обязательные вещи в вашем гардеробе</p>
            </div>
            <div className="nkarner">
                <div className="card">
                    <img src="https://static.wixstatic.com/media/cda177_f95b14c95d6446de847782f0b6fd0027.png/v1/fill/w_298,h_354,al_c,q_90,usm_0.66_1.00_0.01/cda177_f95b14c95d6446de847782f0b6fd0027.webp"/>
                    <button>ЮБКА МИДИ</button>
                </div>
                <div className="card unical_card">
                    <p>СКИДКИ</p>
                    <img src="https://static.wixstatic.com/media/cda177_b5a795ade21b41d38cadd836824e6768.jpg/v1/fill/w_298,h_410,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cda177_b5a795ade21b41d38cadd836824e6768.jpg"/>
                </div>
                <div className="card">
                    <img src="https://static.wixstatic.com/media/84770f_9a81715dcb4b43fa936d243fcd90e2a9.png/v1/fill/w_298,h_354,al_c,q_90,usm_0.66_1.00_0.01/84770f_9a81715dcb4b43fa936d243fcd90e2a9.webp"/>
                    <button>ВИНТАЖНЫЕ ОЧКИ</button>
                </div>
            </div>
        </main>
    )
}

export default Main