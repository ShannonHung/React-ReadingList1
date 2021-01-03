pipeline {
  agent {
    docker {
      image 'gustavoapolinario/jenkins-docker'
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
          docker.build 'shannonhung/react-myread' + ":$BUILD_NUMBER"
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