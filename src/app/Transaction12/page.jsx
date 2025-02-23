export default function Home() {
    return (
      <>
        <h1 className="text-xl font-bold mb-4">
        Received legal notification from Benson, Rosenbrook, and Martinson, P.C., attorneys at law, 
that Stevenson College had filed bankruptcy and will most likely be unable to pay any of its 
outstanding debts to its suppliers. Write off the account as a bad debt.
        </h1>
  
        <h2 className="text-lg font-bold mb-2">NO DOCUMENTS REQUIRED</h2>
  
        <h2 className="text-lg font-bold mb-2">Entries Required:</h2>
        <ul className="list-disc pl-5">
          <li>
            <strong>General Journal: Go to account no. 10300 (allowance for doubtful accounts)</strong>
            <ul className="list-disc pl-5">
            <li>Make a "debit" entry in the amount of the write-off [$2,900.00]</li>
          </ul>
            </li>
        </ul>
        <ul className="list-disc pl-5">
          <li>
            <strong>AR Subsidiary Ledger: Go to account no. 411 (Stevenson College)</strong>
            <ul className="list-disc pl-5">
            <li>Make a "credit" entry in the amount of the write-off [$2,900.00]</li>
          </ul>
            </li>
        </ul>
      </>
    );
  }