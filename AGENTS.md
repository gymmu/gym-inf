# AGENTS.md

## Build, Lint, and Test Commands

- **Build**: Do not run a build, I will run the build on my own if needed
- **Lint**: `npx @biomejs/biome check .`
- **Run Tests**: Do not run any tests.

## Code Style Guidelines

- **Imports**: Group imports logically (external libraries, internal components,
  styles).
- **Formatting**: Use Biome for consistent formatting. Run `npx @biomejs/biome check .` to check.
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
