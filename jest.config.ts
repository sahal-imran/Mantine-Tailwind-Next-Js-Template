// jest.setup.ts
import nextJest from 'next/jest';
import type { Config } from '@jest/types';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
};

export default createJestConfig(customJestConfig);
