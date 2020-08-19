import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="76x76" href="/myAssets/img/logo.png" />
        <link rel="icon" type="image/png" href="/myAssets/img/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>i3 Institute</title>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
          name='viewport' />
        {/* <!--     Fonts and icons     --> */}
        <link href="/assets/css/material-kit.css?v=2.1.1" rel="stylesheet" />

        <link rel="stylesheet" type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes} className = "landing-page sidebar-collapse">
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <footer style={{ backgroundColor: 'black', marginTop: '20px' }} className = "footer">
          <div className = "container">
            <nav className = "pull-left">
              <ul>
                <li>
                  <a href="https://twitter.com/i3institute" className = "btn btn-just-icon btn-twitter btn-round">
                    <i className = "fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/i3islamicinstitute"
                    className = "btn btn-just-icon btn-facebook btn-round">
                    <i className = "fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/i3institute/?utm_source=ig_profile_share&igshid=aulh50muid5n"
                    className = "btn btn-just-icon btn-instagram btn-round">
                    <i className = "fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCKJanj2b-TEfkaTiSU7QOPg"
                    className = "btn btn-just-icon btn-youtube btn-round">
                    <i className = "fa fa-youtube-play"></i>
                  </a>
                </li>
                <li>

                </li>
              </ul>
            </nav>
            <div className = "copyright pull-right">
              ©
              2019 Interactive Ilm Institute
            </div>
          </div>
        </footer>
        {/* <!--   Core JS Files   --> */}
        <script src="/assets/js/core/jquery.min.js" type="text/javascript"></script>
        <script src="/assets/js/core/popper.min.js" type="text/javascript"></script>
        <script src="/assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
        <script src="/assets/js/plugins/moment.min.js"></script>
        {/* <!--	Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select --> */}
        <script src="/assets/js/plugins/bootstrap-selectpicker.js" type="text/javascript"></script>
        {/* <!--	Plugin for Small Gallery in Product Page --> */}
        <script src="/assets/js/plugins/jquery.flexisel.js" type="text/javascript"></script>
        {/* <!-- Plugins for presentation and navigation  --> */}
        <script src="/assets/demo/modernizr.js" type="text/javascript"></script>
        <script src="/assets/demo/vertical-nav.js" type="text/javascript"></script>
        {/* <!-- Place this tag in your head or just before your close body tag. --> */}
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        {/* <!-- Control Center for Material Kit: parallax effects, scripts for the example pages etc --> */}
        <script src="/assets/js/material-kit.js?v=2.1.1" type="text/javascript"></script>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
