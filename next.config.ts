import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export" ,
  basePath: "/travelNext" ,
  assetPrefix : "/travelNext/" ,
  reactCompiler: true,
  trailingSlash: true,
};

export default nextConfig;
