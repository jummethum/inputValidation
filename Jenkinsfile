pipeline { 
    agent any 
    stages {
        stage('Build and Deploy') { 
            steps { 
				// backend
                sh 'mvn clean install tomcat7:redeploy -f vulServer/pom.xml'
				// frontend
				sh 'npm run --prefix vulClient/ start'
            }
        }
    }
}