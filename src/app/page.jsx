'use client'; // This enables client-side rendering

import { useState } from 'react'; // Import useState to handle the button click state

export default function Home() {
  const [isPurchased, setIsPurchased] = useState(false); // State to track whether the user has purchased

  const handlePurchaseClick = () => {
    setIsPurchased(true); // Mark that the user has purchased access
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Systems Understanding Aid 10th Edition - Solutions</h1>

      <div className="mb-4">
        <p><strong>Sales and Cash Reciepts Transactions</strong></p>

        <p><strong>Note: The transactions listed on this site are ONLY for Sales and Cash Reciepts. For this reason, some transactions are skipped.</strong></p>
        
        
      </div>
    </>
  );
}
