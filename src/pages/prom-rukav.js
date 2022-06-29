import { Link } from "gatsby";
import * as React from "react"
import Accordion from "../components/accordion";
import Category from "../components/category";
import Item from "../components/item";




const PromRukav = () => {
  return (
<Category>
<section class="uk-section">
    <div class="uk-container">
      <div class="uk-text-center">
        <ul class="uk-breadcrumb">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/catalog">Каталог товаров</Link>
          </li>
          <li>
            <span>Название категории</span>
          </li>
        </ul>
        <div class="uk-flex-center" uk-grid>
          <div class="uk-width-auto">
            <h2 class="uk-h3">
              Расходные материалы
              <hr class="hr" />
            </h2>
          </div>
        </div>
        <span>
          Для современного мира убеждённость некоторых оппонентов влечет за
          собой процесс внедрения и модернизации поэтапного и последовательного
          развития общества. Каждый из нас понимает очевидную вещь:
          высококачественный прототип будущего проекта создаёт предпосылки для
          распределения внутренних резервов и ресурсов.
        </span>
      </div>
    </div>
  </section>
  <Accordion/>

</Category>

  );
};

export const query = graphql`
  query MyQuery {
    allStrapiProduct {
      edges {
        node {
          title
          slug
          perfomance {
            data {
              perfomance
              id
            }
          }
          description {
            data {
              id
              description
            }
          }
          price
          material
          Type
          NailLength
          NailDiameter
          QuantityPerPackage
          CountryOfManufacture
          Analogues
          LWH
          Weight
          media {
            id
            localFile {
              id
              childImageSharp {
                id
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default PromRukav;