const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/.cache/dev-404-page.js"))),
  "component---src-pages-e-ticket-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/src/pages/e-ticket.js"))),
  "component---src-pages-generate-link-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/src/pages/generate-link.js"))),
  "component---src-pages-generate-qr-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/src/pages/generate-qr.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/src/pages/index.js"))),
  "component---src-pages-send-wishes-js": hot(preferDefault(require("/Users/ffrani/Desktop/wedding-invitations-croatia-master/src/pages/send-wishes.js")))
}

