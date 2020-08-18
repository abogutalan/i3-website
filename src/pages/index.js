import React, { Component } from "react"
import Layout from "../components/layout"
import IndexYDCarousel from "../components/indexYDCarousel"
// import PropTypes from 'prop-types'
import IndexEventCarousel from '../components/indexEventCarousel'

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className = "page-header header-filter" data-parallax="true"
          style={{ backgroundImage: `url('/myAssets/img/landingBG.jpg')` }}>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-6">
                <h1 className = "title">Interactive Ilm Institute</h1>
                <h4> Interactive Ilm Institute - your journey to a lifetime of empowerment. </h4>
                <br />
              </div>
              <div className = "col-md-12">
                <a href="https://www.youtube.com/watch?v=m026tqmJpU0" target="_blank"
                  className = "btn btn-danger btn-raised btn-lg" rel="noopener noreferrer">
                  <i className = "fa fa-play"></i> Watch Video
              </a>
                <a href="http://eepurl.com/dJjNcT" target="_blank" 
                className = "btn btn-danger btn-raised btn-lg" rel="noopener noreferrer">
                  <i className = "material-icons">subscriptions</i> Subscribe
              </a>
                <a href="./register.html" className = "btn btn-warning btn-raised btn-lg">
                  <i className = "material-icons">person_add</i> Register
              </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className = "main main-raised">
          <div className = "container">
            {/* <!-- Research Center advertisement --> */}
            <div className = "section">
              <div className = "row">
                <div className = "col-md-8 ml-auto mr-auto text-center">
                  <h2 className = "title">New Research Articles!</h2>
                  <h5 className = "description">
                    Head over to i3 Institute's new <a href="./articles.html"> Research Center</a> and check out the latest articles!
                  </h5>
                  {/* <!-- <div class="card card-plain card-blog">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="card-header card-header-image article-thumbnail-container">
                        <img class="img img-raised article-thumbnail-img"
                          src="./myAssets/img/Research Center/Articles/Article Pics/highTimeFor-1.jpg">
                          <div class="colored-shadow"
                            style="background-image: url(&quot;./assets/img/examples/card-blog4.jpg&quot;); opacity: 1;">
                          </div>
                                    </div>
                      </div>
                      <div class="col-md-8">
                        <h3 class="card-title">
                          <a href="./articles/highTimeFor.html">High time for the Muslims to Uncoil
                                            Themselves</a>
                        </h3>
                        <p class="card-description">
                          Coil means to twist or move into a circular or spiral course. It also means
                          to be disturbed or to be in turmoil. Uncoil means …
                                        <a href="./articles/highTimeFor.html"> Read More </a>
                        </p>
                        <p class="author">
                          by
                                        <a href="./fellows/zeshanshahbaz.html">
                            <b>Zeshan Shahbaz</b>
                          </a>, April 15, 2019
                                    </p>
                      </div>
                    </div>
                  </div> --> */}
                  <div className = "card card-plain card-blog">
                    <div className = "row">
                      <div className = "col-md-4">
                        <div className = "card-header card-header-image article-thumbnail-container">
                          <img className = "img img-raised article-thumbnail-img" alt="raised_image"
                            src="./myAssets/img/Research Center/Articles/Article Pics/quranShouldNot-1.jpg" />
                          <div className = "colored-shadow"
                            style={{ backgroundImage: `url('/assets/img/office2.jpg')`, opacity: 1 }}>
                          </div>
                        </div>
                      </div>
                      <div className = "col-md-8">
                        <h3 className = "card-title">
                          <a href="./articles/quranShouldNot.html">The Qur’an Should Not Have Been Preserved</a>
                        </h3>
                        <p className = "card-description">
                          When one considers the miracle of the Qur’an, a topic which is often
                          highlighted is that of its preservation and there is very good reason for
                          this. …
                        <a href="./articles/quranShouldNot.html"> Read More </a>
                        </p>
                        <p className = "author">
                          by <a href="./fellows/ijazahmed.html">
                            <b>Ijaz Ahmed</b>
                          </a>, May 17, 2019
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Research Center advertisement --> */}
            
            <IndexEventCarousel />

            <div className = "section text-center">
              <div className = "row">
                <div className = "col-md-8 ml-auto mr-auto">
                  <h2 className = "title">What is i3?</h2>
                  <h5 className = "description">
                    i3 Institute is an educational organization that provides classical Islamic education
                    through a unique, modern, and interactive college-level teaching approach.
                </h5>
                </div>
              </div>
              <div className = "features">
                <div className = "row">
                  <div className = "col-md-4">
                    <div className = "info">
                      <div className = "icon icon-info">
                        <i className = "material-icons">chat</i>
                      </div>
                      <h4 className = "info-title">Interactive</h4>
                      <p>
                        Our teaching style emphasizes interactivity between the student and the instructor.
                        We engage the students through multiple means. For example: open discussions,
                        problem
                        solving, presentations, group work and much more!
                        That’s why we keep our classes small in size and have a low teacher-student
                        ratio.
                    </p>
                    </div>
                  </div>
                  <div className = "col-md-4">
                    <div className = "info">
                      <div className = "icon icon-success">
                        <i className = "material-icons">verified_user</i>
                      </div>
                      <h4 className = "info-title">Intensive</h4>
                      <p>
                        Even though our courses are fun to attend, we do not sacrifice the high caliber of
                        knowledge we will be delivering.
                        The amount of knowledge you will be acquiring will be solid and the learning
                        experience can only be described as … intensive!
                    </p>
                    </div>
                  </div>
                  <div className = "col-md-4">
                    <div className = "info">
                      <div className = "icon icon-danger">
                        <i className = "material-icons">fingerprint</i>
                      </div>
                      <h4 className = "info-title">Inspiring</h4>
                      <p>
                        The whole organizational approach we take is to fulfill one goal in mind and that is
                        to inspire the young generation to learn their Deen and for the older crowd to feel
                        confident that it is not ever too late to learn Islam!
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "section">
              <div className = "row">
                <div className = "col-md-8 ml-auto mr-auto text-center">
                  <h2 className = "title">i3's Flagship Program: Young Da'ee (YD)</h2>
                  <h5 className = "description">
                    We invite you to our weekly in-person Islamic development program, where each class is
                    filled with an engaging presentation, group discussions, and Q/A at any time.
                    If you are a person that is active and want to make an impact in your community, here is the
                    perfect program just for you. This is not just an #Educational program. This is a platform
                    for #Action!
                </h5>
                </div>
              </div>
            </div>

            <IndexYDCarousel />

            <div className = "section text-center">
              <h2 className = "title">Our Main Shuyukh</h2>
              <div className = "team">
                <div className = "row">
                  <div className = "col-md-6">
                    <div className = "team-player">
                      <div className = "card card-plain">
                        <div className = "col-md-6 ml-auto mr-auto">
                          <img src="./myAssets/img/ShOstaMain2.jpg" alt="Thumbnail"
                            className = "img-raised rounded-circle img-fluid" />
                        </div>
                        <h4 className = "card-title">Sheikh Usta
                        <br />
                          <small className = "card-description text-muted">Founder, Instructor</small>
                        </h4>
                        <div className = "card-body">
                          <p className = "card-description">
                            Sheikh Usta has been teaching Islamic knowledge for over a decade.
                            Sheikh Usta is currently completing his Masters in Islamic Shariah, and
                            holds a Bachelors in Arabic and Islamic Studies.
                            He has learned from 11 prominent scholars including Dr. Abdul-Fattah Idris,
                            a leading Comparative Fiqh professor at al-Azhar.
                        </p>
                        </div>
                        <div className = "card-footer justify-content-center">
                          <a href="https://www.facebook.com/sheikh.osta"
                            className = "btn btn-just-icon btn-link btn-facebook"><i className = "fa fa-facebook-square"></i>
                            <div className = "ripple-container"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className = "col-md-6">
                    <div className = "team-player">
                      <div className = "card card-plain">
                        <div className = "col-md-6 ml-auto mr-auto">
                          <img src="./myAssets/img/ShRasoulMain2.jpg" alt="Thumbnail"
                            className = "img-raised rounded-circle img-fluid" />
                        </div>
                        <h4 className = "card-title">Sheikh Rasoul
                        <br />
                          <small className = "card-description text-muted">Instructor</small>
                        </h4>
                        <div className = "card-body">
                          <p className = "card-description">
                            Sheikh Rasoul is a teacher, a leader, and an active contributor to the
                            community. He currently serves as the principal at ISNA High School.
                            Shiekh Rasoul has memorized the Qur’an and conveys his knowledge through
                            khutbas and halaqas at various mosques within the GTA.
                          </p>
                        </div>
                        <div className = "card-footer justify-content-center">
                          <a href="https://www.facebook.com/salar.rasoul?__tn__=lCH-R&eid=ARBy36mQHXuPnsOD2tJV0WFlScK31apseC6iErB0eugERa_5aHLH_BT14npwI50Kk8T69hRWK9JHmn1c&hc
                                            _ref=ARTM5Tp23A08DAEU8YccJt7GFANfL-A4gAMyswVNYftBQ470HX8A3o47udeM2R9EsSo&__xts__[0]=68.ARCPe-VUPTmjBNv2-x1I9MNMcdF55OleagF8bQZUi2kKP1xMDTW4YPt4gFlE
                                            q3Jvuc9ePWgUGjt88RQ3V2p5TM1_XKJbg3HwhkJ_zWPaVhW2HEDAL4QmNnAjF0vKkxYxg50scDZXpOwCen9ZvUkuaQLF8r19Xp9yNweJjOTP4ukNeTaIpPtlXGatbuzvSs3ZZ4Qr52PPIXaSRg
                                            1f-ShaUy2wC9IVwJRPnkhPK17YiuoirTArxyYKIpDOcVX2jQwYqbSFCPl0aQYO8lmnHgz1ryIh2AD5d1OXI7f128LKS-BbxKQ0Hg"
                            className = "btn btn-just-icon btn-link btn-facebook">
                            <i className = "fa fa-facebook-square"></i>
                            <div className = "ripple-container"></div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className = "row text-center">
              <div className = "col-md-8 ml-auto mr-auto">
                <h2 className = "title">Connect With Us</h2>
                <h5 className = "description">
                  <a href="https://twitter.com/i3institute" class="btn btn-just-icon btn-twitter btn-round">
                    <i className = "fa fa-twitter"></i>
                  </a>
                  <a href="https://www.facebook.com/i3islamicinstitute"
                    className = "btn btn-just-icon btn-facebook btn-round">
                    <i className = "fa fa-facebook-square"></i>
                  </a>
                  <a href="https://www.instagram.com/i3institute/?utm_source=ig_profile_share&igshid=aulh50muid5n"
                    className = "btn btn-just-icon btn-instagram btn-round">
                    <i className = "fa fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/channel/UCKJanj2b-TEfkaTiSU7QOPg"
                    className = "btn btn-just-icon btn-youtube btn-round">
                    <i className = "fa fa-youtube-play"></i>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Layout >
    )
  }
}

export default HomePage
