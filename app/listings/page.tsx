export default function Listings() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">Inventory</h1>
      <div id="ebay-listings" style="display: flex; flex-wrap: wrap; gap: 20px;">
      </div>
      
      <script>
        const ebaySellerName = 'calico-goods';
        const ebayRssUrl = `https://www.ebay.com/sch/i.html?_ssn=${ebaySellerName}&_rss=1`;
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(ebayRssUrl)}`;
      
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            const container = document.getElementById('ebay-listings');
            
            if (data.status === 'ok' && data.items.length > 0) {
              let html = '';
              data.items.forEach(item => {
                html += `
                  <div style="border: 1px solid #ccc; padding: 15px; width: 250px; border-radius: 8px;">
                    <h4 style="margin: 0 0 10px 0; font-size: 16px;">
                      <a href="${item.link}" target="_blank" style="text-decoration: none; color: #333;">
                        ${item.title}
                      </a>
                    </h4>
                    <a href="${item.link}" target="_blank" style="display: inline-block; padding: 8px 12px; background: #0064d2; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">
                      View on eBay
                    </a>
                  </div>
                `;
              });
              container.innerHTML = html;
            } else {
              container.innerHTML = '<p>No listings found or error loading feed.</p>';
            }
          })
          .catch(error => {
            console.error('Error fetching eBay listings:', error);
            document.getElementById('ebay-listings').innerHTML = '<p>Failed to load listings.</p>';
          });
      </script>
    </main>
  );
}
