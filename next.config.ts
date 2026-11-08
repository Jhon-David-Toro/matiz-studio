import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  poweredByHeader: false,
  devIndicators: false,
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
