export default function Home() {
    return (
      <>
        <h1 className="text-xl font-bold mb-4">
        December 16, 2022. Received an email notification from First American Bank and Trust for an ACH payment from 
Branch College. ACH payment received was $1,622.88 for payment in full of charge sale 
invoice No. 730.
        </h1>

  
        <h2 className="text-lg font-bold mb-2">Documents Required:</h2>
        <ul className="list-disc pl-5 mb-4">
        <li>
            <strong>Locate FULL amount of invoice no. 730. This can be found in the Sales Journal.</strong> 
          </li>
          <li>
            <strong>Cash Prelist:</strong> Write down the amount of monies recieved and the FULL amount of the invoice. Also put a check mark in the "ACH" column.
          </li>
        </ul>
  
        <h2 className="text-lg font-bold mb-2">Entries Required:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Cash Reciepts Journal:</strong> Record the amount of the ACH payment.
            <ul className="list-disc pl-5">
              <li>Dr. Accounts Receivable for the amount of the monies recieved</li>
              <li>Dr. Sales Discounts for the difference between monies recieved and the FULL invoice amount</li>
              <li>Cr. Sales for the FULL invoice amount.</li>
            </ul>
          </li>
          <li>
            <strong>AR Subsidiary Ledger:</strong> Locate the subsidiary ledger for Branch College. Record the FULL invoice amount in the credit column and update AR Subsidiary balance.
          </li>
        </ul>
      </>
    );
  }
  
  