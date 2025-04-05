import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async headers() {
        return [
            {
                source: "/hero.mp4",
                headers: [
                    {
                        key: "Accept-Ranges",
                        value: "bytes",
                    },
                ],
            },
        ];
    },
}
    ;

export default nextConfig;
