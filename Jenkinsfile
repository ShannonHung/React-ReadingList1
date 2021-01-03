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
        script {
          dockerImage = docker.build(shannonhung/react-myread)
        }
      }
    }

  }
  environment {
    registry = 'shannonhung/react-myread'
    registryCredential = 'dockerhub'
    dockerImage = ''
  }
}