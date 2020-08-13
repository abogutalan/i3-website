import React from 'react'
import Layout from '../../components/layout'

const Register = () => (
  <Layout>

  <div className = "landing-page sidebar-collapse">
    <div id="navbarDiv">
    </div>
    <div className = "page-header header-filter header-small" data-parallax="true" style={{ backgroundImage: 'url("/myAssets/img/RegistrationCover.jpg")' }}>
      <div className = "container">
        <div className = "row">
          <div className = "col-md-8 ml-auto mr-auto text-center">
            <div className = "brand">
              <h1 className = "title">Young Da'ee (YD) Registration</h1>
              <h4>Register for the YD Program today!</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className = "main main-raised">
      <div className = "section">
        <h1 className = "title text-center">Sign Up Today! </h1>
        
        <div style={{ textAlign: 'center' }}>
          <iframe title="youtubeVideo" allow="fullscreen" id="vid" height={315} style={{ width: '50%', minWidth: '290px' }} src="https://www.youtube.com/embed/WfnLFlmYAdY?autoplay=0" alt="Promo-Video">
          </iframe>
        </div>
        <div className = "features-2">
          <div className = "text-center">
            <h3 className = "title">Frequently Asked Questions</h3>
          </div>
          <div className = "row">
            <div className = "col-md-4 ml-auto">
              <div className = "info info-horizontal">
                <div className = "icon icon-info">
                  <i className = "material-icons">timer</i>
                </div>
                <div className = "description">
                  <h4 className = "info-title">How much time commitment is required from me as a student?</h4>
                  <p>
                    The time commitment will be only 2 hours per week, to attend classes.
                </p>
                </div>
              </div>
            </div>
            <div className = "col-md-4 mr-auto">
              <div className = "info info-horizontal">
                <div className = "icon icon-success">
                  <i className = "material-icons">money_off</i>
                </div>
                <div className = "description">
                  <h4 className = "info-title">How much does the whole program cost?</h4>
                  <p>
                    Alhamdulillah thanks to our beloved Shuyukh's philosophy, we'd say it is quite
                    reasonable ... it is absolutely free! :)
                </p>
                </div>
              </div>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-4 ml-auto">
              <div className = "info info-horizontal">
                <div className = "icon icon-success">
                  <i className = "material-icons">book</i>
                </div>
                <div className = "description">
                  <h4 className = "info-title">Does this program cover the basics?</h4>
                  <p>
                    Absolutely. This program assumes no prerequisite knowledge and will teach you the
                    basics of Islam and the Islamic way of thinking about life, from scratch.
                </p>
                </div>
              </div>
            </div>
            <div className = "col-md-4 mr-auto">
              <div className = "info info-horizontal">
                <div className = "icon icon-rose">
                  <i className = "material-icons">check_box</i>
                </div>
                <div className = "description">
                  <h4 className = "info-title">Alright I'm sold, so how do I register?</h4>
                  <p>
                  See below!
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>
            *<span style={{ fontWeight: 'bold' }}>Important Note: </span>If you are here because you'd like to sign up for our Global Online program, please
          click <a href="./global.html">here</a>.
        </p>
          <iframe className = "airtable-embed airtable-dynamic-height" title="airtable" 
          src="https://airtable.com/embed/shrWkLrBVrXn8aK1g?backgroundColor=red"
          frameBorder="0" onmousewheel width="100%" height="3468" 
          style={{ background: 'transparent', border: '1 solid #ccc', width: '50%', minWidth: '290' }} ></iframe>
        </div>
      </div>
    </div>
  </div>
  
  </Layout>
)


export default Register