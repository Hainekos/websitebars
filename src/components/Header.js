import { Link } from "gatsby"
import * as React from "react"

const Header = () => {
    return (

    //     <header class="Header uk-container uk-container-expand uk-background-secondary">
    //     <nav class="uk-navbar-container uk-navbar-transparent uk-light" data-uk-navbar>
    //         <div class="uk-navbar-left">
    //             <a class="uk-navbar-item uk-logo" href="https://webproviderngo.github.io/vapp.group/">БАРС</a>
    //             {/* <Link to="/" class="uk-navbar-item uk-logo">БАРС</Link> */}
    //             <div class="uk-navbar-right uk-visible@m">
    //             <ul class="uk-navbar-nav">
    //                 <li><a href="about.html">О нас</a></li>
    //                 <li><a href="catalog.html">Каталог</a></li>
    //                 <li><a href="contact.html">Контакты</a></li>
    //                 <li><a href="tel:+7 000 000-00-00">+7 000 000-00-00</a></li>
    //             </ul>
    //         </div>
    //         </div>
    //         <div class="uk-navbar-right uk-visible@m">
    //             <ul class="uk-navbar-nav">
    //                 <li><Link to="/about">О нас</Link></li>
    //                 <li><Link to="/catalog">Каталог</Link></li>
    //                 <li><Link to="/contact">Контакты</Link></li>
    //                 <li><a href="tel:(8412) 25-42-16">+(8412) 25-42-16</a></li>
    //             </ul>
    //         </div>
    //         <div class="navbar-right uk-hidden@m"><button class="uk-navbar-toggle" data-uk-navbar-toggle-icon
    //                 type="button" data-uk-toggle="target: #offcanvas-flip"/></div>
    //     </nav>
    // </header>
    <div>
    <header class="Header uk-container uk-container-expand uk-background-secondary">
        <nav class="uk-navbar-container uk-navbar-transparent uk-light" data-uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="/">БАРС</a>
                {/* <Link to="/" class="uk-navbar-item uk-logo">БАРС</Link> */}
            </div>
            <div class="uk-navbar-right uk-visible@m">
                <ul class="uk-navbar-nav">
                    
                <li><Link to="/about">О нас</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                <li><a href="tel:(8412) 25-42-16">+(8412) 25-42-16</a></li>
                </ul>
            </div>
            <div class="uk-navbar-right uk-hidden@m"><button class="uk-navbar-toggle" data-uk-navbar-toggle-icon
                    type="button" data-uk-toggle="target: #offcanvas-flip"/></div>
        </nav>
    </header>

    <div id="offcanvas-flip" data-uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar uk-flex uk-flex-column">

            <button class="uk-offcanvas-close" type="button" data-uk-close></button>

            <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
               
            <li><Link to="/about">О нас</Link></li>
                <li><Link to="/catalog">Каталог</Link></li>
                <li><Link to="/contact">Контакты</Link></li>
                <li><a href="tel:(8412) 25-42-16">+(8412) 25-42-16</a></li>
               
                <div class="uk-h3 uk-margin-medium-top"><a href="tel:(8412) 25-42-16">+(8412) 25-42-16</a></div>
            </ul>

        </div>
    </div>
    </div>
    )
}

export default Header