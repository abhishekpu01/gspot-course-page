import '../css/middle.css';
import mid from '../img/mid.gif';
import Button from 'react-bootstrap/Button';
const Middle = () => {

    return (

        <>
            <div class="mid">

                <div className="mid-left">
                <img src={mid} className="mid-img"/>
                </div>

                <div className="mid-right">
                    <h1 id="mid-head">Fastest way to build CV's</h1>
                    <Button variant="primary"  className = "mid-btn">Get Started</Button>{' '}
                    <Button variant="primary"  className = "mid-btn-2" size ="sm">Get Started</Button>{' '}
                </div>

            </div>
        </>

    )

}

export default Middle;