/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cuberto.com',
      },
    ],
  },
  webpack: (config) => {
    // Add loaders for GLSL shader files
    config.module.rules.push({
      test: /\.(glsl|vert|frag)$/,
      use: [
        'raw-loader',
        'glslify-loader'
      ]
    });
    
    return config;
  }
};

export default nextConfig;
