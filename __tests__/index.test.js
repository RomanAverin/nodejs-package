import { test, expect } from '@jest/globals';
import main from '../index.js';

test('main', () => {
  expect(main(6)).toBe(3);
});
