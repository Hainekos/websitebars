import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Catalog = () => {
    return (
        <section class="uk-section">
        <div class="uk-container">
            <div class="uk-child-width-1-3@s uk-grid-small" data-uk-grid>
            <Link to="/gvozdi">
                    <div class="uk-inline uk-dark">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <StaticImage class="uk-border-rounded uk-transition-scale-up uk-transition-opaque"
                                src="../images/vapp-mini.webp" alt=""/>
                            <div class="uk-overlay-primary uk-position-cover uk-border-rounded">
                                <div class="uk-position-top-right uk-padding-small"><span
                                        uk-icon="icon: chevron-right; ratio: 1.45"></span></div>
                                <div class="uk-position-top uk-padding-small">
                                    <h3 class="uk-h4 uk-margin-remove">Монтажные гвозди</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                <Link to="/prom-rukav">
                    <div class="uk-inline uk-dark">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <StaticImage class="uk-border-rounded uk-transition-scale-up uk-transition-opaque"
                                src="../images/rashodnik.png" alt=""/>
                            <div class="uk-overlay-primary uk-position-cover uk-border-rounded">
                                <div class="uk-position-top-right uk-padding-small"><span
                                        uk-icon="icon: chevron-right; ratio: 1.45"></span></div>
                                <div class="uk-position-top uk-padding-small">
                                    <h3 class="uk-h4 uk-margin-remove">Расходные материалы</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to="/instrument">
                    <div class="uk-inline uk-dark">
                        <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                            <StaticImage class="uk-border-rounded uk-transition-scale-up uk-transition-opaque"
                                src="../images//HYBEST40a.webp" alt=""/>
                            <div class="uk-overlay-primary uk-position-cover uk-border-rounded">
                                <div class="uk-position-top-right uk-padding-small"><span
                                        uk-icon="icon: chevron-right; ratio: 1.45"></span></div>
                                <div class="uk-position-top uk-padding-small">
                                    <h3 class="uk-h4 uk-margin-remove">Инструмент</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </section>
    )
}

export default Catalog