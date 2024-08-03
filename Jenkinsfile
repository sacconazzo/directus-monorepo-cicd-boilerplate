pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                sh 'docker compose build --platform linux/amd64'
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
        stage('Versioning') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'sacconazzo', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                    script {
                        def packageJson = readJSON file: 'package.json'
                        VERSION = packageJson.version
                        echo "Project version: ${VERSION}"
                        def tagExists = sh(script: "git show-ref --tags | grep -q 'refs/tags/v${VERSION}'", returnStatus: true) == 0
                        if (tagExists) {
                            echo "Tag v${VERSION} already exists"
                        } else {
                            echo "Creating tag for v${VERSION}"
                            sh "git tag -a 'v${VERSION}' -m 'Release ${VERSION}'"
                            sh 'git push https://${GIT_USERNAME}:${GIT_PASSWORD}@github.com/chatbot-services/chatbot-manager.git refs/tags/v' + VERSION
                        }
                    }
                }
            }
        }
        stage('Cleanup') {
            steps {
                sh 'docker image prune -f'
                sh 'docker builder prune -f'
            }
        }
    }
}