import React from 'react';
import '../App.css';
import logo2 from './img/logo2.png';

function Main(prop) {
    return (
        <div>
            <div id="photo">
            </div>
            <div class="downlogo" id="downlogo1">
                <img src={logo2} />
            </div>
            <article id="indexart" class="indexart1">
                <div></div>
                <div>
                    <p><b>
                        <p>У нас был один дикий барабанщик, два неудержимых гитариста, харизматичный басист, клавишник и, конечно, обворожительная солистка!</p>
                        <p>Поэтому рады представить сайт нашего коллектива, где вы сможете следить за нашей бандой!  </p>
                        <p>Всегда с вами, гр."SONDER"!  </p>
                    </b></p>
                </div>
            </article>
        </div>
    )
}

export default Main;