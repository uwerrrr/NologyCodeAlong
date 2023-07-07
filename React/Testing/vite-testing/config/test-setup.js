import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// adds react testing library matchers to vitest
expect.extend(matchers);

// clean up after every test - unmount my components every time
afterEach(() => {
  cleanup();
});
