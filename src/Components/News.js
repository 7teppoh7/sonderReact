import React from 'react';
import '../App.css';
import fornews4 from './img/fornews4.png';

function News(prop) {
    return (
        <div>
            <div id="newsgrad">
                <div id="newsblock1" class="newsblock">
                    <div id="cool">
                        <img src={fornews4} />
                    </div>
                    <section>
                        <article>
                            <div class="time">
                                <p id="number">28</p>
                                <p>Марта</p>
                            </div>
                            <div id="textnews"><p>ВЫСТУПЛЕНИЕ НА СТУДВЕСНЕ!!! 20:00, ОТВЕЗУТ НА ГАЗЕЛИ. ПРИХОДИТЕ ВСЕ, ВСЕХ ЖДЁМ. </p> </div>
                            <div id="moretext">
                                <a href=""> Подробнее </a>
                            </div>
                        </article>
                        <article>
                            <div class="time">
                                <p id="number">28</p>
                                <p>Марта</p>
                            </div>
                            <div id="textnews"><p>ВЫСТУПЛЕНИЕ НА СТУДВЕСНЕ!!! 20:00, ОТВЕЗУТ НА ГАЗЕЛИ. ПРИХОДИТЕ ВСЕ, ВСЕХ ЖДЁМ. </p> </div>
                            <div id="moretext">
                                <a href=""> Подробнее </a>
                            </div>
                        </article>
                        <article>
                            <div class="time">
                                <p id="number">28</p>
                                <p>Марта</p>
                            </div>
                            <div id="textnews"><p>ВЫСТУПЛЕНИЕ НА СТУДВЕСНЕ!!! 20:00, ОТВЕЗУТ НА ГАЗЕЛИ. ПРИХОДИТЕ ВСЕ, ВСЕХ ЖДЁМ. </p> </div>
                            <div id="moretext">
                                <a href=""> Подробнее </a>
                            </div>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default News;