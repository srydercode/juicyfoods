import aboutImage from '../img/bottle-juice.jpg'

const AboutPageDescription = () => {
  return (
    <>
      <section className='page-section about-heading'>
        <div className='container'>
          <img
            className='img-fluid rounded about-heading-img mb-3 mb-lg-0'
            src={aboutImage}
            alt='alternative'
          />
          <div className='about-heading-content'>
            <div className='row'>
              <div className='col-xl-9 col-lg-10 mx-auto'>
                <div className='bg-faded rounded p-5'>
                  <h2 className='section-heading mb-4'>
                    <span className='section-heading-upper' data-aos='fade-down'>
                      Strong Coffee, Strong Roots
                    </span>
                    <span className='section-heading-lower' data-aos='fade-up'>
                      About Our Cafe
                    </span>
                  </h2>
                  <p data-aos='fade-right'>
                    Founded in 1987 by the Hernandez brothers, our establishment
                    has been serving up rich coffee sourced from artisan farmers
                    in various regions of South and Central America. We are
                    dedicated to travelling the world, finding the best coffee,
                    and bringing back to you here in our cafe.
                  </p>
                  <p className='mb-0' data-aos='fade-left'>
                    We guarantee that you will fall in <em>lust</em> with our
                    decadent blends the moment you walk inside until you finish
                    your last sip. Join us for your daily routine, an outing
                    with friends, or simply just to enjoy some alone time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPageDescription
