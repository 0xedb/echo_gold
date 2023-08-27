/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{ hostname: 'i.pravatar.cc' }, { hostname: 'cdn.stocksnap.io' }]
    }
}

module.exports = nextConfig