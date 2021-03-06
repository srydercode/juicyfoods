import introImage from '../img/intro.jpg'

const CallToActionHomePage = () => {
  return (
    <>
      <section className='page-section clearfix'>
        <div className='container'>
          <div className='intro'>
            <img
              className='intro-img img-fluid mb-3 mb-lg-0 rounded'
              src={introImage}
              alt='intro description'
            />
            <div className='intro-text left-0 text-center bg-faded p-5 rounded'>
              <h2 className='section-heading mb-4'>
                <span className='section-heading-upper'>Fresh Juice</span>
                <span className='section-heading-lower'>Worth Drinking</span>
              </h2>
              <p className='mb-3' data-aos="fade-right">
                Every drink of our quality artisan fresh juice starts with
                locally sourced, hand picked ingredients. Once you try it, our
                coffee will be a blissful addition to your everyday routine - we
                guarantee it!
              </p>
              <div className='intro-button mx-auto'>
                <button className='btn btn-primary btn-xl'>
                  Order A Juice!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CallToActionHomePage
