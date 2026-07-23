# RAM Visualization Plan

## Goal
Create a better RAM representation showing memory as a top-down heap-style visualization where each entry is exactly one byte.

## Requirements
1. ✅ Top-down (heap-style) display - higher addresses at top, lower at bottom
2. ✅ Each cell = exactly 1 byte (8 bits)
3. ✅ Show ellipsis (...) to indicate memory continues above and below visible window
4. ✅ Display both binary bits AND character representation for each cell
5. ✅ Show "Hallo Welt!" text in the memory visualization
6. ✅ Show free memory cells after the text (at least 3-4 empty cells)
7. ✅ Always show only one memory section/window

## Implementation

### New Component: MemoryStackVisualizer.jsx
**Location**: `/home/cedric/workspace/gym-inf/src/components/MemoryStackVisualizer.jsx`

**Features**:
- Uses `flexDirection: "column-reverse"` to display higher addresses at top
- Shows 21 visible memory cells total:
  - 4 cells above "Hallo Welt!" (to demonstrate memory continues upward)
  - 11 cells for "Hallo Welt!" itself
  - 4 free cells after the text
- Each row contains:
  - Hex address (0x1000 format)
  - 8 bits grouped as two nibbles (4+4 bits)
  - Character representation (or "." for non-printable)
- Ellipsis at top and bottom indicate infinite memory
- Color scheme: green for 1-bits, red for 0-bits

### Updated File: hardware.jsx
**Changes**:
1. Import statement updated to use MemoryStackVisualizer instead of MemoryVisualizer
2. Component replacement on line 72
3. Added new section "Wie ist 'Hallo Welt!' im Speicher gespeichert?" with:
   - Complete ASCII table showing all characters
   - Explanation of byte usage per character
   - Second MemoryStackVisualizer for visual demonstration

## Usage in Future Chapters
The MemoryStackVisualizer component can be reused in future chapters by importing it:

```jsx
import MemoryStackVisualizer from "@components/MemoryStackVisualizer";

// Then use it anywhere:
<MemoryStackVisualizer />
```

## Benefits for Later Chapters
- Clean, simple visualization that's easy to understand
- Shows the concept of memory addresses and binary representation
- Demonstrates how text is stored as ASCII values
- Scalable - can show different memory contents by modifying the data array
- Consistent with existing codebase color scheme
