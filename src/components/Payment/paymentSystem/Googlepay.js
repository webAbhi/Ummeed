import GooglePayButton from "@google-pay/button-react";
import { Box, Link, Typography } from "@material-ui/core";

const PayButton = ({amount}) => {
  const donation = amount.toString();
  const callbackIntents = ["PAYMENT_AUTHORIZATION"];
  const allowedPaymentMethods = [
    {
      type: "CARD",
      parameters: {
        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
        allowedCardNetworks: ["MASTERCARD", "VISA"]
      },
      tokenizationSpecification: {
        type: "PAYMENT_GATEWAY",
        parameters: {
          gateway: "example"
        }
      }
    }
  ];
  const merchantInfo = {
    merchantId: "12345678901234567890",
    merchantName: "Ummeed"
  };
  const transactionInfo = {
    totalPriceStatus: "FINAL",
    totalPriceLabel: "Total",
    totalPrice: donation,
    currencyCode: "INR",
  };
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    callbackIntents,
    allowedPaymentMethods,
    merchantInfo,
    transactionInfo
  };
  return (
    <GooglePayButton
      environment="TEST"
      buttonType = "donate"
      buttonColor ="white"
      paymentRequest={{ ...paymentRequest }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
      onPaymentAuthorized={(paymentData) => {
        console.log("payment authorized", paymentData, transactionInfo);
      }}
    />
  );
};

 const GooglePay = ({amount}) => {
  return (
    <Box textAlign ="center"   component="section" mb={5}>
      <PayButton amount={amount}/>
    </Box> 
  );
};

export default GooglePay;
