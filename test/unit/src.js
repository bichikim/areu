const testsContext = require.context('../../src', true, /^(.(?!.*\.skip\.spec))*?\.spec\.js$/)
testsContext.keys().forEach(testsContext)