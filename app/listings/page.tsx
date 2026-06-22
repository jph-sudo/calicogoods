"use client";

import { useEffect, useState } from 'react';

interface EbayItem {
  title: string;
  link: string;
}

export default function Listings() {
  const [listings, setListings] = useState<EbayItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ebaySellerName = 'calico-goods';
    const ebayRssUrl = `https://www.ebay.com/sch/i.html?_ssn=${ebaySellerName}&_rss=1`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(ebayRssUrl)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok' && data.items.length > 0) {
          setListings(data.items);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching eBay listings:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Inventory</h1>
      
      {loading && <p>Loading inventory...</p>}
      {error && <p>Failed to load listings.</p>}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {listings.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', width: '250px', borderRadius: '8px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>
              <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#333' }}>
                {item.title}
              </a>
            </h4>
            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '8px 12px', background: '#0064d2', color: 'white', textDecoration: 'none', borderRadius: '4px', fontWeight: 'bold' }}>
              View on eBay
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
