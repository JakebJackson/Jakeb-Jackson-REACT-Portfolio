import { useState } from 'react';

function Contact() {
    const [formValues, setFormValues] = useState({
        email: '',
        name: '',
        message: ''
    });

    const [formErrors, setFormErrors] = useState({
        email: false,
        name: false,
        message: false
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
        if (value) {
            setFormErrors({ ...formErrors, [id]: false });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {
            email: !formValues.email,
            name: !formValues.name,
            message: !formValues.message
        };

        setFormErrors(errors);

        if (!errors.email && !errors.name && !errors.message) {
            // All fields are filled
            alert('Form submitted successfully!');
            // Handle form submission logic here
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <section className="vh-100">
            <h1 className="text-success text-center mb-4">Contact Me</h1>
            <hr className="text-light border-2"></hr>
            <form className="p-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-light">Email</label>
                    <input
                        type="email"
                        className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="name@example.com"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email && <div className="invalid-feedback">Email is required.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-light">Name</label>
                    <input
                        type="text"
                        className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                        id="name"
                        placeholder="Your Name"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.name && <div className="invalid-feedback">Name is required.</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label text-light">Message</label>
                    <textarea
                        className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                        id="message"
                        rows="4"
                        placeholder="Your Message"
                        value={formValues.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    {formErrors.message && <div className="invalid-feedback">Message is required.</div>}
                </div>
                <button type="submit" className="btn btn-success">Send</button>
            </form>
        </section>
    );
}

export default Contact;