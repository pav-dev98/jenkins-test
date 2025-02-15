pipeline{
    agent any
    tools{
        git 'Git'
        nodejs 'NodeJS'
    }
    stages{
        stage('Chekout code'){
            steps{
                git branch: 'main', url: 'https://github.com/pav-dev98/jenkins-test.git'
            }
        }
        stage('Install dependencies'){
            steps{
                sh 'npm install'
            }
        }
        stage('Run test'){
            steps{
                sh 'npm test'
            }
        }
        stage('Start server'){
            steps{
                sh 'node server.js &'
            }
        }
    }
}