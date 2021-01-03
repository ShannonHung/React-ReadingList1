pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Cloning Git') {
      steps {
        git(branch: 'master', url: 'https://github.com/ShannonHung/React-ReadingList1.git')
      }
    }

    stage('Building image') {
      steps {
        sh 'docker.build registry + ":$BUILD_NUMBER"'
      }
    }

  }
  environment {
    registry = 'shannonhung/react-myread'
    registryCredential = 'dockerhub'
  }
}