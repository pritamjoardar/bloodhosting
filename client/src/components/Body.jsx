import React from 'react'
import { Link } from 'react-router-dom';
import Footer from "./Footer"
import AdminVerify from './Admin/AdminVerify';
const Body = () => {
 AdminVerify();
  return (
    <>    
    <div>
  <header className="continer-fluid ">
    <div className="header-top">
      <div className="container">
        <div className="row col-det">
        </div>
      </div>
    </div>
    
  </header>
  {/* ################# Slider Starts Here#######################-*/}
  <div className="slider-detail">
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img  className="d-block w-100" src="https://liveyourlifept.com/blog/wp-content/uploads/2017/01/Give-blood-save-life.jpg" alt="First slide" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">Welcome to our blood donation website, where saving lives is just a heartbeat, <br />
            away. Discover the power of giving and join us in making a difference through  <br />
            the selfless act of donating blood</p>
            <div className=" vbh">
              <div className="btn btn-success  bounceInUp"> <Link to={"/contact"} style={{color:"white"}}> Contact US</Link> </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src="https://dam.abbott.com/en-us/abbottcorpnews/images/BloodDonation-GettyImages-519935149-960x430.jpg" alt="Third slide" />
          <div className="carousel-caption vdg-cur d-none d-md-block">
            <h5 className=" bounceInDown">Donate Blood &amp; Save a Life</h5>
            <p className=" bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br />
              aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br />
              sed sagittis at, sagittis quis neque. Praesent.</p>
            <div className=" vbh">
              {/* <div className="btn btn-danger  bounceInUp"> Donate Now </div> */}
              <div className="btn btn-danger  bounceInUp"> Contact US </div>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  {/**************** About Us Starts Here ****************/}
  <section id="about" className="contianer-fluid about-us">
    <div className="container">
      <div className="row session-title">
        <h2>About Us</h2>
      </div>
      <div  className="row">
        <div className="col-md-6 text">
          <h2>About Blood Doners</h2>
          <p>Blood donors are the unsung heroes who make a profound impact on countless lives. Their selfless act of donating blood provides hope and healing to those in need. Every drop of donated blood is a lifeline that can bring solace to accident victims, patients undergoing surgeries, individuals battling chronic illnesses, and many others. The significance of blood donors cannot be overstated. By giving a part of themselves, these compassionate individuals contribute to the well-being of their communities. Their generosity and courage inspire others to follow suit, fostering a culture of empathy and support. Together, blood donors are the backbone of our healthcare system, embodying the true essence of humanity and saving lives with every precious donation.</p>
        </div>
        <div className="col-md-6 image">
          <img className='blood-group' style={{width:"200px"}} src="https://e0.pxfuel.com/wallpapers/44/247/desktop-wallpaper-blood-donation-png-2-png.jpg"  alt=''/>
        </div>
      </div>
    </div>
  </section>
  {/* ################# Gallery Start Here #######################-*/}
  <div id="gallery" className="gallery container-fluid">
    <div className="container">
      <div className="row session-title">
        <h2>Checkout Our Gallery</h2>
      </div>
      <div className="gallery-row col">
        <div id="gg-screen" />
        <div className="gg-box">
          <div className="gg-element">
            <img src="assets/images/gallery/g1.jpg" alt='' />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g2.jpg" alt='' />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g3.jpg"  alt=''/>
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g4.jpg"  alt=''/>
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g5.jpg" alt='' />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g6.jpg"  alt=''/>
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g7.jpg" alt=''/>
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g8.jpg" alt='' />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g9.jpg" alt='' />
          </div>
          <div className="gg-element">
            <img src="assets/images/gallery/g10.jpg"  alt=''/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ################# Donation Process Start Here #######################-*/}
  <section id="process" className="donation-care">
    <div className="container">
      <div className="row session-title">
        <h2>Donation Process</h2>
        {/* <p>The donation process from the time you arrive center until the time you leave</p> */}
      </div>
      <div className="row">
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu" >
            <img src="assets/images/gallery/g1.jpg" alt='' />
            <h4><b>1 - </b>Registration</h4>
            <p>Register today, be a lifesaver in a single act,
Donate your blood, make a lasting impact.
Join the ranks of heroes, both strong and kind,
Register as a donor, leave no life behind.</p>
            {/* <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g2.jpg" alt='' />
            <h4><b>2 - </b>Seeing</h4>
            <p>
Witnessing a blood donor's noble sight,
A selfless act, shining in its might.
Their compassion flows through every vein,
Bringing light to lives, alleviating pain.</p>
            {/* <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g3.jpg" alt='' />
            <h4><b>3 - </b>Donation</h4>
            <p>Blood donation, a selfless act of grace,
Saving lives with each precious embrace.
A gift from the heart, a lifeline so pure,
Uniting humanity, making miracles endure.</p>
            {/* <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button> */}
          </div>
        </div>
        <div className="col-md-3 col-sm-6 vd">
          <div className="bkjiu">
            <img src="assets/images/gallery/g4.jpg" alt='' />
            <h4><b>4 - </b>Save Life</h4>
            <p>Safe-Life blood donor, a guardian of health,
Ensuring safety and care with every heartfelt wealth.
Screened and tested, their gift brings no harm,
Bringing hope and healing, with an altruistic charm.</p>
            {/* <button className="btn btn-sm btn-danger">Readmore <i className="fas fa-arrow-right" /></button> */}
          </div> 
        </div>
      </div>
    </div>
  </section>
  {/* ################### Our Blog Starts Here #######################-
  <div id="blog" className="blog-container contaienr-fluid">
    <div className="container">
      <div className="session-title row">
        <h2>Latest Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit consectetur adipiscing elit.</p>
      </div>
      <div className="row news-row">
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_01.jpg" alt={""} />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_02.jpg" alt='' />
            </div>
            <div className="detail">
              <h3>Apple Launch its New Phone</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_03.jpg" alt='' />
            </div>
            <div className="detail">
              <h3>About Windows 10 Update</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="news-card">
            <div className="image">
              <img src="assets/images/blog/blog_04.jpg" alt='' />
            </div>
            <div className="detail">
              <h3>Latest News about Smarteye</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
              <p className="footp">
                27 Comments <span>/</span>
                Blog Design <span>/</span>
                Read More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/**************** Footer  Starts Here *************** */}
  <footer id="contact" className="container-fluid">
    <div className="container">
      <div className="row content-ro">
        <div className="col-lg-4 col-md-12 footer-contact">
          <h2>Contact Informatins</h2>
          <div className="address-row">
            <div className="icon">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="detail">
              <p>46-29 Indra Street, Mirzapur, Toranto, 3006 Canada</p>
            </div>
          </div>
          <div className="address-row">
            <div className="icon">
              <i className="far fa-envelope" />
            </div>
            <div className="detail">
              <p>xyz@xyz.com <br /> support@xyz.com</p>
            </div>
          </div>
          <div className="address-row">
            <div className="icon">
              <i className="fas fa-phone" />
            </div>
            <div className="detail">
              <p>+91 0000000000 <br /> +91 0000000000</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 footer-links">
          <div className="row no-margin mt-2">
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Pricing</li>
              <li>Gallery</li>
              <li>eatures</li>
            </ul>
          </div>
          <div className="row no-margin mt-1">
            <h2 className="m-t-2">More Products</h2>
            <ul>
              <li>****</li>
              <li>****</li>
              <li>****</li>
              <li>****</li>
            </ul>
          </div>
        </div>
        
      </div>
     
    </div>
  </footer>
</div>
  <Footer/>
    </>
  )
  }

export default Body
