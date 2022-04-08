import React from "react"

const Footer = () => {
    return <>
        <footer className="page-footer font-small blue pt-4">
            <div className="container text-center text-md-left">
                <div className="row mt-5">
                    <div className="col-md-1 mt-md-0 mt-5">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!">Link 1</a></li>
                            <li><a href="#!">Link 2</a></li>
                            <li><a href="#!">Link 3</a></li>
                            <li><a href="#!">Link 4</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2"></div>
                    <div className="col-md-3 ">
                        <h5 className="text-uppercase">FOOTER</h5>
                        <p>
                        </p>
                    </div>

                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                © 2020 Copyright: MackLeaps
            </div>
        </footer>
    </>
}
export default Footer;