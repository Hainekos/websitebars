import * as React from "react"

export function onRenderBody({ setHeadComponents, setPostBodyComponents }) {
    setHeadComponents([
        <link
            key="uikitcss"
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.14.3/css/uikit.min.css" />,
    ]);
    setPostBodyComponents([
        <script
            key="uikitjs"
            type="text/javascript"
            src="https://unpkg.com/uikit@3.7.3/dist/js/uikit.min.js" />,
        <script
            key="uikiticonsjs"
            type="text/javascript"
            src="https://unpkg.com/uikit@3.7.3/dist/js/uikit-icons.min.js" />,
        <script
            
        />,
    ]);
}