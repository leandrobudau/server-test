pipeline {
  agent any
  
  tools {
    node 'node:12'
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
     stage('Install') {
      steps {
        sh 'npm run install'
      }
    }
    
     stage('Build') {
      steps {
       sh 'npm run build'
      }
    }
  }
}
