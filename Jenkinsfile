pipeline {
    agent any

    environment {
        IMAGE_NAME = "s10shani/client-fullstack"
        KUBECONFIG = "/etc/rancher/k3s/k3s.yaml"
    }

    stages {

        stage('Checkout') {
            steps {
                deleteDir()
                git branch: 'main',
                    url: 'https://github.com/shanic474/Client-FullStack-final-Project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-credentials',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh """
                        echo \$DOCKER_PASS | docker login -u \$DOCKER_USER --password-stdin
                        docker push ${IMAGE_NAME}:${BUILD_NUMBER}
                    """
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                    sed -i 's|image:.*|image: ${IMAGE_NAME}:${BUILD_NUMBER}|' client-deployment.yaml
                    kubectl apply -f client-deployment.yaml
                    kubectl rollout status deployment client-deployment
                """
            }
        }

        stage('Expose Service') {
            steps {
                sh "kubectl apply -f client-service.yaml"
            }
        }
    }
}
