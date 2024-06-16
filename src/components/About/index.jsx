function About() {
    return (
        <section className="vh-100">
            <h1 className="text-success text-center mb-4">About Me</h1>
            <hr className="text-light border-2"></hr>
            <div className="mb-3 w-100 d-flex flex-column flex-md-row">
                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    <p className="text-white">Hi, my name is Jake.
                        <br /><br />I am an ex-soldier who decided to learn how to code, I started by learning very basic Java and C# through self-practice and YouTube tutorials. I found the problem solving to be very rewarding and always felt an extreme sense of accomplishment when I finished a project so I decided to take it a step further and sign up to the Monash Full-Stack Web Development bootcamp.</p>
                </div>
                <div className="d-flex align-items-stretch w-100 w-md-75 h-auto h-md-75 ms-md-3">
                    <img
                        src="/images/SelfPortrait.jpg"
                        alt="Self Portrait"
                        className="img-fluid border border-3 rounded-5 shadow"
                    ></img>
                </div>
            </div>
        </section>
    );
}

export default About;