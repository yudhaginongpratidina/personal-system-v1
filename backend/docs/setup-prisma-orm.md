# SETUP PRISMA ORM

## INSTALL DEPENDENCIES

```bash
npm i -D primsa
```

```bash
npm i @prisma/client
```

```bash
npx prisma init
```

## SETTING ENVIRONMENT

```env
# DATABASE CONFIG
# =================================================
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

## SETTING SCHEMA

```prisma
generator client {
    provider = "prisma-client-js"
}

datasource db {
    provider = "mysql"
    url      = env("DATABASE_URL")
}

enum Role {
    GUEST
    USER
    ADMIN
}

model Account {
    id        String   @id @default(cuid())
    username  String   @unique
    email     String   @unique
    password  String
    role      Role     @default(GUEST)
    createdAt DateTime @default(now())
    updatedAt DateTime @updatedAt
    @@map("users")
}
```

## RUNNING MIGRATION

```bash
npx prisma migrate dev
```

## CREATE UTILS

```js
import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "error"
        },
        {
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level: "warn"
        }
    ]
});

prismaClient.$on("error", (e) => {
    console.log(e);
})

prismaClient.$on("warn", (e) => {
    console.log(e);
})

prismaClient.$on("info", (e) => {
    console.log(e);
})

prismaClient.$on("query", (e) => {
    console.log(e);
})
```