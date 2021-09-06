"use strict";

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyTimeout: 15000,
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/day"
      ],
      numberOfRuns: 1,
    },
    assert: {
      // preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["warn", { minScore: 0.8 }],
        "categories:best-practices": ["warn", { minScore: 0.8 }],
        "categories:seo": ["warn", { minScore: 0.8 }],
      },
    },
    upload: {
      // target: "temporary-public-storage",
      target: 'lhci',
      serverBaseUrl: 'https://glacial-eyrie-43671.herokuapp.com',
      // token set in command cli LHCI_BUILD_TOKEN
    },
  },
};
