/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const nextConfig = {
  sassOptions: {
   // prependData: `@import "src/styles/globals.scss";`,
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codeit-images.codeit.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
   webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/, // SCSS 파일을 찾기 위한 정규식
      use: [
        'style-loader', // 스타일을 DOM에 삽입하는 데 사용됩니다.
        'css-loader', // CSS 파일을 모듈로 변환합니다.
        'sass-loader' // SCSS 파일을 CSS로 변환합니다.
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    return config;
}
};
export default nextConfig;
