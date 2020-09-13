pipeline {
 
  agent {
      docker { image 'node:14-alpine' }
  }
  
  stages {
    stage('Version') {
      steps {
        sh 'node --version'
      }
    }
  }
}
