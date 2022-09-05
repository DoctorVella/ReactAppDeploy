# ReactAppDeploy
How to deploy a react app on github:

1) Create a repository on GitHub.
2) Create a webapp and push it on the GitHub repository.
3) Installare github pages (npm i gh-pages)
4) Aggiungere campo "homepage" al package.json con il seguente valore: 
    https://{username}.github.io/{repo-name}
    (username = github username, repo-name = nome repository)
5) Aggiungere agli scripts in package.json i due seguenti campi:
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
6) Lancia npm run deploy per buildare e deployare su github pages al link specificato nel campo homepage di package.json (controllare se serve aggiungere uno slash finale per non avere 404)

N.B. Per rendere compatibile il deploy su Github Pages con il redirect mediante barra url del browser utilizzando il BrowserRouter di react-router-dom è necessario seguire la seguente guida: https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html#L21-L42