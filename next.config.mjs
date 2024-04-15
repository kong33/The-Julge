// const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack', 'url-loader'],
//     });

//     // 기존의 webpack 설정에 TsconfigPathsPlugin을 추가합니다.
//     if (config.resolve.plugins) {
//       config.resolve.plugins.push(new TsconfigPathsPlugin());
//     } else {
//       config.resolve.plugins = [new TsconfigPathsPlugin()];
//     }

//     return config;
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'codeit-images.codeit.com',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  },
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
};

export default nextConfig;
