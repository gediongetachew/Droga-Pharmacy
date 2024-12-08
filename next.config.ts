import type { NextConfig } from "next";
require('dotenv').config();
module.exports ={
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY
  }
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pharma.drogaconsulting.com'], // Add your external domain here
  },
};

module.exports = nextConfig;



export default nextConfig;

