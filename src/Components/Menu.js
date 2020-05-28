import React from 'react';
import '../App.css';
import mainLogo from './img/logo.png';
import {Link} from "react-router-dom";

var a = 1


window.onload = function () {
	if (localStorage.getItem("theme") != null) {
		var theme = localStorage.getItem("theme");
		if (theme === "white") {
			a = 1;
			change();
		}
	}
}

function change() {
	a++;
	var menu = document.getElementById("menu");
	var elements = menu.getElementsByTagName("a");
	var menuM = document.getElementById("iphonemenu");
	if (a === 2) {
		document.getElementsByTagName("body")[0].style.backgroundColor = "white";
		document.getElementById("iphone").style.backgroundColor = "white";

		for (var i = 0; i < elements.length; i++) {
			elements[i].style.color = "black";
			if (i === (elements.length - 1)) {
				elements[i].innerHTML = "ЗАТЕМНИТЬ";
			}
		}
		let grad = document.getElementById("indexart");
		if (grad) grad.style.background = "white";
		document.getElementById("info1").style.color = "black";
		document.getElementById("links").style.color = "black";
		a = 0;
		localStorage.setItem("theme", "white");
	} else {
		document.getElementsByTagName("body")[0].style.backgroundColor = "black";
		document.getElementById("iphone").style.backgroundColor = "black";
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.color = "grey";
			if (i === (elements.length - 1)) {
				elements[i].innerHTML = "ОСВЕТИТЬ";
			}
		}
		let grad = document.getElementById("indexart");
		if (grad) grad.style.background = "radial-gradient(60% 50%, #CCCCCC, black)";
		document.getElementById("info1").style.color = "#CCCCCC";
		document.getElementById("links").style.color = "#CCCCCC";
		localStorage.setItem("theme", "black");
	}
}


function Menu(prop) {
	return (
		<div>
			<div id="forheader" class="forheader1">
				<div></div>
				<div class="iphonelogo" id="iphonelogo1">
					<a href="/"><img src={mainLogo} /></a>
				</div>
			</div>
			<header id="iphone">
				<div id="void"></div>
				<div id="logo">
					<img src={mainLogo} />
				</div>
				<nav id="topmenu">
					<ul id="menu">
						<Link to="/"> ГЛАВНАЯ</Link>
						<Link to="/news"> НОВОСТИ</Link>
						<Link to="/photo"> ГАЛЕРЕЯ</Link>
						<Link to="/fest"> КОНЦЕРТЫ</Link>
						<Link onClick={e => change(e, prop)}> ОСВЕТИТЬ</Link>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Menu;