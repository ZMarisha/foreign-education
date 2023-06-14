import React from "react";
import d from './Contacts.module.css';


const Contacts:React.FC = () => {


    return (
        <div className={d.contacts}>
            <h1 className={`${"titleText"} ${d.topText}`}>Contacts</h1>
            <p className='textSize18'>Contact us and we will answer all your questions</p>
            <div>
                <iframe className={d.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.786079572262!2d-0.08157162342276054!3d51.51714050999173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb303a6ebc1%3A0x4c05e80ba60e3ff4!2zMTIgTmV3IFN0LCBMb25kb24gRUMyTSA0VFAsINCS0LXQu9C40LrQvtCx0YDQuNGC0LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1686754637232!5m2!1sru!2sru" loading="lazy" title="map"></iframe>
            </div>
        </div>
    )
}


export default Contacts;