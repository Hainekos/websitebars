import * as React from "react";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const Product = ({ data }) => {
  const item = data.allStrapiProduct.edges[0].node;

  return (
    <div
      style={{
        backgroundColor: `white`,
      }}
    >
      <div class="uk-container uk-container-expand uk-padding-small">
        <div data-uk-grid>
          <div class="uk-width-expand">
            <Link to={"/" + item.category.slug} class="uk-link-reset">
              <span data-uk-icon="arrow-left"></span> В категорию товара
            </Link>
          </div>
          <div class="uk-width-auto">
            <Link
              to={"/" + item.category.slug}
              class="uk-link-reset"
              data-uk-icon="icon: close; ratio: 2"
            ></Link>
          </div>
        </div>
      </div>
      <main class="uk-section uk-animation-slide-bottom">
        <div class="uk-container">
          <div
            class="uk-child-width-1-2@s uk-grid-large uk-flex-middle"
            data-uk-grid
          >
            <div>
              <div
                id="slideshow"
                class="uk-position-relative uk-visible-toggle"
                tabindex="-1"
                data-uk-slideshow
              >
                <ul class="uk-slideshow-items uk-height-large" data-uk-lightbox>
                  {item.media.map((media) => (
                    <li>
                      <div data-uk-cover>
                        <GatsbyImage
                          image={
                            media.localFile.childImageSharp.gatsbyImageData
                          }
                          alt="/"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
                <a
                  class="uk-position-center-left uk-position-small uk-hidden-hover"
                  href="#"
                  data-uk-slidenav-previous
                  data-uk-slideshow-item="previous"
                ></a>
                <a
                  class="uk-position-center-right uk-position-small uk-hidden-hover"
                  href="#"
                  data-uk-slidenav-next
                  data-uk-slideshow-item="next"
                ></a>
              </div>
              <div
                class="uk-position-relative uk-visible-toggle uk-margin-small-top"
                tabindex="-1"
                data-uk-slider
              >
                <ul
                  id="slider"
                  class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-grid uk-grid-small"
                >
                  {item.media.map((media, index) => (
                    // console.log("" + index)
                    <li data-uk-slideshow-item={"" + index}>
                      <GatsbyImage
                        image={media.localFile.childImageSharp.gatsbyImageData}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
                <a
                  class="uk-position-center-left uk-position-small uk-hidden-hover"
                  href="#"
                  data-uk-slidenav-previous
                  data-uk-slider-item="previous"
                ></a>
                <a
                  class="uk-position-center-right uk-position-small uk-hidden-hover"
                  href="#"
                  data-uk-slidenav-next
                  data-uk-slider-item="next"
                ></a>
              </div>
            </div>
            <div>
              <h2 class="uk-margin-remove">{item.title}</h2>

              <span class="uk-text-meta">{item.manufacturer}</span>

              <div class="uk-padding-small uk-padding-remove-horizontal uk-text-large">
                {item.price} ₽
              </div>

              <p>
                <ReactMarkdown
                  className="uk-panel"
                  children={item.perfomance.data.perfomance}
                />
              </p>

              <p>
                <ReactMarkdown
                  className="uk-panel"
                  children={item.description.data.description}
                />
              </p>

              <ul class="uk-list">
                {item.material && (
                  <li>
                    <span> Материал: </span>
                    {item.material}
                  </li>
                )}

                {item.Type && (
                  <li>
                    <span>Тип: </span> {item.Type}
                  </li>
                )}

                {item.NailLength && (
                  <li>
                    <span>Длинна гвоздя: </span> {item.NailLength}
                  </li>
                )}

                {item.NailDiameter && (
                  <li>
                    <span>Диаметр гвоздя: </span> {item.NailDiameter}
                  </li>
                )}

                {item.QuantityPerPackage && (
                  <li>
                    <span>Количество в упаковке: </span>{" "}
                    {item.QuantityPerPackage}
                  </li>
                )}

                {item.CountryOfManufacture && (
                  <li>
                    <span>Страна производитель: </span>{" "}
                    {item.CountryOfManufacture}
                  </li>
                )}

                {item.Analogues && (
                  <li>
                    <span>Аналоги: </span> {item.Analogues}
                  </li>
                )}

                {item.gvozdezabivatel && (
                  <li>
                    <span> Гвоздезабиватель: </span>
                    {item.gvozdezabivatel}
                  </li>
                )}

                {item.nasadki && (
                  <li>
                    <span>Быстросменные насадки (ствол): </span> {item.nasadki}
                  </li>
                )}

                {item.akkumulator && (
                  <li>
                    <span>Аккумулятор: </span> {item.akkumulator}
                  </li>
                )}

                {item.zaryadka && (
                  <li>
                    <span>Зарядное устройство: </span> {item.zaryadka}
                  </li>
                )}

                {item.shestigrannik && (
                  <li>
                    <span>Шестигранник: </span> {item.shestigrannik}
                  </li>
                )}

                {item.kluchdlyaboyka && (
                  <li>
                    <span>Ключ для бойка: </span> {item.kluchdlyaboyka}
                  </li>
                )}
                {item.maslenka && (
                  <li>
                    <span>Масленка: </span> {item.maslenka}
                  </li>
                )}

                {item.remkomplekt && (
                  <li>
                    <span>Ремкомплект: </span> {item.remkomplekt}
                  </li>
                )}

                {item.zashitnieochki && (
                  <li>
                    <span>Защитные очки: </span> {item.zashitnieochki}
                  </li>
                )}

                {item.instructia && (
                  <li>
                    <span>Инструкция: </span> {item.instructia}
                  </li>
                )}

                {item.plastikoviykeys && (
                  <li>
                    <span>Пластиковый кейс: </span> {item.plastikoviykeys}
                  </li>
                )}

                {item.LWH && (
                  <li>
                    <span>ДxШxВ: </span> {item.LWH}
                  </li>
                )}

                {item.Weight && (
                  <li>
                    <span>Вес: </span> {item.Weight}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const query = graphql`
  query ($slug: String!) {
    allStrapiProduct(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          category {
            slug
          }
          ...Gvozdi
        }
      }
    }
  }
`;

export default Product;
