export default function Home() {
    return (
      <>
        <h1 className="text-xl font-bold mb-4">
        December 19th, 2022. Borrowed $90,000 from First American Bank and Trust by issuing a two-year note payable 
(Doc. No. 14) with a stated annual interest rate of 5.5%. Received an email notification from the 
bank that the $90,000 proceeds were electronically deposited into Waren’s checking account. 
Reviewed the terms and conditions of the note and signed it (Ray Kramer) as the borrower
        </h1>
  
        <h2 className="text-lg font-bold mb-2">Documents Required:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Note Payable:</strong> This is document no. 14. Sign the bottom of the note as "Ray Kramer"
          </li>
          <li>
            <strong>Cash Reciept Prelist:</strong> Write down the amount of the ACH deposit.
          </li>
        </ul>
  
        <h2 className="text-lg font-bold mb-2">Entries Required:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>Cash Reciept Journal:</strong> Record the amount of the ACH deposit. [90,000] 
            <li>Dr. Cash</li>
            <li>Cr. Account No. 21100</li> <strong>Note: You have to manually write this account into the credit column because it is not a pre-set option</strong>
            <ul className="list-disc pl-5">
            </ul>
          </li>
          <li>
            <strong>General ledger:</strong> Record the amount of the ACH deposit as a "credit" in General Ledger No. 21100 (notes payable). 
          </li>
        </ul>
      </>
    );
  }