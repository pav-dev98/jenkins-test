pipeline{
    agent any
    stages{
        stage('Chekout code'){
            steps{
                git 
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