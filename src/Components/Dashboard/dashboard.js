import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
//import {RESET_ALL_DATA} from "././Redux/Types/index.js"
import { RESET_ALL_DATA } from '../../Redux/Types';

const Dashboard = () => {

    const LoginDetails = useSelector((state) => state?.LoginDetails?.data);
    console.log('LoginDetails====>', LoginDetails)
  
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('Token');
    dispatch({type: RESET_ALL_DATA});
  }

  return (
    <div> {/* Header Section Start */}
      <header id="home" className="hero-area">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="container">
            <div className="theme-header clearfix">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                  <span className="lni-menu" />
                  <span className="lni-menu" />
                  <span className="lni-menu" />
                </button>
                <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt /></a>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="about.html">About</a></li>
                      <li><a className="dropdown-item" href="job-page.html">Job Page</a></li>
                      <li><a className="dropdown-item" href="job-details.html">Job Details</a></li>
                      <li><a className="dropdown-item" href="resume.html">Resume Page</a></li>
                      <li><a className="dropdown-item" href="privacy-policy.html">Privacy Policy</a></li>
                      <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                      <li><a className="dropdown-item" href="pricing.html">Pricing Tables</a></li>
                      <li><a className="dropdown-item" href="contact.html">Contact</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Candidates
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="browse-jobs.html">Browse Jobs</a></li>
                      <li><a className="dropdown-item" href="browse-categories.html">Browse Categories</a></li>
                      <li><a className="dropdown-item" href="add-resume.html">Add Resume</a></li>
                      <li><a className="dropdown-item" href="manage-resumes.html">Manage Resumes</a></li>
                      <li><a className="dropdown-item" href="job-alerts.html">Job Alerts</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Employers
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="post-job.html">Add Job</a></li>
                      <li><a className="dropdown-item" href="manage-jobs.html">Manage Jobs</a></li>
                      <li><a className="dropdown-item" href="manage-applications.html">Manage Applications</a></li>
                      <li><a className="dropdown-item" href="browse-resumes.html">Browse Resumes</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="blog.html">Blog - Right Sidebar</a></li>
                      <li><a className="dropdown-item" href="blog-left-sidebar.html">Blog - Left Sidebar</a></li>
                      <li><a className="dropdown-item" href="blog-full-width.html"> Blog full width</a></li>
                      <li><a className="dropdown-item" href="single-post.html">Blog Single Post</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="login.html">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" onClick={handleLogout}>Logout</Link>
                  </li>
                  <li className="button-group">
                    <a href="post-job.html" className="button btn btn-common">Post a Job</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
        </nav>
        {/* Navbar End */}
        <div className="container">
          <div className="row space-100 justify-content-center">
            <div className="col-lg-10 col-md-12 col-xs-12">
              <div className="contents">
                <h2 className="head-title">Find the job that fits your life</h2>
                <p>Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, <br /> id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non.</p>
                <div className="job-search-form">
                  <form>
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-xs-12">
                        <div className="form-group">
                          <input className="form-control" type="text" placeholder="Job Title or Company Name" />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option value="none">Locations</option>
                                <option value="none">New York</option>
                                <option value="none">California</option>
                                <option value="none">Washington</option>
                                <option value="none">Birmingham</option>
                                <option value="none">Chicago</option>
                                <option value="none">Phoenix</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-map-marker" />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-xs-12">
                        <div className="form-group">
                          <div className="search-category-container">
                            <label className="styled-select">
                              <select>
                                <option>All Categories</option>
                                <option>Finance</option>
                                <option>IT &amp; Engineering</option>
                                <option>Education/Training</option>
                                <option>Art/Design</option>
                                <option>Sale/Markting</option>
                                <option>Healthcare</option>
                                <option>Science</option>
                                <option>Food Services</option>
                              </select>
                            </label>
                          </div>
                          <i className="lni-layers" />
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-xs-12">
                        <button type="submit" className="button"><i className="lni-search" /></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Header Section End */}
      {/* Category Section Start */}
      <section className="category section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse Categories</h2>
            <p>Most popular categories of portal, sorted by popularity</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-1">
                  <i className="lni-home" />
                </div>
                <h3>Finance</h3>
                <p>(4286 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-2">
                  <i className="lni-world" />
                </div>
                <h3>Sale/Markting</h3>
                <p>(2000 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category">
              <a href="browse-jobs.html">
                <div className="icon bg-color-3">
                  <i className="lni-book" />
                </div>
                <h3>Education/Training</h3>
                <p>(1450 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category border-right-0">
              <a href="browse-jobs.html">
                <div className="icon bg-color-4">
                  <i className="lni-display" />
                </div>
                <h3>Technologies</h3>
                <p>(5100 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category border-bottom-0">
              <a href="browse-jobs.html">
                <div className="icon bg-color-5">
                  <i className="lni-brush" />
                </div>
                <h3>Art/Design</h3>
                <p>(5079 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category border-bottom-0">
              <a href="browse-jobs.html">
                <div className="icon bg-color-6">
                  <i className="lni-heart" />
                </div>
                <h3>Healthcare</h3>
                <p>(3235 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category border-bottom-0">
              <a href="browse-jobs.html">
                <div className="icon bg-color-7">
                  <i className="lni-funnel" />
                </div>
                <h3>Science</h3>
                <p>(1800 jobs)</p>
              </a>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 f-category border-right-0 border-bottom-0">
              <a href="browse-jobs.html">
                <div className="icon bg-color-8">
                  <i className="lni-cup" />
                </div>
                <h3>Food Services</h3>
                <p>(4286 jobs)</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Category Section End */}
      {/* Listings Section Start */}
      <section id="job-listings" className="section">
        <div className="container text-center wow  wow fadeInUp">
          <h1 className="section-title">You Using Free Lite Version :(</h1>
          <h6>Purchase Full Version to Get All Pages, Features, Docs and Support!</h6><br />
          <a href="https://rebrand.ly/jobx-gg" target="_blank" rel="nofollow" className="btn btn-common btn-lg"><span className="lni-pointer-right" /> Purchase Now!</a>
        </div>
      </section>
      {/* Listings Section End */}
      {/* Browse jobs Section Start */}
      <div id="browse-jobs" className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-wrapper">
                <div>
                  <h3>7,000+ Browse Jobs</h3>
                  <p>Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                  <a className="btn btn-common" href="#">Search jobs</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="img-thumb">
                <img className="img-fluid" src="assets/img/search.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Browse jobs Section End */}
      {/* How It Work Section Start */}
      <section className="how-it-works section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">How It Works?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="work-process">
                <span className="process-icon">
                  <i className="lni-user" />
                </span>
                <h4>Create an Account</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="work-process step-2">
                <span className="process-icon">
                  <i className="lni-search" />
                </span>
                <h4>Search Jobs</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="work-process step-3">
                <span className="process-icon">
                  <i className="lni-cup" />
                </span>
                <h4>Apply</h4>
                <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers find place best.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Work Section End */}
      {/* Latest Section Start */}
      <section id="latest-jobs" className="section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Jobs</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-1.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">UX Designer</a></h3>
                  <p className="brand">MagNews</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-2.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">UI Designer</a></h3>
                  <p className="brand">Hunter Inc.</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="part-time">Part Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-3.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Web Developer</a></h3>
                  <p className="brand">MagNews</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-4.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">UX Designer</a></h3>
                  <p className="brand">AmazeSoft</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-2.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Digital Marketer</a></h3>
                  <p className="brand">Bingo</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="part-time">Part Time</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="jobs-latest">
                <div className="img-thumb">
                  <img src="assets/img/features/img-1.jpg" alt />
                </div>
                <div className="content">
                  <h3><a href="job-details.html">Web Developer</a></h3>
                  <p className="brand">MagNews</p>
                  <div className="tags">
                    <span><i className="lni-map-marker" /> New York</span>
                    <span><i className="lni-user" />  John Smith</span>
                  </div>
                  <div className="tag mb-3"><i className="lni-tag" /> #Html #Css #PHP</div>
                  <span className="full-time">Full Time</span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <a href="job-page.html" className="btn btn-common">Browse All Jobs</a>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Section End */}
      {/* Testimonial Section Start */}
      <section id="testimonial" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Clients Review</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div id="testimonials" className="touch-slider owl-carousel">
                <div className="item">
                  <div className="testimonial-item">
                    <div className="author">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img1.png" alt />
                      </div>
                    </div>
                    <div className="content-inner">
                      <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                      <div className="author-info">
                        <h2><a href="#">Jessica</a></h2>
                        <span>Senior Accountant</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="author">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img2.png" alt />
                      </div>
                    </div>
                    <div className="content-inner">
                      <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                      <div className="author-info">
                        <h2><a href="#">John Doe</a></h2>
                        <span>Project Menager</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimonial-item">
                    <div className="author">
                      <div className="img-thumb">
                        <img src="assets/img/testimonial/img3.png" alt />
                      </div>
                    </div>
                    <div className="content-inner">
                      <p className="description">Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui Morbi quam enim, cursus non erat pretium veh icula finibus ex stibulum venenatis viverra dui.</p>
                      <div className="author-info">
                        <h2><a href="#">Helen</a></h2>
                        <span>Engineer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section End */}
      {/* Start Pricing Table Section */}
      <div id="pricing" className="section bg-gray">
        <div className="container text-center wow  wow fadeInUp">
          <h1 className="section-title">You Using Free Lite Version :(</h1>
          <h6>Purchase Full Version to Get All Pages, Features, Docs and Support!</h6><br />
          <a href="https://rebrand.ly/jobx-gg" target="_blank" rel="nofollow" className="btn btn-common btn-lg"><span className="lni-pointer-right" /> Purchase Now!</a>
        </div>
      </div>
      {/* End Pricing Table Section */}
      {/* Blog Section */}
      <section id="blog" className="section">
        {/* Container Starts */}
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Blog Post</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et <br /> metus effici turac fringilla lorem facilisis.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper">
                <div className="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img1.jpg" alt />
                  </a>
                </div>
                <div className="blog-item-text">
                  <h3><a href="single-post.html">Tips to write an impressive resume online for beginner</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                </div>
                <a className="readmore" href="#">Read More</a>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper">
                <div className="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img2.jpg" alt />
                  </a>
                </div>
                <div className="blog-item-text">
                  <h3><a href="single-post.html">Let's explore 5 cool new features in JobBoard theme</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                </div>
                <a className="readmore" href="#">Read More</a>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12 blog-item">
              {/* Blog Item Starts */}
              <div className="blog-item-wrapper">
                <div className="blog-item-img">
                  <a href="single-post.html">
                    <img src="assets/img/blog/img3.jpg" alt />
                  </a>
                </div>
                <div className="blog-item-text">
                  <h3><a href="single-post.html">How to convince recruiters and get your dream job</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                </div>
                <a className="readmore" href="#">Read More</a>
              </div>
              {/* Blog Item Wrapper Ends*/}
            </div>
          </div>
        </div>
      </section>
      {/* blog Section End */}
      {/* download Section Start */}
      <section id="download" className="section bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-xs-12">
              <div className="download-wrapper">
                <div>
                  <div className="download-text">
                    <h4>Download Our Best Apps</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ellentesque dignissim quam et metus effici turac fringilla lorem facilisis, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                  <div className="app-button">
                    <a href="#" className="btn btn-border"><i className="lni-apple" />Download <br /> <span>From App Store</span></a>
                    <a href="#" className="btn btn-common btn-effect"><i className="lni-android" /> Download <br /> <span>From Play Store</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-xs-12">
              <div className="download-thumb">
                <img className="img-fluid" src="assets/img/app.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* download Section Start */}
      {/* Footer Section Start */}
      <footer>
        {/* Footer Area Start */}
        <section className="footer-Content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-xs-12">
                <div className="widget">
                  <div className="footer-logo"><img src="assets/img/logo-footer.png" alt /></div>
                  <div className="textwidget">
                    <p>Sed consequat sapien faus quam bibendum convallis quis in nulla. Pellentesque volutpat odio eget diam cursus semper.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Quick Links</h3>
                  <ul className="menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">License</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                  <ul className="menu">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Refferal Terms</a></li>
                    <li><a href="#">Product License</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-xs-12">
                <div className="widget">
                  <h3 className="block-title">Subscribe Now</h3>
                  <p>Sed consequat sapien faus quam bibendum convallis.</p>
                  <form method="post" id="subscribe-form" name="subscribe-form" className="validate">
                    <div className="form-group is-empty">
                      <input type="email" defaultValue name="Email" className="form-control" id="EMAIL" placeholder="Enter Email..." required />
                      <button type="submit" name="subscribe" id="subscribes" className="btn btn-common sub-btn"><i className="lni-envelope" /></button>
                      <div className="clearfix" />
                    </div>
                  </form>
                  <ul className="mt-3 footer-social">
                    <li><a className="facebook" href="#"><i className="lni-facebook-filled" /></a></li>
                    <li><a className="twitter" href="#"><i className="lni-twitter-filled" /></a></li>
                    <li><a className="linkedin" href="#"><i className="lni-linkedin-fill" /></a></li>
                    <li><a className="google-plus" href="#"><i className="lni-google-plus" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer area End */}
        {/* Copyright Start  */}
        <div id="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="site-info text-center">
                  <p>Designed and Developed by <a href="https://uideck.com" rel="nofollow">UIdeck</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright End */}
      </footer>
      {/* Footer Section End */}
    </div>

  )
}

export default Dashboard