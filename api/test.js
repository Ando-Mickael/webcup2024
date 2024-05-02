const prisma = require("./src/libs/prisma");

prisma.user.findMany().then((data) => {
  console.log(data);
});
