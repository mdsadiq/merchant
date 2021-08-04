'use strict';

module.exports = {
  "ci": {
    "collect": {
      // "staticDistDir":"./.next",
      "url": [ "http://localhost:3000/", "http://localhost:3000/day", "http://localhost:3000/" ],
      "startServerCommand": "npm run start",
      "startServerReadyTimeout": 20000, // milliseconds

      // "startServerReadyPattern": "started server on 0.0.0.0:3000",
      // "url": [ "http://localhost/", "http://localhost/day" ],
      // "url": [
      //   "http://localhost:3000/",
      //   "http://localhost:3000/day"
      // ],
      "numberOfRuns": 1
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