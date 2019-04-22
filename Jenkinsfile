node {

    currentBuild.result = "SUCCESS"

    try {

        stage('Clear Repo eVote'){
           sh 'ssh root@10.32.223.4 -p 5439 "rm -rf /opt/docker/eVote"'
        }


         stage('Clone Repo eVote'){
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch homo http://www.tools.ages.pucrs.br/VotacaoOnLine/RN-eVote.git /opt/docker/eVote"'
        }

        stage('npm install'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd //opt/docker/eVote; npm install; rm -f .expo"'
        }

        stage('Login and Build apk to Expo'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd //opt/docker/eVote; expo login -u votacaoonlineages@gmail.com -p agesvotacao --non-interactive; expo build:android --non-interactive"'
        }

        stage('Success'){
            mail body: 'project build successful in HML',
                     from: 'jenkinsx@ages.com',
                     replyTo: 'cassio.trindade@pucrs.br',
                     subject: 'Success CI eVote',
                     to: 'cassio.trindade@pucrs.br'
        }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project build error is here: ${env.BUILD_URL}" ,
            from: 'jenkinsx@ages.com',
            replyTo: 'cassio.trindade@pucrs.br',
            subject: 'Error CI eVote',
            to: 'cassio.trindade@pucrs.br'

        throw err
    }

}
