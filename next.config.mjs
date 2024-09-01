import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // Your Next.js config
});

// const withPWA = require("@ducanh2912/next-pwa").default({
//   dest: "public",
// });

// module.exports = withPWA({
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "lh3.googleusercontent.com",
//         },
//       ],
//     },
// });
