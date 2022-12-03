import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ReturnPolicy() {
  return (
    <div className="policy-wrapper">
        <Container>
        <Row>
            <Col><h1>Ecom Store Return Policy & Procedures </h1></Col>
            <Col>
                <div>
                    <h4>RETURN POLICY</h4>
                    <p>We accept returns and exchanges within 30 days of the receipt of your product as long as the item is in its original, unworn condition. Returns and exchanges are NOT offered on Last Chance, Gift Cards, or Final Sale items. All refunds are subject to a $10 restocking fee.</p>
                    <br />   
                    <h4><u>Unworn, Original, New Condition</u></h4> 
                    <p>All items returned and exchanged must be in their unworn and original, new condition. Please try on your shoes indoors on the carpet to ensure they are still in their original condition. We are more than happy to accommodate returns and exchanges on all TAFT products that are eligible, pending they have not been worn or had labels removed.
                    <br />
                    RETURNS/EXCHANGES:  Returns and exchanges are offered within the contiguous United States on all shoe purchases, unless otherwise noted on certain products (namely Last Chance, TAFT x YOU (Custom-Made), Final Sale, Gift Cards, and Seconds). Return/exchange requests must be made within 30 days of the date you receive your shoes. Requests after this point will be denied. All refunds will be subject to a $10 restocking fee. 
                    <br />
                    EXTENDED HOLIDAY RETURNS/EXCHANGES: For orders placed between 11/23-12/24, we will accept returns and exchanges through 1/30.

                    Shipping for returns & exchanges is free of charge within the contiguous United States.</p>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  );
}

export default ReturnPolicy;