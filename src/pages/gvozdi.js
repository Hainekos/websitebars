import * as React from "react";
import { graphql, Link  } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Category from "../components/category"
import Accordion from "../components/accordion";

const Gvozdi = ({data}) => {
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
            <Link to="/catalog">Каталог</Link>
          </li>
          <li>
            <span>Монтажные гвозди</span>
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
        <h2>ДЮБЕЛЬ ГВОЗДИ ДЛЯ ГАЗОВЫХ МОНТАЖНЫХ ПИСТОЛЕТОВ TOUA и HYBEST</h2>
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
                                  
                    <div class="uk-inline-clip uk-transition-toggle"
                          tabindex="0">

                      <GatsbyImage image={node.media[0].localFile.childImageSharp.gatsbyImageData} alt="/"/>

                      {node.media[1] && (<GatsbyImage class="uk-transition-scale-up uk-position-cover"
                                    image={node.media[1].localFile.childImageSharp.gatsbyImageData} alt=""/>)}
                      
                      {node.media[2] && (<GatsbyImage class="uk-transition-scale-up uk-position-cover"
                                      image={node.media[1].localFile.childImageSharp.gatsbyImageData} alt=""/>)}  
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
                    <button
                      
                      class="uk-button uk-button-primary uk-border-rounded"
                    >
                      Подробнее
                    </button>
                  </div>
                  
                  
                </div>
                
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Accordion/>
    </Category>
  );
}

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
export const fragmentGvozdi = graphql`
fragment Gvozdi on STRAPI_PRODUCT {
  id
  title
  manufacturer
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
  gvozdezabivatel
  nasadki
  akkumulator
  zaryadka
  shestigrannik
  kluchdlyaboyka
  maslenka
  remkomplekt
  zashitnieochki
  instructia
  plastikoviykeys
  LWH
  Weight
  media {
    localFile {
      publicURL
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}

`



export default Gvozdi



