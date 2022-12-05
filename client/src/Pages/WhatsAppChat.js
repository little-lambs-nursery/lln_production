import React from 'react'
import whatsapp from '../img/icons/whatsapp.png'
import gmail from '../img/icons/gmail.png'

const WhatsAppChat = () => {
    return (
        <>
            <div className='floatingBtn'>
            <ul>
                <li>
                    <a href="mailto:info@nurserylittlelambs.com">
                        <img src={gmail} alt="gmail" className='img-fluid' />
                        Send an Email
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+971526152532?text=Hello LITTLE LAMBS NURSERY" target="_blank">
                        <img src={whatsapp} alt="whatsapp" className='img-fluid' />
                        +971 52 615 2532
                    </a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default WhatsAppChat