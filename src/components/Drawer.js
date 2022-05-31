function Drawer() {
    return (
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className=" d-flex justify-between mb-30 ">
            Кошик
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mp-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>1 200грн.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mp-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>1 200грн.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>

            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }}
                className="cartItemImg"
              ></div>

              <div className="mr-20 flex">
                <p className="mp-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>1 200грн.</b>
              </div>

              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>

          <div className="cardTotalBlock">
            <ul>
              <li>
                <span>Загалом</span>
                <div></div>
                <b>2 400 грн.</b>
              </li>

              <li>
                <span>Податок 5%:</span>
                <div></div>
                <b>120 грн.</b>
              </li>
            </ul>

            <button className="greenbutton">
              Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Drawer;