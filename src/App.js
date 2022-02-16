
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
            <div className="col-md-6 ">
              <img src={video_thumbnail} className="img-fluid" alt="" />
            </div>
            <div class="col-md-6">
              <div class="card-body p-0 pt-4">
                <SectionIntro title="Now is your moment to build a better tomorrow" description="We’ve seen what the future can be. Now it’s time to decide what it will be." />
                <button class="btn btn-outline-success  promo-fill-btn media-btns" type="submit">Watch Video</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="feature-section">
        <div class="card margin-set">
          <div class="row">
            <div className="col-md-6 adj-col">
              <div class="card-body promo-body">
                <SectionIntro title="Move faster by organizing your work life" description="The key to productivity in Slack is organized spaces called channels—a different one for everything you’re working on. With all the people, messages and files related to a topic in one place, you can move a whole lot faster." />
                <SectionLink linkDesc="Learn more about channels" />
                <div class="row adj-link-card">
                  <div class="col-md-6 ">
                    <SectionCard imgSrc={what_are_channels} imgAlt="" cardText="What is a Channel?" cardTime="0:15" />
                  </div>
                  <div class="col-md-6  ">
                    <SectionCard imgSrc={create_a_channel} imgAlt="" cardText="How to create a Channel" cardTime="0:15" />                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 txt-align hideVideo">
              <SectionVideo alignment="float-end" videoSrc="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-01.mp4" videoImg="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-01-static.jpg" />
            </div>
          </div>
        </div>

        <div class="card margin-set">
          <div class="row">
            <div class="col-md-6 hideVideo">
              <SectionVideo videoSrc="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-02.mp4"
                videoImg="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-02-static.jpg" />
            </div>
            <div className="col-md-6 adj-col">
              <div class="card-body promo-body">
                <SectionIntro title="Focus your time, on your own terms" description="Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time, and find answers in conversations from across your company." />
                <SectionLink linkDesc="Support a more flexible work schedule in Slack" />
                <div class="row adj-link-card">
                  <div class="col-md-6 ">
                    <SectionCard imgSrc={pause_notifications} imgAlt="" cardText="How to pause notifications" cardTime="0:15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card margin-set">
          <div class="row">
            <div className="col-md-6 adj-col">
              <div class="card-body promo-body">
                <SectionIntro title="Simplify teamwork for everyone" description="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place." />
                <SectionLink linkDesc="Learn how to work with external partners in Slack" />
                <div class="row adj-link-card">
                  <div class="col-md-6 ">
                    <SectionCard imgSrc={add_external} imgAlt="" cardText="Work with external partners using Slack Connect" cardTime="0:15" />
                  </div>
                  <div class="col-md-6  ">
                    <SectionCard imgSrc={brainstorm_channel} imgAlt="" cardText="How to brainstorm in a channel" cardTime="0:15" />
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 txt-align hideVideo">
              <SectionVideo alignment="float-end" videoSrc="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-03.mp4"
                videoImg="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/static/img-section-03-static.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <h2 className="process-title">Get started with Slacks</h2>
        <div className="container mt-5">
          <div className="row">
            <StartCard cardNum="1" cardTitle="Sign up" cardDesc="Create a new Slack workspace in just a few moments. It’s free to try for teams of any size." />
            <StartCard cardNum="2" cardTitle="Invite your coworkers" cardDesc="Slack is better together (no, really, it’s a bit underwhelming by yourself), and it’s easy to invite your team." />
            <StartCard cardNum="3" cardTitle="Try it out" cardDesc="Run a project, coordinate with your team, or just talk it out. Slack is a blank canvas for teamwork." />
          </div>
        </div>
        <div class="card-deck my-5">
          <StartCardType imgSrc={img_promo_01} imgAlt="" cardOver="ON-DEMAND" cardSmallText="Webinar" cardTitle="What is Slack?" cardText="Watch Now" />
          <StartCardType imgSrc={img_promo_02} imgAlt="" cardSmallText="Customer Services" cardTitle="Get inspired by real Slack customers" cardText="Read Stories" />
          <StartCardType imgSrc={img_promo_03} imgAlt="" cardSmallText="Solutions" cardTitle="Learn how Slack can work for your team" cardText="Explore Solutions" />
          <StartCardType imgSrc={img_promo_04} imgAlt="" cardSmallText="How-to" cardTitle="Start off on the right foot with Slack 101" cardText="Try for Free" />
        </div>

      </div>



    </div >
  );
}

function SectionIntro(props) {
  return <>
    <h2 className="card-title">{props.title}</h2>
    <p className="card-text">{props.description}</p>
  </>
}
function SectionLink(props) {
  return <>
    <a href="\#" className="arrow-link align-vert">{props.linkDesc}
      <i className="bi bi-arrow-right align-vert">  </i></a>
  </>

}
function SectionCard(props) {
  return <div class="card mb-3">
    <a href="/#"><img class="img-fluid card-img-top rounded" src={props.imgSrc} alt={props.imgAlt} /></a>
    {/* <div className="">
          <i className="bi bi-play-fill cardSym playBtn"></i>
        </div> */}
    {
      props.cardText ? (
        <div class="card-body p-0 mt-3">
          <p class="card-text sty-text mb-0 float-left">{props.cardText}</p>
          <p class="card-text sty-text mb-0 float-right">{props.cardTime}</p>
        </div>
      ) : ""
    }

  </div>
}

function SectionVideo(props) {
  return <video className={props.alignment} autoPlay loop preload="auto">
    <source src={props.videoSrc} type="video/mp4" />
    <source src={props.videoImg} type="video/jpg" />
  </video>

}


function CompanyLogo(props) {
  return <div className="col">
    <img src={props.imgSrc} className="company-logo" alt={props.imgAlt} />
  </div>
}

function StartCard(props) {
  return <div className="col-md-4">
    <h5 className="num-block d-inline-block">{props.cardNum}</h5>
    <p className="font-weight-bold card-text mt-3">{props.cardTitle}</p>
    <p className="card-text">{props.cardDesc}</p>
  </div>
}

function StartCardType(props) {
  return <div className="card process-card">
    <img src={props.imgSrc} className="img-fluid" alt={props.imgAlt} />
    {/* {
      props.cardOver ? (
        <div className="">
          <p className="">{props.cardOver}</p>
        </div>
      ) : ""
    } */}
    <div className="card-body p-0">
      <p className=""><small className="text-muted">{props.cardSmallText}</small></p>
      <h5 className="card-title">{props.cardTitle}</h5>
    </div>
    <div class="card-footer">
      <small className="card-text">{props.cardText}</small>
    </div>

  </div>

}

export default App;
