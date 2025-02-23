export default function Home() {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">
      December 16, 2022. Received customer purchase order No. 53426 (Doc. No. 4) from Rosemont University, approved 
their credit and shipped the goods. All goods ordered were shipped, except that only 30 
shoulder pad sets were available for shipment.
      </h1>

      <h2 className="text-lg font-bold mb-2">Documents Required:</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Purchase Order:</strong> Fill out the right-hand side of the purchase order. Use the 'Price List' to determine each item's cost.
        </li>
        <li>
          <strong>Credit Sale Invoice:</strong> Fill out based on items requested on the Purchase Order.
          <br />
          <em>Remember: Only 30 shoulder pads available in this example.</em>
          <br />
          <strong>Signed by Jim Adams</strong>
        </li>
        <li>
          <strong>Bill of Lading:</strong> This document is for the shipping cost of the order. Find Carrier & Shipping Costs in the Transaction Description.
        </li>
      </ul>

      <h2 className="text-lg font-bold mb-2">Entries Required:</h2>
      <ul className="list-disc pl-5">
        <li>
          <strong>Sales Journal:</strong> Record the amount from the Credit Sale Invoice.
          <ul className="list-disc pl-5">
            <li>Dr. Accounts Receivable</li>
            <li>Cr. Sales</li>
          </ul>
        </li>
        <li>
          <strong>AR Subsidiary Ledger:</strong> Locate the subsidiary ledger for Rosemont University (406). The debit column will be the amount of the Credit Sale Invoice.
        </li>
      </ul>
    </>
  );
}

