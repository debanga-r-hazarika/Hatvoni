/**
 * Public Velocity carrier tracking pages (Hatvoni-branded on Velocity).
 * Override with VITE_VELOCITY_TRACKING_BASE if the portal domain changes.
 */
export const VELOCITY_TRACKING_BASE = String(
  import.meta.env.VITE_VELOCITY_TRACKING_BASE || 'https://www.velocityshipping.in/track',
).replace(/\/$/, '');

export function velocityTrackingPageUrl(trackingId) {
  const id = String(trackingId || '').trim();
  return `${VELOCITY_TRACKING_BASE}/${encodeURIComponent(id)}`;
}

/** AWB-style ids: digits and alphanumerics; adjust if your carrier format differs */
export function isLikelyTrackingId(raw) {
  const s = String(raw || '').trim();
  return /^[A-Za-z0-9][A-Za-z0-9_-]{4,39}$/.test(s);
}
