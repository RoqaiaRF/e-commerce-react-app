import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Avatar from "../../Assets/girl.jpeg"
const WhatssappIcon= () => {
    return (
        <div >
      <FloatingWhatsApp
        phoneNumber="962780135849"
        accountName="ايمان أحمد"
        chatMessage = "يا هلا ومرحبا فيك , ابعتلي عنوانك وطلبك 😊"
        avatar= {Avatar}
        statusMessage = "عادة يتم الرد خلال دقائق"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
    )
}


export default WhatssappIcon