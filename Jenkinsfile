pipeline {
    agent any
    
    stages {
        stage('test') {
            steps {
                sh 'pnpm install'
                sh 'pnpm build'
                sh 'pnpm test'
            }
        }
        stage('Build') {
            steps {
                sh 'docker compose build'
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