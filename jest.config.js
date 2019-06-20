module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    "\\.(css|jpg|png)$": "<rootDir>/empty-module.js",
  }
}
