import Homelogo from '../img/home.png';
import Msglogo from '../img/msg.png';
import '../css/footer.css';

const Footer = () => {

    return (
        <>
            <div class="my-footer">
                <div class="my-footer-top">

                    <div className='sec-1'>
                        <h6>JOIN THE COMMUNITY</h6>
                        <input type="email" placeholder="Email" className="footer-inp"/>
                    </div>

                    <hr></hr>

                    <div className='sec-2'>
                        <p>ABOUT US</p>
                        <p>FAQ</p>
                        <p>CONTACT US</p>
                    </div>

                    <hr></hr>

                    <div className='sec-3'>
                        <p>PRIVACY POLICY</p>
                        <p>REFUND POLICY</p>
                        <p>TERMS OF SERVICE</p>
                    </div>

                    <hr></hr>

                    <div className='sec-4'>
                        <p>HOW TO PURCHASE</p>
                        <p>TRACK YOUR PROGRESS</p>
                        <p>UPGRADE COURSE</p>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Footer;