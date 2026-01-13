pipeline {
    agent any

    environment {
        IMAGE_NAME = "s10shani/client-fullstack"
        KUBECONFIG = "/etc/rancher/k3s/k3s.yaml"
        DEPLOYMENT_FILE = "client/client-deployment.yaml"
        SERVICE_FILE = "client/client-service.yaml"
    }

    stages {
        stage('Checkout') {
            steps {
                deleteDir()
                git url: 'https://github.com/shanic474/Client-FullStack-final-Project.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('client') {
                    script {
                        // Build image with build number tag
                        sh "docker build -t ${IMAGE_NAME}:${BUILD_NUMBER} ."
                    }
                }
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
                script {
                    // Update image in deployment
                    sh "sed -i 's|image: .*|image: ${IMAGE_NAME}:${BUILD_NUMBER}|' ${DEPLOYMENT_FILE}"

                    // Apply deployment
                    sh "kubectl apply -f ${DEPLOYMENT_FILE}"
                    sh "kubectl rollout status deployment client-deployment"

                    // Auto-create/update NodePort service
                    // If NodePort already exists, use existing; otherwise, let k8s pick one
                    def serviceYaml = readFile("${SERVICE_FILE}")
                    def nodePortLine = serviceYaml.readLines().find { it.contains('nodePort:') }
                    if (nodePortLine) {
                        echo "Using NodePort defined in YAML"
                    } else {
                        echo "No NodePort defined, letting k8s auto-assign"
                        // Remove nodePort line to auto-assign
                        sh "sed -i '/nodePort:/d' ${SERVICE_FILE}"
                    }

                    // Apply service
                    sh "kubectl apply -f ${SERVICE_FILE}"
                }
            }
        }

        stage('Print Access Info') {
            steps {
                script {
                    // Get NodePort assigned by k8s
                    def nodePort = sh(
                        script: "kubectl get svc client-service -o=jsonpath='{.spec.ports[0].nodePort}'",
                        returnStdout: true
                    ).trim()
                    def nodeIP = sh("hostname -I | awk '{print \$1}'", returnStdout: true).trim()
                    echo "Frontend available at: http://${nodeIP}:${nodePort}"
                }
            }
        }
    }
}
