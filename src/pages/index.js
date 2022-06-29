import { Link, graphql } from "gatsby";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Accordion from "../components/accordion.js";
import Catalog from "../components/catalog.js";
import Layout from "../components/layout.js";
import Gvozdi from "./gvozdi.js";

const IndexPage = ({data}) => {
  return (
    <Layout>
      <section class="uk-section uk-padding-remove-vertical">
        <div class="uk-container uk-container-expand-right">
          <div class="uk-grid-collapse uk-flex-middle" data-uk-grid>
            <div class="uk-width-1-3@m">
              <div class="uk-padding uk-padding-remove-left">
                <h2 class="uk-h3 uk-margin-remove">
                  Выбранный нами инновационный путь не позволил союзу
                  развалиться!
                </h2>
                <div class="uk-padding uk-padding-remove-horizontal">
                  Разнообразный и богатый опыт говорит нам, что граница обучения
                  кадров предоставляет широкие возможности для своевременного
                  выполнения сверхзадачи!
                </div>
                <Link
                  class="uk-button uk-button-large uk-button-primary uk-border-pill"
                  to="/catalog"
                >
                  Каталог товаров
                </Link>
              </div>
            </div>
            <div class="uk-width-2-3 uk-visible@m">
              <StaticImage src="../images/baner-main.png" alt="/" />
            </div>
          </div>
        </div>
      </section>

      <Catalog />
      <section class="uk-section">
        <div class="uk-container">
          <div class="uk-text-center">
            <div class="uk-flex-center" data-uk-grid>
              <div class="uk-width-auto">
                <h2 class="uk-h3">
                  Усиленные и кованные гвозди
                  <hr class="hr" />
                </h2>
              </div>
            </div>
            <span>
              Использование в работе усиленных и кованных гвоздей для монтажного
              пистолета позволяет ускорить в 2 раза монтаж натяжных потолков,
              проведение электропроводки или крепление теплоизоляции. Выбирая
              гвозди VAPP - Вы работаете напрямую с производителем - получая
              лучшую стоимость с НДС, на расходные материалы для монтажных
              пистолетов TOUA и HYBEST
            </span>
          </div>
        </div>
      </section>
      <section class="uk-section uk-padding-remove-top">
        <div class="uk-container">
          <div
            class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-row-large uk-margin-large-top"
            data-uk-grid
            uk-height-match="target: > a > .uk-card > .uk-card-body > div"
          >
            {data.allStrapiProduct.edges.map(({ node }) => (
              <Link to={"/product/" + node.slug} class="uk-link-reset">
                <div class="uk-card uk-card-default uk-border-rounded uk-box-shadow-small uk-text-center">
                  <div class="uk-card-media-top">
                    <div
                      class="uk-inline-clip uk-transition-toggle"
                      tabindex="0"
                    >
                      <GatsbyImage
                        image={
                          node.media[0].localFile.childImageSharp
                            .gatsbyImageData
                        }
                        alt="/"
                      />

                      {node.media[1] && (
                        <GatsbyImage
                          class="uk-transition-scale-up uk-position-cover"
                          image={
                            node.media[1].localFile.childImageSharp
                              .gatsbyImageData
                          }
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                  <div class="uk-card-body">
                    <div>
                      <h4 class="uk-card-title uk-margin-small-bottom">
                        {node.title}
                      </h4>
                      <div>
                        {node.Type} {node.QuantityPerPackage}
                      </div>
                      <div class="uk-padding-small"> {node.price}₽</div>
                    </div>
                    <button class="uk-button uk-button-primary uk-border-rounded">
                      Подробнее
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section class="uk-section">
        <div class="uk-container">
          <div class="uk-padding uk-background-primary uk-light">
            <div class="uk-child-width-1-3@s uk-grid-divider" data-uk-grid>
              <div>
                <div class="uk-panel">
                  <h4>Усиленные гвозди для TOUA</h4>
                  <p>
                    Усиленные гвозди VAPP выполнены из высококачественной 60
                    стали. Длина гвоздя составляет от 16 до 38 мм, толщина 2,9 -
                    3,0 мм. Строительные гвозди покрыты белым или желтым цинком
                    - что надежно защищает их от коррозии, поставляются в
                    пластиковой кассете по 10 шт. Усиленные гвозди легко
                    отличить от простых, диаметр усиленного гвоздя 3,0 мм,
                    против 2,7 мм у простого. Усиленные гвозди применяются для
                    монтажа: к кирпичу, к поверхностям из легкого бетона,
                    твинблока, шлакоблока и газоблока, а также к немассивному
                    стальному основанию толщиной до 2-4 мм и различным
                    общестроительным работам.
                  </p>
                </div>
              </div>
              <div>
                <div class="uk-panel">
                  <h4>Кованные гвозди для TOUA</h4>
                  <p>
                    Кованые гвозди VAPP выполнены из высококачественной 60
                    стали. Длина гвоздя составляет от 16 до 25 мм. Кованые
                    гвозди в форме пули - имеют плавное утолщение от острия к
                    шляпке гвоздя, по изогнутой кривой. Острие такой формы,
                    можно получить прокатыванием наконечника гвоздя,
                    специальными сдавливающими роликами. Это позволяет создать
                    максимальное уплотнение гвоздя у его острия. Данный тип
                    гвоздя легко отличить простых и усиленных гвоздей, по его
                    форме - форма пули, с плавным переходом к острию гвоздя.
                    Кованые гвозди по бетону для пистолетов TOUA применяются для
                    монтажа к бетонным плитам перекрытий высокой марки
                    прочности, металлическим балкам и профилям (толщиной не
                    более 6 мм).
                  </p>
                </div>
              </div>
              <div>
                <div class="uk-panel">
                  <h4>Подробности о категории</h4>
                  <p>
                    Разнообразный и богатый опыт говорит нам, что граница
                    обучения кадров предоставляет широкие возможности для
                    своевременного выполнения сверхзадачи! Значимость этих
                    проблем настолько очевидна, что базовый вектор развития в
                    значительной степени обусловливает важность кластеризации
                    усилий. Картельные сговоры не допускают ситуации, при
                    которой представители современных социальных резервов
                    заблокированы в рамках своих собственных рациональных
                    ограничений.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Accordion />
    </Layout>
  );
};

export const query = graphql`
   query {
    allStrapiProduct (filter: {category: {name: {eq: "Монтажные гвозди"}}}) {
      edges {
        node {
        ...Gvozdi
      }
    }
    }
  }
`



export default IndexPage;
