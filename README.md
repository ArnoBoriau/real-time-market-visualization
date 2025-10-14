# Real-Time Market Visualization

**Exploring SolidJS through a real-world use case: high-frequency data visualization.**

This project started with research into **SolidJS's performance characteristics** — specifically its fine-grained reactivity and speed advantages over traditional virtual DOM frameworks. After understanding the technical differences, the goal became: **what's a real-world scenario where these benefits actually matter?**

The answer: **real-time data dashboards** with high-frequency updates.

## 🎯 Concept

The project explores SolidJS through a **believable production use case** — a market visualization dashboard that handles hundreds of price updates per second.

### Research Foundation

Initial research revealed SolidJS's key performance advantages:

- **Fine-grained reactivity**: Updates bypass component re-renders entirely
- **No virtual DOM**: Direct DOM manipulation reduces overhead
- **Predictable scaling**: Performance stays consistent as update frequency increases

### Real-World Application

Rather than just demonstrating speed differences, this project asks: **"Where would I actually use this?"**

The market dashboard provides a concrete answer:

- Hundreds of price updates per second
- Visual feedback showing real-time changes
- Sustained smooth performance without frame drops

The goal is to bridge **research insights** with **practical application** — showing both _why_ SolidJS is fast and _when_ that speed matters.

## 🔬 Research Background

### Performance Characteristics

Research into SolidJS revealed significant performance advantages compared to React and other virtual DOM frameworks:

**React's approach:**

- State change triggers component re-render
- Virtual DOM compares old vs new trees
- Patches are applied to real DOM
- **Overhead scales with component tree size**

**SolidJS's approach:**

- Signals track dependencies at compile time
- Changes update DOM directly via reactive primitives
- No component re-renders or diffing needed
- **Overhead scales only with changed values**

### Measured Differences

- **Update speed**: 3-5x faster for high-frequency changes
- **Memory usage**: Lower baseline and more predictable
- **Render consistency**: No frame drops under sustained load

### The Question

Understanding the technical differences raised a design question:  
**"Where does this performance actually translate to better UX?"**

## 🎯 Real-World Application

### The Use Case

Real-time data dashboards are a perfect match for SolidJS's strengths:

**Why this works:**

- High-frequency updates (100–200/sec)
- Stable UI structure with dynamic data
- User needs smooth, responsive feedback
- Performance directly impacts perceived quality

**Demonstrated benefits:**

- Sustained smoothness without optimization tricks
- Visual updates feel instantaneous
- Efficient enough to run on lower-end devices

### When SolidJS Makes Sense

Based on research and implementation, SolidJS excels when:

- ✅ Data changes frequently but UI structure stays stable
- ✅ Performance under sustained load is critical
- ✅ Update frequency is high (10+ updates/second)
- ✅ Predictable frame rates matter for UX

Similar use cases:

- Trading platforms and financial dashboards
- Live sports scores and statistics
- IoT monitoring interfaces
- Collaborative real-time tools
- Live data visualization

### When to Choose Something Else

SolidJS isn't always the right choice:

- ❌ UI structure changes frequently (complex conditional rendering)
- ❌ Heavy reliance on React ecosystem libraries is needed
- ❌ Team familiarity and hiring pool are primary concerns

## 🚀 Features

- **Simulated Market Data**: Realistic stock and crypto price movements
- **High-Frequency Updates**: 100–200 updates per second sustained
- **Visual Feedback**: Flash animations highlight real-time changes
- **Performance Metrics**: Live stats showing updates/sec and render efficiency
- **Smooth Performance**: Demonstrates fine-grained reactivity in action

## 📊 Data Simulation

All data is **simulated** — no external APIs are used:

- **Initial Prices**: Realistic starting values for major stocks and crypto assets
- **Price Movements**: Weighted random walks based on typical asset volatility
- **Update Logic**: Randomized intervals to simulate real market behavior

## 🏃 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🛠️ Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx      # Main dashboard container
│   └── StockCard.tsx      # Individual market item card
├── services/
│   └── stockSetup.ts      # Data fetching and simulation logic
├── types/
│   └── stock.ts           # TypeScript definitions
└── routes/
    └── index.tsx          # Main route
```

## 🎓 Context

This is a **Devine Development Expert assignment** that requires exploring a framework not covered in class. The assignment includes both a working implementation and a presentation about the chosen framework.

**Assignment**: Explore SolidJS

**Project approach:**

1. **Research phase**: Investigated SolidJS performance characteristics and speed differences vs React
2. **Application phase**: Identified a real-world use case that benefits from these characteristics
3. **Implementation phase**: Built a polished demo that demonstrates the practical value
4. **Presentation phase**: Communicate findings and demonstrate when SolidJS excels

The emphasis is on:

- **Deep exploration**: Understanding a new framework beyond surface-level features
- **Research-driven design**: Technical understanding informing tool choice
- **Real-world applicability**: Moving beyond benchmarks to actual use cases
- **Visual polish**: A believable, portfolio-quality interface
- **Technical depth**: Demonstrating understanding of reactivity models and trade-offs

**Project Name**: Real-Time Market Visualization  
**Dev Name**: `real-time-market-visualization`  
**Framework**: SolidJS  
**Focus**: Exploring fine-grained reactivity through high-frequency data visualization
