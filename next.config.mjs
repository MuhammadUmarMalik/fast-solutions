export default {
  images: { formats: ["image/avif", "image/webp"], remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
  // One host only: www and the bare domain both answered 200, which splits ranking signals between two copies of the site.
  redirects: async () => [
    { source: "/:path*", has: [{ type: "host", value: "www.softexsolutions.tech" }], destination: "https://softexsolutions.tech/:path*", permanent: true },
  ],
};
