pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker compose build'
            }
        }
        stage('Test') {
            steps {
                sh "docker compose --env-file ${BASE_CONFIG_PATH}${env.JOB_NAME}.env run --rm app pnpm --parallel test"
            }
        }
        stage('Deploy') {
            steps {
                sh "docker compose --env-file ${BASE_CONFIG_PATH}${env.JOB_NAME}.env up -d"
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker builder prune -f'
                sh 'docker image prune -f'
            }
        }
    }
}