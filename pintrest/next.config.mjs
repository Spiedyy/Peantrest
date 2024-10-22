/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.pinimg.com'],
    },
};

// module.exports = {
//     async redirects() {
//         return [
//             {
//                 source: '/pintrest',
//                 destination: '/boards',
//                 permanent: true,
//             },
//         ];
//     },
// }

export default nextConfig;
