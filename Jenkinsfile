#!/usr/bin/env groovy
pipeline{
    agent any

    //Define stages for the build process
    stages{
        //Define the test stage
        /*
        stage('Test'){
            //Define the docker image to use for the test stage
            agent{
                docker{
                    // specify the Docker Image to use to test the project. For example:
                    // image 'maven:3.5.2-alpine'
                }
            }
            //Write the scripts to run in the Docker container to test the application.
            //Since this is a groovy file we use the '''string''' syntax to define multi-line formatting.
            //Groovy will use the string EXACTLY as written in between the ''' characters. In this instance each
            //line between the ''' characters will be treated as separate lines of a shell script.
            steps{
                // for example to run the tests using the Maven image in the comment above
                // sh '''mvn test'''
            }
        }
        */

        //Define the deploy stage
        stage('Deploy'){
            steps{
                //The Jenkins Declarative Pipeline does not provide functionality to deploy to a private
                //Docker registry. In order to deploy to the HDAP Docker registry we must write a custom Groovy
                //script using the Jenkins Scripting Pipeline. This is done by placing Groovy code with in a "script"
                //element. The script below registers the HDAP Docker registry with the Docker instance used by
                //the Jenkins Pipeline, builds a Docker image using the project Dockerfile, and pushes it to the registry
                //as the latest version.
                script{
                    docker.withRegistry('https://build.hdap.gatech.edu'){
                        def plfhirImage = docker.build("pl-fhir:1.0", "-f project/pl-fhir/Dockerfile project/pl-fhir")
                        plfhirImage.push('latest')
                        def plfhircxnImage = docker.build("pl-fhircxn:1.0", "-f project/pl-fhircxn/Dockerfile project/pl-fhircxn")
                        plfhircxnImage.push('latest')
                        def plmysqlImage = docker.build("pl-mysql:1.0", "-f project/pl-mysql/Dockerfile project/pl-mysql")
                        plmysqlImage.push('latest')
                        def plwebuiImage = docker.build("pl-webui:1.0", "-f project/pl-webui/Dockerfile project/pl-webui")
                        plwebuiImage.push('latest')
                    }
                }
            }
        }

        //Define stage to notify rancher
        stage('Notify'){
            steps{
                //Write a script that notifies the Rancher API that the Docker Image for the application has been updated.
                script{
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'http://rancher.hdap.gatech.edu:8080/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/pl-fhir:latest', ports: '', service: 'livermore/pl-fhir', timeout: 100
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'http://rancher.hdap.gatech.edu:8080/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/pl-fhircxn:latest', ports: '', service: 'livermore/pl-fhircxn', timeout: 100
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'http://rancher.hdap.gatech.edu:8080/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/pl-mysql:latest', ports: '', service: 'livermore/pl-mysql', timeout: 100
                    rancher confirm: true, credentialId: 'rancher-server', endpoint: 'http://rancher.hdap.gatech.edu:8080/v2-beta', environmentId: '1a7', environments: '', image: 'build.hdap.gatech.edu/pl-webui:latest', ports: '', service: 'livermore/pl-webui', timeout: 100
                }
            }
        }
    }
}
