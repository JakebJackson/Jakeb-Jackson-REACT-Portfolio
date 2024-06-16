function Resume() {
    return (
        <section className="vh-100 d-flex flex-column align-items-center">
            <h1 className="text-success mb-4 text-center">Skills and Resume</h1>
            <hr className="border-light border-2 w-100"/>
            <div className="w-md-50">
                <h3 className="text-light pt-4">Front-end Skills:</h3>
                <p className="text-light ps-4">
                    - HTML<br />
                    - CSS<br />
                    - Bootstrap<br />
                    - jQuery<br />
                    - React<br />
                    - Handlebars<br />
                    - Responsive Design<br />
                </p>
                <h3 className="text-light pt-4">Back-end Skills:</h3>
                <p className="text-light ps-4">
                    - Express<br />
                    - Node<br />
                    - MongoDB/Mongoose<br />
                    - IndexedDB<br />
                    - MySQL/Sequelize<br />
                    - APIs<br />
                    - REST<br />
                    - Apollo<br />
                    - GraphQL<br />
                    - Progressive Web Applications<br />
                </p>
            </div>
            <h5 className="w-md-50 text-light pt-4 text-center">You can download my resume <a href="./files/Jakeb_Jackson-Resume.pdf" download={"Jakeb_Jackson-Resume"}>here.</a></h5>
        </section>
    );
}

export default Resume;