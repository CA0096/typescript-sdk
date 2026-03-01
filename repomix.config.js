// Repomix configuration for comprehensive settings

module.exports = {
    // Basic Repo Options
    "repository": {
        "type": "git",  // Type of the repository
        "url": "https://github.com/CA0096/typescript-sdk.git",
        "name": "typescript-sdk"
    },
    // Import Configuration
    "import": {
        "enabled": true,        // Enable imports
        "defaultImports": ["lodash", "axios"], // Default libraries to import
    },
    // Exclude Patterns
    "exclude": ["node_modules/**", "dist/**"],
    // Linting Options
    "lint": {
        "enabled": true,
        "rules": {
            "quotes": ["error", "single"],
            "semi": ["error", "always"]
        }
    },
    // Testing Configuration
    "testing": {
        "framework": "jest",  // Testing framework to use
        "testPathPattern": ["./tests/**/*.test.js"] // Test file patterns
    },
    // Deployment Options
    "deployment": {
        "enabled": true,
        "target": "production",
        "provider": "AWS"
    }
};