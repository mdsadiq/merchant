'use strict';

module.exports = {
  "ci": {
    "collect": {
      "staticDistDir":"./.next"
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": [ "error", {"minScore": 0.8 } ],
        "categories:accessibility": [ "error", {"minScore": 0.8 } ],
        "categories:best-practices": [ "error", {"minScore": 0.8 } ],
        "categories:seo": [ "error", {"minScore": 0.8 } ],
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