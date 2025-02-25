import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost', 
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'A%9cZ8!eR2#tV5bS',
  database: process.env.DB_NAME || 'stockpulse',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, 
};
