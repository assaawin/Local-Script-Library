export interface Script {
  id: string;
  name: string;
  author: {
    name: string;
    country: string;
    flag: string;
    avatar?: string;
  };
  description: string;
  longDescription: string;
  targetWebsites: string[];
  category: string;
  rating: number;
  downloads: number;
  verified: boolean;
  createdAt: string;
  code: string;
  compatibility: string[];
  screenshots?: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const categories = [
  "All",
  "Banking",
  "E-commerce",
  "Social Media",
  "News",
  "Government",
  "Productivity",
  "Entertainment",
  "Education",
];

export const countries = [
  { name: "Nigeria", code: "NG", flag: "🇳🇬" },
  { name: "Kenya", code: "KE", flag: "🇰🇪" },
  { name: "South Africa", code: "ZA", flag: "🇿🇦" },
  { name: "Ghana", code: "GH", flag: "🇬🇭" },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹" },
  { name: "Egypt", code: "EG", flag: "🇪🇬" },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿" },
  { name: "Uganda", code: "UG", flag: "🇺🇬" },
];

export const mockScripts: Script[] = [
  {
    id: "1",
    name: "Jumia Auto-Fill Checkout",
    author: {
      name: "Chidi Okonkwo",
      country: "Nigeria",
      flag: "🇳🇬",
    },
    description: "Automatically fills in your shipping details on Jumia checkout pages. Saves time and reduces errors.",
    longDescription: "This script enhances your Jumia shopping experience by automatically filling in your saved shipping information during checkout. It securely stores your details locally and populates the form fields with a single click. Perfect for frequent shoppers who want to streamline their purchase process.",
    targetWebsites: ["jumia.com.ng", "jumia.co.ke", "jumia.com.gh"],
    category: "E-commerce",
    rating: 4.8,
    downloads: 12450,
    verified: true,
    createdAt: "2024-09-15",
    code: `// ==UserScript==
// @name         Jumia Auto-Fill Checkout
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Auto-fill checkout details on Jumia
// @author       Chidi Okonkwo
// @match        https://*.jumia.com*/checkout
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    
    // Your saved details
    const savedData = GM_getValue('jumiaCheckoutData', {});
    
    function fillForm() {
        if (savedData.name) {
            document.querySelector('#name').value = savedData.name;
        }
        // ... more fields
    }
    
    // Wait for page load
    window.addEventListener('load', fillForm);
})();`,
    compatibility: ["Tampermonkey", "Greasemonkey"],
    screenshots: ["https://images.unsplash.com/photo-1650600538903-ec09f670c391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzYxNDY4NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"],
    reviews: [
      {
        id: "r1",
        author: "Amina K.",
        rating: 5,
        comment: "Life saver! I order from Jumia almost daily and this has cut my checkout time in half.",
        date: "2024-10-10",
      },
      {
        id: "r2",
        author: "Kwame A.",
        rating: 4,
        comment: "Works great! Would love to see support for multiple addresses.",
        date: "2024-10-05",
      },
    ],
  },
  {
    id: "2",
    name: "KCB Bank Enhanced Security",
    author: {
      name: "Wanjiku Maina",
      country: "Kenya",
      flag: "🇰🇪",
    },
    description: "Adds additional visual security indicators to KCB online banking for safer transactions.",
    longDescription: "Enhance your KCB online banking security with visual indicators that help you identify secure pages and potential phishing attempts. This script adds security badges, connection status indicators, and transaction confirmations to give you peace of mind while banking online.",
    targetWebsites: ["kcbgroup.com"],
    category: "Banking",
    rating: 4.9,
    downloads: 8923,
    verified: true,
    createdAt: "2024-08-22",
    code: `// ==UserScript==
// @name         KCB Bank Enhanced Security
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Enhanced security for KCB online banking
// @author       Wanjiku Maina
// @match        https://*.kcbgroup.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Add security indicator
    const indicator = document.createElement('div');
    indicator.innerHTML = '🔒 Secure Connection Verified';
    indicator.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#28a745;color:white;padding:8px;text-align:center;z-index:9999;';
    document.body.prepend(indicator);
})();`,
    compatibility: ["Tampermonkey", "Violentmonkey"],
    reviews: [],
  },
  {
    id: "3",
    name: "Twitter Dark Mode for African Time Zones",
    author: {
      name: "Thabo Ndlovu",
      country: "South Africa",
      flag: "🇿🇦",
    },
    description: "Automatically switches Twitter to dark mode during evening hours based on African time zones.",
    longDescription: "This smart script automatically toggles Twitter's dark mode based on the time of day in your African time zone. It helps reduce eye strain during late-night browsing and saves battery on mobile devices. Customizable schedule with smooth transitions.",
    targetWebsites: ["twitter.com", "x.com"],
    category: "Social Media",
    rating: 4.6,
    downloads: 15670,
    verified: false,
    createdAt: "2024-10-01",
    code: `// ==UserScript==
// @name         Twitter Dark Mode Auto-Switch
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Auto dark mode for African timezones
// @author       Thabo Ndlovu
// @match        https://twitter.com/*
// @match        https://x.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    const hour = new Date().getHours();
    const isDarkTime = hour >= 18 || hour < 6;
    
    if (isDarkTime) {
        // Trigger dark mode
        document.body.classList.add('dark-mode');
    }
})();`,
    compatibility: ["Tampermonkey"],
    reviews: [],
  },
  {
    id: "4",
    name: "MTN Data Usage Monitor",
    author: {
      name: "Kwesi Mensah",
      country: "Ghana",
      flag: "🇬🇭",
    },
    description: "Real-time data usage tracking for MTN Ghana subscribers with usage alerts.",
    longDescription: "Keep track of your MTN data usage in real-time with this handy script. It displays a persistent widget showing your current data consumption and sends alerts when you're approaching your limit. Helps you avoid unexpected charges and manage your data more efficiently.",
    targetWebsites: ["mtn.com.gh"],
    category: "Productivity",
    rating: 4.7,
    downloads: 6234,
    verified: true,
    createdAt: "2024-09-28",
    code: `// ==UserScript==
// @name         MTN Data Monitor
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Track MTN data usage
// @author       Kwesi Mensah
// @match        https://*.mtn.com.gh/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    
    function createMonitor() {
        const monitor = document.createElement('div');
        monitor.innerHTML = '<strong>Data Usage:</strong> <span id="usage">Loading...</span>';
        monitor.style.cssText = 'position:fixed;bottom:20px;right:20px;background:white;padding:15px;border-radius:8px;box-shadow:0 2px 10px rgba(0,0,0,0.1);';
        document.body.appendChild(monitor);
    }
    
    createMonitor();
})();`,
    compatibility: ["Tampermonkey", "Greasemonkey"],
    reviews: [],
  },
  {
    id: "5",
    name: "Konga Price Tracker",
    author: {
      name: "Funmi Adeleke",
      country: "Nigeria",
      flag: "🇳🇬",
    },
    description: "Track price changes on Konga products and get notifications when prices drop.",
    longDescription: "Never miss a deal again! This script monitors prices of products you're interested in on Konga and notifies you when they drop. It maintains a price history and displays trends so you can make informed purchasing decisions. Perfect for bargain hunters and smart shoppers.",
    targetWebsites: ["konga.com"],
    category: "E-commerce",
    rating: 4.5,
    downloads: 9876,
    verified: false,
    createdAt: "2024-10-12",
    code: `// ==UserScript==
// @name         Konga Price Tracker
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Track Konga product prices
// @author       Funmi Adeleke
// @match        https://www.konga.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    
    const currentPrice = document.querySelector('.price')?.textContent;
    const productId = window.location.pathname.split('/').pop();
    
    if (currentPrice && productId) {
        const savedPrice = GM_getValue(productId, null);
        if (savedPrice && parseFloat(currentPrice) < parseFloat(savedPrice)) {
            alert('Price dropped! Was: ' + savedPrice + ', Now: ' + currentPrice);
        }
        GM_setValue(productId, currentPrice);
    }
})();`,
    compatibility: ["Tampermonkey"],
    reviews: [],
  },
  {
    id: "6",
    name: "NHIF Portal Auto-Login",
    author: {
      name: "James Omondi",
      country: "Kenya",
      flag: "🇰🇪",
    },
    description: "Securely auto-fills login credentials for the NHIF member portal.",
    longDescription: "Streamline your access to the NHIF member portal with secure auto-login functionality. This script encrypts and stores your credentials locally, automatically filling them in when you visit the portal. Saves time and frustration when checking your medical insurance details.",
    targetWebsites: ["nhif.or.ke"],
    category: "Government",
    rating: 4.4,
    downloads: 5432,
    verified: true,
    createdAt: "2024-09-05",
    code: `// ==UserScript==
// @name         NHIF Portal Auto-Login
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto-login for NHIF portal
// @author       James Omondi
// @match        https://www.nhif.or.ke/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    
    const credentials = GM_getValue('nhifCreds', null);
    
    if (credentials && document.querySelector('#username')) {
        document.querySelector('#username').value = credentials.username;
        document.querySelector('#password').value = credentials.password;
    }
})();`,
    compatibility: ["Tampermonkey", "Violentmonkey"],
    reviews: [],
  },
];

export const featuredScripts = mockScripts.slice(0, 3);

export const stats = {
  totalScripts: 5234,
  countries: 20,
  downloads: 2456789,
  activeUsers: 45670,
};
