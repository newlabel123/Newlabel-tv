import React, { useContext } from 'react'
import { FlutterWaveButton } from 'flutterwave-react-v3'
import { v4 as uuidv4 } from 'uuid'
import { AuthContext } from '../../context/auth'

function PaymentHandler({ amount, title, onSuccess, setProcessPayment }) {
  const { authState } = useContext(AuthContext)

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_PUB_KEY,
    tx_ref: uuidv4(),
    amount: amount,
    currency: 'NGN',
    country: 'NG',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: authState.user.email,
      phonenumber: authState.user.phone || '',
      name: authState.user.name,
    },
    customizations: {
      title: title,
      description: 'Payment for items in cart',
      logo:
        'https://res.cloudinary.com/new-label/image/upload/v1609092832/newlabel_brand_icon_mark_qay8i6.png',
    },
  }

  // const handlePayment = useFlutterwave(config)

  // handlePayment({
  //   callback: (response) => {
  //     closePaymentModal()
  //     onSuccess(response.transaction_id)
  //   },
  //   onClose: () => {
  //     window.location.reload()
  //   },
  // })

  const closePaymentModal = () => {
    document
      .getElementsByName('checkout')[0]
      .setAttribute(
        'style',
        'position:fixed;top:0;left:0;z-index:-1;border:none;opacity:0;pointer-events:none;width:100%;height:100%;'
      )
    document.body.style.overflow = ''
  }

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      localStorage.setItem('topup', JSON.stringify(response))
      closePaymentModal()
    },
    onClose: () => {},
  }

  return <FlutterWaveButton {...fwConfig} />
}

export { PaymentHandler }
