import React from 'react';

const EBAY_CLIENT_ID = process.env.EBAY_CLIENT_ID || "";
const EBAY_CLIENT_SECRET = process.env.EBAY_CLIENT_SECRET || "";
const EBAY_SELLER_NAME = "calico-goods";

interface EbayItem {
  itemId: string;
  title: string;
  itemWebUrl: string;
}

async function getEbayToken() {
  const credentials = Buffer.from(`${EBAY_CLIENT_ID}:${EBAY_CLIENT_SECRET}`).toString('base64');
  
  const response = await fetch('https://api.ebay.com/identity/v1/oauth2/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${credentials}`
    },
    body: 'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope'
  });

  if (!response.ok) {
    throw new Error('Failed to fetch eBay OAuth token');
  }

  const data = await response.json();
  return data.access_token;
}

async function fetchListings() {
  const token = await getEbayToken();
  const url = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=*&filter=sellers:{${EBAY_SELLER_NAME}}`;

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US'
    },
    next: { revalidate: 3600 } 
  });

  if (!response.ok) {
    throw new Error('Failed to fetch eBay listings');
  }

  const data = await response.json();
  return data.itemSummaries || [];
}

export default async function Listings() {
  let listings: EbayItem[] = [];
  let errorMessage: string | null = null;

  try {
    listings = await fetchListings();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      
      {errorMessage && (
        <div style={{ padding: '15px', background: '#fee2e2', color: '#991b1b', borderRadius: '8px', border: '1px solid #f87171' }}>
          <strong>Error Details:</strong> {errorMessage}
        </div>
      )}

      {!errorMessage && listings.length === 0 && (
        <p>No listings found for this store.</p>
      )}

      {!errorMessage && listings.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {listings.map((item) => (
            <div key={item.itemId} style={{ border: '1px solid #ccc', padding: '15px', width: '250px', borderRadius: '8px' }}>
              <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
                <a href={item.itemWebUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
                  {item.title}
                </a>
              </h4>
              <a href={item.itemWebUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 12px', background: '#0064d2', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
                View on eBay
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
