import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/go/ppt",
        destination: "https://canva.link/kelompok3sosbudd",
        permanent: false,
      },
      {
        source: "/go/presentasi",
        destination: "https://canva.link/kelompok3sosbudd",
        permanent: false,
      },
      {
        source: "/go/makalah",
        destination: "https://1drv.ms/w/c/23d53d2ba9c333ff/IQDbmR8lRCKaTaGiNEWfjXwMAZ_8kzGE0AhTazhxS8VlT2I?e=X91e5p",
        permanent: false,
      },
      {
        source: "/go/drive",
        destination: "https://drive.google.com/drive/u/1/folders/1bw-PLHiOR_fS-qzUczeqxmtR_4-vMiC9",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
