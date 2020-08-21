import React from 'react'
import Layout from '../components/layout'
// import '../../../static/myAssets/stylesheets/navbar.css'

const Global = ({data}) => (
  <Layout>
  <div className = "landing-page sidebar-collapse">
        <div id="navbarDiv">
        </div>
        <div className = "page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url("/myAssets/img/Locations/world.jfif")'}}>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-8 ml-auto mr-auto text-center">
                <div className = "brand">
                  <h1 className = "title">Islamic Studies &amp; Leadership Program</h1>
                  <h4 className = "bolded">Building Principled Muslim Leaders Globally!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className = "main main-raised">
          <div className = "section container">
            <div style={{textAlign: 'center'}}>
              <iframe title="youtubeVideo" allow="fullscreen" id="vid" style={{width: '75%', minWidth: '290px', height: '500px'}} src="https://www.youtube.com/embed/WfnLFlmYAdY?autoplay=0" alt="Promo-Video">
              </iframe>
              {/* <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScRAbJ4DJXz9aO3GvtJoSWhmMrLe4eYEUT1B4qxr-wPy4q_dw/viewform">
                    <button style="width: 50%; min-width: 290px;" class="btn btn-primary btn-round btn-success btn-lg">
                        Register For Young Da'ee Now!
                    </button>
                </a> */}
              <br />
              <br />
              <div className = "row">
                <a href="./global.html#1" style={{margin: '10px auto', fontSize: '30px'}} className = "btn btn-warning btn-round btn-lg">
                  <span className = "bolded">Sign Up!</span>
                </a>
              </div>
            </div>
            <div className = "section-space" />
            <div className = "row">
              <div className = "col-md-8 ml-auto mr-auto text-center">
                <h2 className = "title">3 Main Things About The Program</h2>
              </div>
            </div>
            <div className = "row">
              <div className = "col-md-4">
                <div className = "info info-horizontal">
                  <div className = "icon icon-rose">
                    <i className = "material-icons">build</i>
                  </div>
                  <div className = "description">
                    <h4 className = "info-title">1. Building Leaders</h4>
                    <p>
                      We nurture regular individuals into aspiring
                      leaders in their respective communities, friend circles, and families.
                    </p>
                  </div>
                </div>
              </div>
              <div className = "col-md-4">
                <div className = "info info-horizontal">
                  <div className = "icon icon-rose">
                    <i className = "material-icons">library_books</i>
                  </div>
                  <div className = "description">
                    <h4 className = "info-title">2. Instilling Life Skills</h4>
                    <p>
                      We empower Muslims to be critical thinkers, be aware
                      of the challenges of today, and encourage refining life skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className = "col-md-4">
                <div className = "info info-horizontal">
                  <div className = "icon icon-rose">
                    <i className = "material-icons">beenhere</i>
                  </div>
                  <div className = "description">
                    <h4 className = "info-title">3. Principled Learning</h4>
                    <p>
                      We unapologetically implement and teach values and
                      principles
                      adopted from the Quran and the Sunnah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className = "col-md-8 ml-auto mr-auto text-center">
              <div className = "section-space" />
              <h2 className = "title">A Peek Into The Curriculum</h2>
              <h5 className = "description">
                <br />
                <p>
                  We cover everything from
                  <span className = "black-text">
                    Beliefs, Islamic Law, Foundations of Islam,
                    Spirituality,
                    Tafseer, Ayaat, Hadeeth, Business, Seerah, Dawah, Language, and critical issues
                  </span>
                  facing the
                  Ummah.
                </p>
                <br />
                <p>Learn the main sciences of Islam and how Islam is relevant to our lives and society today.</p>
                <br />
                <p>We teach Muslims how to communicate Islamic concepts to others and focus on how to
                  build on individual and community strengths, i.e. communication, leadership development,
                  critical
                  thinking through active learning, etc.
                </p>
                <br />
                <p>This is an integral and unique part of the program. There will be 5 main modules offered throughout the year:
                </p>
              </h5>
              <div className = "bolded">Aqeedah</div>
              <div className = "bolded">Tazkiyah, Fiqh and Dawah</div>
              <div className = "bolded">Leadership &amp; Personal Development</div>
              <div className = "bolded">Usool Al-Fiqh and Uloom Al-Quran</div>
              <div className = "bolded">Seerah &amp; Usool Al-Hadith</div>
              <br />
              <h5 className = "description">
                Sign up today to <span className = "black-text">transform your life</span>  and become a practicing and <span className = "black-text">principled global leader</span>.
              </h5>
            </div>
            <br />
            <div className = "row">
              <a href="./global.html#1" style={{margin: '10px auto', fontSize: '30px'}} className = "btn btn-warning btn-round btn-lg">
                <span className = "bolded">Sign Up!</span>
              </a>
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
                        The time commitment is only 2 hours per week for 8 weeks, per module.
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
                        {/* Please click
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScRAbJ4DJXz9aO3GvtJoSWhmMrLe4eYEUT1B4qxr-wPy4q_dw/viewform">here</a>
                                    to register. */}
                        See below!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <span id={1} style={{color: 'transparent'}}>.</span>
            </div>
            <div style={{textAlign: 'center'}}>
              <iframe className = "airtable-embed airtable-dynamic-height" title="airtable" src="https://airtable.com/embed/shrf4eEAAuLgIVZkR?backgroundColor=red" frameBorder={0} onmousewheel width="100%" height={533} style={{background: 'transparent', border: '1px solid #ccc'}} />
            </div>
            <br />
            <div className = "card card-collapse">
              <div className = "card-header" role="tab" id="furtherQuestions">
                <h3 className = "mb-0">
                  <a className = "signup" style={{fontSize: 'inherit'}} data-toggle="collapse" href="#furtherQuestionsCollapsible" aria-expanded="true" aria-controls="furtherQuestionsCollapsible">
                    Got More Questions?
                    <i className = "material-icons">keyboard_arrow_down</i>
                  </a>
                </h3>
              </div>
              <div id="furtherQuestionsCollapsible" className = "collapse show" role="tabpanel" aria-labelledby="furtherQuestions">
                <div className = "card-body">
                  <div className = "description question">
                    <h4 className = "info-title">How much time commitment is required from me as a student?</h4>
                    <p>
                      The time commitment is only 2 hours per week for 8 weeks, per module.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What is the format of this program?</h4>
                    <p>
                      5 modules of various subjects. Each module is 8 weeks. The modules are offered at
                      different times throughout the year.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What skills can I expect upon the completion of this course?</h4>
                    <p>
                      Students who complete this course can expect:
                    </p>
                    <ul>
                      <li>To have a solid foundation of the key sciences of the deen</li>
                      <li>The ability to define leadership, the characteristics of a good leader, and an
                        understanding of how to follow the prophetic leadership model</li>
                      <li>To have a better understanding of what Allah requests from indivudual muslims and
                        the
                        muslim ummah as a whole</li>
                      <li>To gain a community of like-minded muslims all over the globe</li>
                    </ul>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What will my weekly schedule look like?</h4>
                    <p>
                      One 2 hour online class per week, weekly readings, a weekly assignment, and community
                      discussions to foster learning.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What are the course prerequisites?</h4>
                    <p>
                      A positive attitude and an eagerness to learn the deen of Allah!
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">Will I receive a certificate upon completion of each module?</h4>
                    <p>
                      Yes.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">Where can I find the books required for the course?</h4>
                    <p>
                      We will provide them to students.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">When does the course start and finish?</h4>
                    <p>
                      Each module is 8 weeks long. Modules will be offered throughout the year, please view
                      our website for the module dates and timings.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">Is this course available to everyone, or only those who live in North
                      America?</h4>
                    <p>
                      This course is available to everyone.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What are the system requirements for this course?</h4>
                    <p>
                      A reliable internet connection, a video camera, a working mic, and Zoom (video
                      conferencing app).
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What happens if I miss a live session?</h4>
                    <p>
                      Students are encouraged to attend live online classes however classes will be recorded
                      for students who miss a class.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">What language is this program offered in?</h4>
                    <p>
                      Classes are offered in English. Our team is working on offering classes in other
                      languages in the future.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">I want to enrol in one of the classes but the timing conflicts with
                      my schedule.</h4>
                    <p>
                      Please view our website for other classes of this program.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">How much does this program cost?</h4>
                    <p>
                      This is a free program for the benefit of the muslim community. If you appreciate the
                      value that you receive from this program then we would appreciate a donation to our
                      institute so that we can continue to work towards the pleasure of Allah and serve the
                      muslim ummah.
                      You can make a donation <a href="https://www.i3institute.ca/donate.html">here</a>.
                    </p>
                  </div>
                  <div className = "description question">
                    <h4 className = "info-title">I have registered for the program, what next?</h4>
                    <p>
                      Thank you for registering. Please expect to hear from our team soon with further class
                      details.
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <div className = "row">
                <a href="./global.html#1" style={{margin: '10px auto', fontSize: '30px'}} className = "btn btn-warning btn-round btn-lg">
                  <span className = "bolded">Sign Up!</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
  )


  export default Global