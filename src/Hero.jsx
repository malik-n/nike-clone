const Hero = () => {
return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Categories</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src="https://iconape.com/wp-content/png_logo_vector/amazon-icon.png" alt="amazon-logo" className="tiny-logo"/>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fflipkart-logo-png%2Fflipkart-logo-transparent-png-download-0.png&f=1&nofb=1&ipt=6291fa56c8451a9dda9acf440c71183d43a8a4b1575866549460a95beb5a8a7a&ipo=images" alt="flipkart-logo" className="tiny-logo"/>
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png" alt="shoe-image" />
        </div>
    </main>
)
}

export default Hero;