import React from 'react';
import '../App.css';
import vk from './img/vk.png';
import insta from './img/insta.png';

function MyFooter(prop) {
    return (
        <div>
            <footer>
                <div class="info" id="info1">
                    <div></div>
                    <p>Следите за нами в социальных сетях: </p>
                    <div></div>
                    <div></div>
                    <div>
                        <a href="https://vk.com/viasonder" target="_blank"><img src={vk} /></a>
                        <img src={insta} />
                    </div>

                </div>
                <div id="links" class="links1">
                    <p>©2019 ВИА "СОНДЭР". Все права защищены, совпадения случайны</p>

                </div>
            </footer>
        </div>
    )
}

export default MyFooter;