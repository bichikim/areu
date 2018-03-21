// you can also change this to match only the subset of files that
// you want coverage for.
const srcContextStore = require.context('../../src/', true, /^(.(?!.*\.skip\.spec))*?\.(js|ts)$/)
srcContextStore.keys().forEach(srcContextStore)
