module.exports = {
  app: {
    src: [
      'app/**/*.js'
    ],
    options: { jshintrc: '.jshintrc', force: true }
  },

  tooling: {
    src: [
      'Gruntfile.js',
      'tasks/**/*.js'
    ],
    options: { jshintrc: 'tasks/.jshintrc' }
  },

  tests: {
    src: [
      'tests/**/*.js',
    ],
    options: { jshintrc: 'tests/.jshintrc', force: true }
  },

  options: {
    force: true
  }
};
