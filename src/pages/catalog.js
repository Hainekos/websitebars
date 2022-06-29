import * as React from "react"
import Catalog from "../components/catalog";
import Layout from "../components/layout";


const CatalogPage = () => {
  return (
<Layout>
<section class="uk-section">
        <div class="uk-container">
            <div class="uk-text-center">
                <div class="uk-flex-center" data-uk-grid>
                    <div class="uk-width-auto">
                        <h2 class="uk-h3">Каталог товаров
                            <hr class="hr"/>
                        </h2>
                    </div>
                </div>
                <span>Для современного мира убеждённость некоторых оппонентов влечет за собой процесс внедрения и
                    модернизации поэтапного и последовательного развития общества. Каждый из нас понимает очевидную
                    вещь: высококачественный прототип будущего проекта создаёт предпосылки для распределения внутренних
                    резервов и ресурсов.</span>
            </div>
        </div>
    </section>
<Catalog/>
</Layout>

  );
};

export default CatalogPage;