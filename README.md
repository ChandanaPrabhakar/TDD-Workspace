# Test Driven Development (TDD) Workspace

A comprehensive Node.js workspace demonstrating Test Driven Development practices with JavaScript, including unit testing, integration testing, and database testing patterns.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [API Documentation](#api-documentation)
- [TDD Best Practices](#tdd-best-practices)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## 🎯 Overview

This project showcases Test Driven Development methodologies through practical examples including:

- **String Manipulation Functions**: Letter counting and anagram validation
- **Database Operations**: MongoDB integration with proper testing patterns
- **REST API**: Express.js server with comprehensive test coverage
- **Test Patterns**: Unit tests, integration tests, and mocking strategies

The codebase follows the **Red-Green-Refactor** cycle, demonstrating how to write failing tests first, implement minimal code to pass, and then refactor for better design.

## 📁 Project Structure

```
tdd-workspace/
├── unit-test/                # Source code Unit Testing
│   ├── letter-count.js       # Letter counting utility
│   ├── letter-count.test.js  # Unit tests for letter counting
│   ├── anagram.js            # Anagram validation utility
│   └── anagram.test.js       # Unit tests for anagram validation
│
├── dist/                     # Source code Integration and End-to-End Testing
│   ├── db.js                 # Database connection and models
│   ├── db.test.js            # Database integration tests
│   └── test-helpers.js       # Database testing utilities
│   ├── server.js             # Express.js server
│   └── server.test.js        # API endpoint tests
│   └── mocha-setup.js        # Test configuration
│
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables template
└── README.md                 # This file
```

## ✨ Features

### String Utilities

- **Letter Counter**: Counts frequency of each character in a string
- **Anagram Validator**: Checks if two strings are valid anagrams

### Database Layer

- **MongoDB Integration**: Mongoose ODM with proper connection handling
- **User Management**: Basic CRUD operations for user entities
- **Test Database**: Separate test database with cleanup utilities

### REST API

- **User Endpoints**: RESTful API for user operations
- **Error Handling**: Comprehensive error responses
- **Request Validation**: Input validation and sanitization

### Testing Infrastructure

- **Unit Tests**: Isolated function testing
- **Integration Tests**: Database and API testing
- **Test Helpers**: Utilities for database seeding and cleanup
- **Mocking**: Sinon.js for stubbing external dependencies
- **Coverage Reports**: NYC code coverage reporting

## 🔧 Prerequisites

- **Node.js** >= 14.0.0
- **MongoDB** >= 4.0 (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ChandanaPrabhakar/TDD-Workspace.git
   cd tdd-workspace
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env .env
   ```

   Edit `.env` file with your MongoDB connection string:

   ```env
   MONGO_URI=mongodb://localhost:27017/your-database-name
   NODE_ENV=development
   ```

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

## 💻 Usage

### Development Mode

```bash
# Run all tests
npm run test

# Run unit tests
npm run test:unit

# Run integration and end-to-end tests
npm run test:integration

# Run integration and end-to-end tests in watch mode
npm run testWatch

# Generate coverage report
npm run coverage

# Generate coverage report of unit testing
npm run coverage:unit

# Generate coverage report of integration and end-to-end testing
npm run coverage:integration
```

### Running the Server

```javascript
import { app } from './server.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## 🧪 Testing

This project demonstrates various testing patterns:

### Unit Testing

```javascript
// Example: Testing pure functions
describe('getLetterCount - basic functionality', () => {
  it('returns correct letter count for simple words', () => {
    const expected = { c: 1, a: 1, t: 1 };
    const actual = getLetterCount('cat');
    expect(actual).to.deep.equal(expected);
  });
});
```

### Integration Testing

```javascript
// Example: Testing database operations
describe('getUserByUsername - Database Integration', () => {
  afterEach(async () => {
    await resetDatabase();
  });

  it('retrieves user from database correctly', async () => {
    await setDatabaseData('users', fakeUserData);
    const user = await getUserByUsername('testuser');
    expect(user).to.have.property('username', 'testuser');
  });
});
```

### API Testing

```javascript
// Example: Testing HTTP endpoints
describe('GET /users/:username', () => {
  it('returns user data when found', async () => {
    sinon.stub(db, 'getUserByUsername').resolves(mockUser);

    const response = await request(app).get('/users/testuser');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(mockUser);
  });
});
```

### Test Commands

```bash
# Run all tests
npm run test

# Run unit tests
npm run test:unit

# Run integration and end-to-end tests
npm run test:integration

# Run integration and end-to-end tests in watch mode
npm run testWatch

# Generate coverage report
npm run coverage

# Generate coverage report of unit testing
npm run coverage:unit

# Generate coverage report of integration and end-to-end testing
npm run coverage:integration
```

## 📚 API Documentation

### GET /users/:username

Retrieves a user by username.

**Parameters:**

- `username` (string): The username to search for

**Responses:**

- `200 OK`: User found and returned
- `404 Not Found`: User not found
- `500 Internal Server Error`: Server error occurred

**Example:**

```bash
curl -X GET http://localhost:3000/users/johndoe
```

**Success Response:**

```json
{
  "id": "123",
  "username": "johndoe",
  "email": "johndoe@example.com"
}
```

## 🎯 TDD Best Practices

This project demonstrates key TDD principles:

### 1. Red-Green-Refactor Cycle

- **Red**: Write a failing test first
- **Green**: Write minimal code to make the test pass
- **Refactor**: Improve code while keeping tests green

### 2. Test Organization

- **Arrange**: Set up test data and conditions
- **Act**: Execute the function/method being tested
- **Assert**: Verify the expected outcome

### 3. Testing Patterns

- **Unit Tests**: Test individual functions in isolation
- **Integration Tests**: Test component interactions
- **End-to-End Tests**: Test complete user workflows

### 4. Test Independence

- Each test should be independent and not rely on others
- Use proper setup and teardown methods
- Reset state between tests

### 5. Descriptive Test Names

- Test names should clearly describe what is being tested
- Use "should" or "when" patterns for clarity
- Group related tests using `describe` blocks

## 🛠 Technologies Used

- **Runtime**: Node.js
- **Testing Framework**: Mocha
- **Assertion Library**: Chai (with chai-exclude plugin)
- **Mocking**: Sinon.js
- **HTTP Testing**: Supertest
- **Database**: MongoDB with Mongoose ODM
- **Server Framework**: Express.js
- **Code Coverage**: NYC (Istanbul)
- **Environment Management**: dotenv
- **ES6+ Support**: Babel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your changes (TDD approach)
4. Implement the feature to make tests pass
5. Ensure all unit tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Development Guidelines

- Follow TDD methodology: write tests first
- Maintain high test coverage (aim for >90%)
- Use meaningful commit messages
- Update documentation for new features
- Ensure all tests pass before submitting PR

## 📝 License

This project is licensed under the MIT License - [LICENSE](LICENSE)

## 🙋‍♂️ Support

If you have questions or need help getting started with TDD:

1. Check the existing tests for examples
2. Review the TDD Best Practices section
3. Open an issue for bugs or feature requests
4. Contribute improvements via pull requests

---

**Happy Testing! 🚀**

Remember: _"Code without tests is legacy code"_ - Make your code testable, maintainable, and reliable through TDD practices.
