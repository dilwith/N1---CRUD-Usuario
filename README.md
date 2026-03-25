
docker compose up db -d
npm install
npx prisma migrate dev
npm run start:dev

Swagger: http://localhost:3000/api/docs
