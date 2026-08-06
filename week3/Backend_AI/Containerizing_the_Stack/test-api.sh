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

printf "\n\n[Add New Task]\n\n"

curl -i -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d '{"title":"Buy milk"}'

printf "\n\n[Check Added Task]\n\n"

curl -i http://localhost:3000/tasks

printf "\n\n[Update a Task]\n\n"

curl -i -X PUT http://localhost:3000/tasks/4 -H "Content-Type: application/json" -d '{"title":"Buy milk","done":true}'

printf "\n\n[Check Updated Task]\n\n"

curl -i http://localhost:3000/tasks

printf "\n\n[Delete a Task]\n\n"

curl -i -X DELETE http://localhost:3000/tasks/4 -H "Content-Type: application/json"

printf "\n\n[Check Deleted Task]\n\n"

curl -i http://localhost:3000/tasks/4
