import * as React from "react"
import Layout from "../components/layout";


const ContactPage = () => {
  return (
<Layout>

<section class="uk-section">
        <div class="uk-container">
            <div class="uk-text-center">
                <div class="uk-flex-center" data-uk-grid>
                    <div class="uk-width-auto">
                        <h2 class="uk-h3">Контакты
                            <hr class="hr"/>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="uk-section">
        <div class="uk-container">
            <div class="uk-child-width-1-2@m uk-flex-middle" data-uk-grid>
                <div>
                    <h1>Компания «БАРС»</h1>
                    <ul class="uk-list uk-text-lead">
                        <li>Россия, г. Пенза, ул. Проспект Строителей, 39В (отель "Азимут")</li>
                        <li><span><a href="" class="uk-link-reset">(8412) 25-42-16</a></span></li>
                        <li>Пн — Пт 08:00 — 17:00, суббота и воскресенье - выходной</li>
                    </ul>
                </div>
                <div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A138af5ad1ded39185f902b41726e6db855620dc525880f4cdfd186f178fecb20&amp;source=constructor" width="600" height="450" frameborder="0"></iframe>
                </div>
            </div>
        </div>
    </section>

</Layout>

  );
};


export default ContactPage;