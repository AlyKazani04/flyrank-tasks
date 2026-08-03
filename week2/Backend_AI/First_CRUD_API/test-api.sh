printf "[Root Check]\n\n"

curl -i http://localhost:3000/

printf "\n\n[Health Check]\n\n"

curl -i http://localhost:3000/health

printf "\n\n[Get All Tasks]\n\n"

curl -i http://localhost:3000/tasks

printf "\n\n[Get Task ID 1]\n\n"

curl -i http://localhost:3000/tasks/1

printf "\n\n[Get 404 Error on wrong IDS]\n\n"

curl -i http://localhost:3000/tasks/99
