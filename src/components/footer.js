import * as React from "react"


const Footer = () => {
  return (

    <footer class="Footer uk-section uk-margin-large-top uk-background-secondary uk-light">
        <div class="uk-container uk-text-center">
            <div class="uk-h1 uk-margin-remove uk-text-uppercase">Название</div>
            <div class="uk-h3 uk-margin-remove uk-padding">Пт — Вс 00:00 — 00:00</div>
            <ul class="uk-subnav uk-margin-remove-top uk-flex-center" data-uk-margin>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Категория 1</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Категория 2</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Категория 3</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Категория 4</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Новая модель
                        организационной</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Никто не вправе
                        осуждать</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">О компании</a></li>
                <li><a class="uk-button uk-button-default uk-button-small uk-border-pill" href="">Контакты</a></li>
            </ul>
            <div class="uk-margin-large-top">© 2022 Компания «Название» <a class="uk-link-reset" href="">+7 000
                    000-00-00</a></div>
        </div>
    </footer>

  )
}

export default Footer
