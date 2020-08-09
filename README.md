# D&D 5e Combat Simulator

## Version 0.1

# Setup
### Requirements to run locally:
<ol>
  <li>Docker: https://www.docker.com/products/docker-desktop</li>
</ol>

### Steps to set up
<ol>
  <li>Clone repo to local</li>
  <li>cd into directory</li>
  <li>Edit the secret_template.env - each line will tell you what to put in. After, rename it to secret.env. </li>
  <li>Run: "docker-compose build" - this should build both the frontend and backend environments for you. </li>
  <li>Run: "docker-compose run api python3 manage.py migrate"</li>
  <li>Go to: https://github.com/ceryliae/DnDAppFiles/blob/master/Bestiary/Monster%20Manual%20Bestiary.xml and download that file. Put it in the xml_data/data directory</li>
  <li>Run "docker-compose run api python3 manage.py data_setup"</li>
  <li>Run "docker-compose up"</li>
  <li>Head to localhost:3000/ to view the app!</li>
</ol>
