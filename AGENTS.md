# AGENTS.md

## Build, Lint, and Test Commands

- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Run Tests**: Use `npm test` to run all tests. For a single test, use
  `npm test -- <test-file>`.

## Code Style Guidelines

- **Imports**: Group imports logically (external libraries, internal components,
  styles).
- **Formatting**: Use Prettier for consistent formatting. Run `npm run lint` to
  check.
- **Types**: Use TypeScript where applicable. Ensure all components have defined
  prop types.
- **Naming Conventions**: Use camelCase for variables and functions, PascalCase
  for components.
- **Error Handling**: Use `try-catch` blocks for async functions. Utilize
  `react-error-boundary` for UI error handling.

## Cursor Rules

- No specific rules found in `.cursor/rules/`.

## Copilot Rules

- No specific rules found in `.github/copilot-instructions.md`.
