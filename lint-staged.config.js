export default {
  './src/**/*.{js,jsx,ts,tsx}': ['yarn lint:fix', 'yarn format', 'git add .'],
  '**/*.{json,css,scss,md,webmanifest}': ['yarn format', 'git add .'],
};
