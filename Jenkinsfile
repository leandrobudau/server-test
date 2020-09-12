pipeline {
  agent any
  
  tools {
    nodejs 'node:12'
  }
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    
     stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    
     stage('Build') {
      steps {
       sh 'npm run build'
      }
    }
  }
}
