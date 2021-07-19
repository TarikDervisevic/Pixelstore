import React from "react";

import PayMethod from "./PayMethod/PayMethod";
import VisaLogo from "../../../assets/images/VisaLogo.png";
import MasterCardLogo from "../../../assets/images/MasterCardLogo.png";
import PayPalLogo from "../../../assets/images/PayPalLogo.png";
import classes from "./PayMethods.module.css";

const PayMethods = (props) => {
    let payMethods = [
        {img: VisaLogo},
        {img: MasterCardLogo},
        {img: PayPalLogo}
    ];

    return (
        <React.Fragment>
            <div className={classes.PayMethods}>
                <div className={classes.PayMethodsTitle}>Payment Methods</div>
                <PayMethod payMethodImg={payMethods[0].img} payMethod="visa" checked={true}/>
                <PayMethod payMethodImg={payMethods[1].img} payMethod="mastercard"/>
                <PayMethod payMethodImg={payMethods[2].img} payMethod="paypal"/>
            </div>
        </React.Fragment>
    )
}

export default PayMethods;