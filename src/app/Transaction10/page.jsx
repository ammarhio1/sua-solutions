export default function Home() {
    return (
      <>
        <h1 className="text-xl font-bold mb-4">
        December 21, 2022. Filled the backorder quantity of 45 shoulder pad sets for Rosemont University’s customer 
purchase order No. 53426 (Doc. No. 4). Approved Rosemont’s credit and shipped the back 
ordered shoulder pad sets. Prepared a new charge sale invoice (Doc. No. 6) for the sale to 
Rosemont
        </h1>
  
        <h2 className="text-lg font-bold mb-2">Documents Required:</h2>
        <ul className="list-disc pl-5 mb-4">
          <li>
            <strong>Purchase Order:</strong> Fill out the right-hand side of the purchase order. Use the 'Price List' to determine each item's cost.
          </li>
          <li>
            <strong>Charge Sale Invoice:</strong> Fill out based on items requested on the Purchase Order. This time, ship out the quantiy of items that were backordered. 
            <br />
            <em>Remember: Only 30 shoulder pads available in the initial transaction. Since they wanted a total of 45, ship out the difference that you did not previosly have in inventory... but do have now.</em>
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
            <strong>Sales Journal:</strong> Record the amount from the Charge Sale Invoice.
            <ul className="list-disc pl-5">
              <li>Dr. Accounts Receivable</li>
              <li>Cr. Sales</li>
            </ul>
          </li>
          <li>
            <strong>AR Subsidiary Ledger:</strong> Locate the subsidiary ledger for Rosemont University (406). The debit column will be the amount of the Credit Sale Invoice. At this point, you should have entered two invoice line items for Rosemont University.
          </li>
        </ul>
      </>
    );
  }
  
  