import { Link } from "gatsby"
import * as React from "react"


const Footer = () => {
  return (

    <footer class="Footer uk-section uk-margin-large-top uk-background-secondary uk-light">
        <div class="uk-container uk-text-center">
            <div class="uk-h1 uk-margin-remove uk-text-uppercase">БАРС</div>
            <div class="uk-h3 uk-margin-remove uk-padding">Пн — Пт 08:00 — 17:00, суббота и воскресенье - выходной</div>
            <ul class="uk-subnav uk-margin-remove-top uk-flex-center" data-uk-margin>
                <li><Link to="/gvozdi" class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Монтажные гвозди</Link></li>
                <li><Link to="/instrument" class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Монтажные газовые пистолеты</Link></li>
                <li><Link to="/prom-rukav" class="uk-button uk-button-default uk-button-small uk-border-pill" href="">расходники ПРОМРУКАВ</Link></li>
                <li><Link to="/about" class="uk-button uk-button-default uk-button-small uk-border-pill">О компании</Link></li>
                <li><Link to="/contact" class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Контакты</Link></li>
            </ul>
            <div class="uk-margin-large-top">Компания «БАРС» <a class="uk-link-reset">+(8412) 25-42-16</a></div>
        </div>
    </footer>

  )
}

export default Footer
