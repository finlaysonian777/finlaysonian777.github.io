// Preserve links to sections of the original Heated Cat Carrier page.
const carrierAnchors = new Set(['overview', 'problem', 'solution', 'contributions', 'physical-build']);
if (carrierAnchors.has(location.hash.slice(1))) {
  location.replace('heated-cat-carrier.html' + location.hash);
}
