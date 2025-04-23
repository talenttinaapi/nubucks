# Game Testing Framework

A robust Playwright-based testing framework for game testing, specifically designed for the Buck Bucks Bagawk™ game. This framework provides comprehensive test coverage for game loading, viewport changes, and responsive behavior across different desktop browsers.

## Features

- 🎮 Automated game loading verification
- 🖥️ Desktop-first testing approach
- 📐 Responsive design validation
- 📸 Automatic screenshot capture on test failure
- 🎥 Video recording of failed test runs
- 🔍 Detailed HTML test reports

## Supported Browsers

- 🌐 Desktop Chrome
- 🦊 Desktop Firefox
- 🧭 Desktop Safari

## Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

## Running Tests

### All Tests
```bash
npm test
```

### With UI Mode
```bash
npm run test:ui
```

### With Browser Visible
```bash
npm run test:headed
```

## Test Structure

```
tests/
├── game.spec.ts         # Main game test suite
└── utils/
    ├── constants.ts     # Test configuration and constants
    └── helpers.ts       # Shared test utilities
```

### Test Cases

1. **Game Loading**
   - Verifies successful game initialization
   - Checks for canvas element presence
   - Ensures proper game loading states

2. **Viewport Testing**
   - Tests game behavior in different viewport sizes
   - Verifies smooth viewport transitions
   - Ensures consistent game display

3. **Responsive Design**
   - Tests viewport resizing
   - Verifies game state preservation during resize
   - Ensures consistent canvas visibility

## Configuration

The framework uses `playwright.config.ts` for test configuration:

- Parallel test execution
- Automatic retries (1 retry in development, 2 in CI)
- Screenshot capture on failure
- Video recording of failed tests
- Extended timeouts for reliable testing:
  - Navigation: 60 seconds
  - Actions: 30 seconds
  - Tests: 120 seconds

## Error Handling

The framework includes robust error handling:
- Detailed error logging
- Automatic retries for flaky tests
- Comprehensive timeout management
- Network idle state verification

## Reports

Test results are available in HTML format after test execution. To view the report:

1. Run the tests
2. Open the generated HTML report in your browser

## Best Practices

- Always wait for the game canvas to be fully loaded
- Include appropriate timeouts for viewport changes
- Verify game state after significant viewport changes
- Use the provided helper functions for consistent testing

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.