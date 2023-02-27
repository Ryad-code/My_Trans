const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
(async function main() {
  try {
    const martin = await prisma.user.upsert({
      where: { email: 'martin@gmail.com' },
      update: {},
      create: {
	name: 'Martin',
        email: 'martin@gmail.com',
      },
    });

    const ryad = await prisma.user.upsert({
      where: { email: 'ryad@gmail.com' },
      update: {},
      create: {
	name: 'Ryad',
	email: 'ryad@gmail.com',
      },
    });
 
    console.log('Create 1 user: ', martin);
    console.log('Create 1 user: ', ryad); 
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
