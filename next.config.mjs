export default {
  images: { formats: ["image/avif", "image/webp"], remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  poweredByHeader: false,
  // No CSP: Next inlines its hydration scripts, so a real one needs per-request nonces, which would make every page dynamic. Add it when the site takes user input.
  headers: async () => [{
    source: "/:path*",
    headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ],
  }],
  // One host only: www and the bare domain both answered 200, which splits ranking signals between two copies of the site.
  redirects: async () => [
    { source: "/:path*", has: [{ type: "host", value: "www.softexsolutions.tech" }], destination: "https://softexsolutions.tech/:path*", permanent: true },
  ],
};
