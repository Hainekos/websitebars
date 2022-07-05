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
                        <h1 class="uk-h3">Категории каталога
                            <hr class="hr"/>
                        </h1>
                    </div>
                </div>
                <span></span>
            </div>
        </div>
    </section>
<Catalog/>
</Layout>

  );
};

export default CatalogPage;