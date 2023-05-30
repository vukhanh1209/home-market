

const PayPal = (props) => {
    const {height} = props;
    return (
        <>
            <table border="0" cellPadding="10" cellSpacing="0" ><tr><td style={{padding: '0'}}><a href="https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2" title="PayPal" onClick={() => {window.open('https://www.paypal.com/c2/webapps/mpp/home?locale.x=en_C2','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;}}><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-150px.png" border="0" style={{height: `${height}px`}} alt="PayPal Logo"/></a></td></tr></table>
        </>
    )
}

export default PayPal;