import { ROLES } from '../src/common/constants/roles.constant';
import { PrismaClient } from '@prisma-pg';
const prisma = new (PrismaClient as any)();

async function main() {
  const roles = [
    {
      name: ROLES.ADMIN,
      description: 'Administrator',
    },
    {
      name: ROLES.SUPPORT,
      description: 'Support Agent',
    },
    {
      name: ROLES.CUSTOMER,
      description: 'Customer',
    },
  ];

  for (const role of roles) {
    await prisma.role.upsert({
      where: { name: role.name },
      update: {},
      create: role,
    });
    console.log(`Upserted role: ${role.name}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
