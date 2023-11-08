import profile from '../assets/images/profile.jpg';
export const HeroSection = () => {
	return (
			<>
					<div className="container hero-section ">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <h1 className="title-section">Hey, Uzair Here!</h1>
                        <h3 className="subheading">Web Developer</h3>
                    </div>
                    <div className="col-sm-12 col-md-6 ">
                        <img src={profile} alt="" width={250}/>
                    </div>
                </div>
            </div>
			</>
	)
}