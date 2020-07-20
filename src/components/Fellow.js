import React from "react";

const Fellow = ({ name, title, description, imgURL, facebook_url, twitter_url,
  instagram_url, youtube_url, google_url, linkedin_url, slug }) => (
    
      <div className="row">
        <div className="col-md-6">
          <div className="card card-profile card-plain">
            <div className="row">
              <div className="col-md-5">
                <div className="card-header card-header-image">
                  <a id='link' href={slug + name}>
                    <img className="img" alt="alt value" src={imgURL} />
                  </a>
                  <div className="colored-shadow" style={{ backgroundImage: 'url("/assets/img/faces/card-profile1-square.jpg")', opacity: 1 }}>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <h6 className="card-category text-muted">{title}</h6>
                  <p className="card-description">{description}</p>
                </div>
                <div className="card-footer">
                  {facebook_url ? <a href={facebook_url}
                    className="btn btn-just-icon btn-link btn-facebook"><i className="fa fa-facebook-square" />
                  </a> : null}
                  {google_url ? <a href={google_url}
                    class="btn btn-just-icon btn-link btn-google"><i class="fa fa-google"></i>
                  </a> : null}
                  {twitter_url ? <a href={twitter_url}
                    className="btn btn-just-icon btn-link btn-twitter"><i className="fa fa-twitter" />
                  </a> : null}
                  {linkedin_url ? <a href={linkedin_url}
                    className="btn btn-just-icon btn-link btn-linkedin"><i className="fa fa-linkedin" />
                  </a> : null}
                  {youtube_url ? <a href={youtube_url}
                    className="btn btn-just-icon btn-youtube btn-round"><i className="fa fa-youtube-play"></i>
                  </a> : null}
                  {instagram_url ? <a href={instagram_url}
                    className="btn btn-just-icon btn-instagram btn-round"><i className="fa fa-instagram"></i>
                  </a> : null}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  )

export default Fellow