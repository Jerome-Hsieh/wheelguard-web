import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_PUBLIC_API_PATH: "http://localhost:8000/",
  }
};

export default nextConfig;
