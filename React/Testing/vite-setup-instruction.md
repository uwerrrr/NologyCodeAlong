1. Install vitest

```
npm install vitest --save-dev
```

2. Add a testing script:

```
    "scripts": {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview",
        "test": "vitest"
    },
```

3. Add a dummy test (test files with vitest should be .jsx)

- NOTE: may need to import describe, expect and, it from vitest at first.

```
describe("Setup test", () => {
    it("checks true", () => {
        expect(true).toBe(true);
    });
});

```

4. Add js-dom to be able to test in DOM-like environment

```
npm install jsdom --save-dev
```

5. Add jsdom to vite config

```
export default defineConfig({
    plugins: [react()],
    test: {
        environment: "jsdom",
    },
});
```

6. Add react testing library

```
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

7. Create ./config/test-setup.js

```
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

// adds react testing library matchers to vitest
expect.extend(matchers);

// clean up after every test - unmount my components every time
afterEach(() => {
    cleanup();
});

```

8. Update vite.config

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./config/test-setup.js",
    },
});

```

9. Add the library that will allow us to simulate user events

```
npm install @testing-library/user-event --save-dev
```
