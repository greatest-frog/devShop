import React from "react";

// Lazy imports element with minimum timers
export default function lazyTimerImport(importFunction, timer = 300) {
  return React.lazy(async () => {
    const [moduleExports] = await Promise.all([
      importFunction,
      new Promise((res) => setTimeout(() => res(), timer)),
    ]);
    return moduleExports;
  });
}
