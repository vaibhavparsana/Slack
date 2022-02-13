
import "./App.css";
import img_campaign_hero from "./Images/img-campaign-hero.jpg"
import slack_logo from "./Images/logo.png"
import carvana from "./Images/carvana.png"
import devacurl from "./Images/devacurl.png"
import fox from "./Images/fox.png"
import intuit from "./Images/intuit.png"
import kiva from "./Images/kiva.png"
import target_logo from "./Images/target-logo.png"
import lonelyplanet from "./Images/lonelyplanet.png"
import create_a_channel from "./Images/create-a-channel.jpg"
import what_are_channels from "./Images/what-are-channels.jpg"
import pause_notifications from "./Images/pause-notifications.jpg"
import add_external from "./Images/add-external-partners-to-a-channel.jpg"
import brainstorm_channel from "./Images/brainstorm-in-a-channel.jpg"
import img_promo_01 from "./Images/img-promo-what-is-slack.jpg"
import img_promo_02 from "./Images/img-promo-02.jpg"
import img_promo_03 from "./Images/img-promo-03.jpg"
import img_promo_04 from "./Images/img-promo-04.jpg"
import slack_logo_icon from "./Images/slack-logo-icon.png"
import video_thumbnail from "./Images/video-thumbnail.jpg"


function App() {
  return (
    <div className="container">
      <header className="">
        <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand" href="#">
            <img className="img-logo" src={slack_logo} alt="" />
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Product
                </a>
                <div class="dropdown-menu header-dropdown" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/#">Features</a>
                  <a className="dropdown-item" href="/#">Channels</a>
                  <a className="dropdown-item" href="/#">Digital HQ</a>
                  <a className="dropdown-item" href="/#">Integrations</a>
                  <a className="dropdown-item" href="/#">Security</a>
                  <a className="dropdown-item" href="/#">Slack Contact</a>
                  <a className="dropdown-item" href="/#">Customers</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="/#">Download Slack</a>
                </div>
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="#">Solutions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Enterprise</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Resources</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="#">Pricing</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <i class="bi bi-search mr-sm-2"></i>
              {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
            </form>
            <a class=" my-2 mx-4  my-sm-0 mr-sm-2" type="submit">Sign in</a>
            <button class="btn btn-outline-success navbtn-empty my-2 mx-2  my-sm-0 mr-sm-2" type="submit">Talks to sale</button>
            <button class="btn btn-outline-success btn-fill-color my-2 mx-2 my-sm-0" type="submit">Try for free</button>

          </div>
        </nav>
      </header>

      <div class="">
        <div class="card my-5 promo-box">
          <div class="row align-vert g-0">
            <div class="col-md-6">
              <div class="card-body promo-body promo-text">
                <SectionIntro title="Slack is your digital HQ" description="Transform the way you work with one place for everyone and everything you need to get stuff done." />
                <div className="">
                  <button class="btn btn-outline-success media-btns btn-fill-color promo-fill-btn " type="submit">Try for free</button>
                  <button class="btn btn-outline-success media-btns btn-fill-color promo-glg-btn  " type="submit"><i class="bi bi-google mx-2 "></i>sign up with google</button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mx-auto text-center ">
              <img src={img_campaign_hero} className="img-fluid w-100 rounded-start" alt="..." />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="row d-flex justify-content-around">
          <CompanyLogo imgSrc={fox} imgAlt="" />
          <CompanyLogo imgSrc={lonelyplanet} imgAlt="" />
          <CompanyLogo imgSrc={intuit} imgAlt="" />
          <CompanyLogo imgSrc={carvana} imgAlt="" />
          <CompanyLogo imgSrc={kiva} imgAlt="" />
          <CompanyLogo imgSrc={target_logo} imgAlt="" />
          <CompanyLogo imgSrc={devacurl} imgAlt="" />
        </div>
      </div>

      <div class="">
        <div class="card promo-box">
          <div class="row align-vert">
            <div className="col-md-6 text-center">
              <img src={video_thumbnail} className="" alt="" />
            </div>
            <div class="col-md-6">
              <div class="card-body diff-font">
                <SectionIntro title="Now is your moment to build a better tomorrow" description="We’ve seen what the future can be. Now it’s time to decide what it will be." />
                <button class="btn btn-outline-success  promo-fill-btn " type="submit">Watch Video</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    

    </div>
  );
}

function SectionIntro(props) {
  return <>
    <h2 className="card-title">{props.title}</h2>
    <p className="card-text">{props.description}</p>
  </>
}



function CompanyLogo(props) {
  return <div className="col">
    <img src={props.imgSrc} className="company-logo" alt={props.imgAlt} />
  </div>
}

export default App;
