/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          http2: false,
          fs: false,
          net: false,
          tls: false,
          child_process: false,
        },
      };
      return config;
    },
  };
  
  export default nextConfig;
