import React from 'react';
import '../App.css';
import one from './img/1.jpg';
import two from './img/2.jpg';
import seven from './img/7.jpg';
import four from './img/4.jpg';
import five from './img/5.jpg';
import six from './img/6.jpg';
import nine from './img/9.jpg';
import eleven from './img/11.jpg';
import three from './img/3.jpg';

function Photo(prop) {
    return (
        <div>
            <div class="gallerey" id="gallerey1">
                <div id="void"></div>
                <section>
                    <div></div>
                    <div><img src={one}/></div>
                    <div><img src={two}/></div>
                    <div><img src={seven}/></div>
                </section>
                <section>
                    <div></div>
                    <div><img src={four}/></div>
                    <div><img src={five}/></div>
                    <div><img src={six}/></div>
                </section>
                <section>
                    <div></div>
                    <div><img src={nine}/></div>
                    <div><img src={eleven}/></div>
                    <div><img src={three}/></div>
                </section>
            </div>
        </div>
    )
}

export default Photo;