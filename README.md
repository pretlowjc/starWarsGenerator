# 🌌 Star Wars Quote Generator

A simple Node.js command-line application that displays a random quote from the Star Wars movies. You can filter quotes by trilogy (`original`, `prequel`, `sequel`) or by movie title — or use both for more specific results.

---

## 🚀 Features

-   🎲 Generates a random quote every time you run the program
-   🎬 Filter by **trilogy** (`--trilogy original`)
-   🎞️ Filter by **movie title** (`--movie "Revenge of the Sith"`)
-   🛠️ Built with **pure JavaScript** — no dependencies required

---

## 🧪 Example Usage

```bash
# Run with no filters
node starwars-quotes.js

# Filter by trilogy
node starwars-quotes.js --trilogy prequel

# Filter by movie title
node starwars-quotes.js --movie "The Empire Strikes Back"

# Combine both
node starwars-quotes.js --trilogy sequel --movie "The Force Awakens"
```
