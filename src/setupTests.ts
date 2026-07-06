import '@testing-library/jest-dom'

if (typeof ResizeObserver === 'undefined') {
  ;(globalThis as any).ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
}

// jsdom does not implement layout, so getBoundingClientRect() always returns
// all-zero dimensions. Recharts' ResponsiveContainer reads this on mount to
// size the chart, so without a non-zero stub it never renders its children.
Object.defineProperty(HTMLElement.prototype, 'getBoundingClientRect', {
  configurable: true,
  value: () => ({
    width: 400,
    height: 400,
    top: 0,
    left: 0,
    bottom: 400,
    right: 400,
    x: 0,
    y: 0,
    toJSON: () => {},
  }),
})
