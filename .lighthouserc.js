'use strict';

module.exports = {
  "ci": {
    "collect": {
      // "staticDistDir":"./.next",
      // "url": [ "/" ],
      "startServerCommand": "npm run start",
      "url": [
        "http://localhost:3000/",
        "http://localhost:3000/day"
      ],
      "numberOfRuns": 2
    },
    "assert": {
      // "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": [ "warn", {"minScore": 0.8 } ],
        "categories:accessibility": [ "warn", {"minScore": 0.8 } ],
        "categories:best-practices": [ "warn", {"minScore": 0.8 } ],
        "categories:seo": [ "warn", {"minScore": 0.8 } ],
        // "first-contentful-paint": [
        //   "warn",
        //   {
        //     "maxNumericValue": 2500,
        //     "aggregationMethod": "optimistic"
        //   }
        // ],
        // "interactive": [
        //   "warn",
        //   {
        //     "maxNumericValue": 5000,
        //     "aggregationMethod": "optimistic"
        //   }
        // ],
        // "uses-long-cache-ttl": "off",
        // "uses-http2": "off"
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}