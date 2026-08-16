import 'dotenv/config';
import { ROLES } from '../src/common/constants/roles.constant';
import { PrismaClient } from '@prisma-pg';
import { PrismaPg } from '@prisma/adapter-pg';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString } as any);
const prisma = new PrismaClient({ adapter } as any);

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
