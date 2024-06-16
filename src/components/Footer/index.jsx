import { Link } from 'react-router-dom';

function Footer() {

    return(
        <footer className="footer sticky-bottom shadow mt-auto p-4 bg-onyx">
            <div className="container w-md-50 d-flex justify-content-center">
                <Link target="_blank" to="https://github.com/JakebJackson" className="px-4">
                    <img src="./images/github-mark-white.png" className="img-fluid" style={{height: "30px"}}></img>
                </Link>
                <Link target="_blank" to="https://stackoverflow.com/users/22506807/jakejackson" className="px-4">
                    <img src="./images/stack-overflow-icon.png" className="img-fluid" style={{height: "30px"}}></img>
                </Link>
                <Link target="_blank" to="https://www.linkedin.com/in/jakeb-jackson-3642a8291/" className="px-4">
                    <img src="./images/In-White-48@2x.png" className="img-fluid" style={{height: "30px"}}></img>
                </Link>
            </div>
        </footer>
    );    
}


export default Footer;