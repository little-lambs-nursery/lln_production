import pencil from '../../img/about/pencil.webp'

const FounderWord = () => {
    return (
        <>
            <section className="container-fluid p-0">
                <div className="founderWordBg">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <div className="founderWords">
                                    <h4>Founder’s Words</h4>
                                    <p>We are very proud to welcome you to Little Lambs Nursery, Dubai, a British curriculum nursery (EYFS), located in the heart of Mankool.  As a mother, We truly understand that every parent is looking out for the best opportunities for their child/children. We at Little Lambs Nursery promises to provide a learning adventure combined with enjoyment and entertainment along with a secure learning environment for your little ones. Before you begin your journey with us, allow us to answer a few queries that may come to your mind.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-6 col-12 col-12">
                                <div className="aboutWhyLLN">
                                    <h4>Why is Little Lambs Nursery the right learning space for my child?</h4>
                                    <p><b>“Imagination is more important than knowledge.”</b> <i>  Albert Einstein</i></p>
                                    <p>We at Little Lambs Nursery strongly believe the application of the above statement as we promote the ideology that ‘every child is unique’. A child of Little Lambs Nursery will develop a unique understanding about various applications in everyday life. In the result of this, the child will begin to use and apply new thinking approaches to solve challenges along the way and develop problem-solving skills.</p>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-6 col-12 col-12">
                                <div className='aboutWhyLLN'>
                                    <img src={pencil} alt="pencil" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FounderWord