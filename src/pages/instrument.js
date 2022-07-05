import * as React from "react"
import Category from "../components/category";
import { graphql, Link  } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";



const Instrument = ({data}) => {
  // // {data.allStrapiCategory.edges[2].node.products.map(products => {
  // //   console.log(products)
  // })}
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
            <span>Инструмент</span>
          </li>
        </ul>
        <div class="uk-flex-center" data-uk-grid>
          <div class="uk-width-auto">
            <h2 class="uk-h3">
              Инструмент
              <hr class="hr" />
            </h2>
          </div>
        </div>
        <span>
        <h2>ГАЗОВЫЕ МОНТАЖНЫЕ ПИСТОЛЕТЫ</h2>
        </span>
      </div>
    </div>
  </section>
  <section class="uk-section uk-padding-remove-top">
        <div class="uk-container">
          <div
            class="uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-row-large uk-margin-large-top"
            data-uk-grid
            data-uk-height-match="target: > a > .uk-card">
            {data.allStrapiProduct.edges.map(({ node }) => (
              <Link to={"/product/" + node.slug} class="uk-link-reset">
                <div class="uk-card uk-card-default uk-border-rounded uk-box-shadow-small uk-text-center">
                <div class="uk-card-body">
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
                    <div>
                      <h4 class="uk-card-title uk-margin-small-bottom">
                        {node.title}
                      </h4>
                      <div>
                        {node.Type} {node.QuantityPerPackage}
                      </div>
                      <div class="uk-padding-small"> {node.price} ₽</div>
                    </div>
                    </div>
                    <div class="uk-card-footer">
                    <button                      
                      class="uk-button uk-button-primary uk-border-rounded">
                      Подробнее
                    </button>
                    </div>
                  
                </div>                
              </Link>
            ))}
          </div>
        </div>
      </section>
</Category>
  );
};

export const query = graphql`
  query {
    allStrapiProduct (filter: {category: {name: {eq: "Инструмент"}}}) {
      edges {
        node {
        ...Gvozdi
      }
    }
    }
  }
`

export default Instrument;