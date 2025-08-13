# nest-admin

![](https://img.shields.io/github/commit-activity/m/buqiyuan/nest-admin) ![](https://img.shields.io/github/license/buqiyuan/nest-admin) ![](https://img.shields.io/github/repo-size/buqiyuan/nest-admin) ![](https://img.shields.io/github/languages/top/buqiyuan/nest-admin)

**A simple and efficient permission management system based on NestJs + TypeScript + TypeORM + Redis + MySql + Vue3 + Ant Design Vue, featuring a fully separated frontend and backend. Hope this project helps you on your full-stack journey.**

- Frontend project: [Portal](https://github.com/buqiyuan/vue3-antdv-admin)

## Demo Links

<ul>
  <li>
    <details>
      <summary>
        <a href="https://vue3-antdv-admin.pages.dev/" target="_blank">
        https://vue3-antdv-admin.pages.dev/
        </a> (Mainland China)
      </summary>
      Read-only, you can preview the initial effect of the project.
    </details>
  </li>
  <li>
    <details>
      <summary>
        <a href="https://vue3-antd-admin.vercel.app/" target="_blank">
        https://vue3-antd-admin.vercel.app/
        </a> (Outside Mainland China)
      </summary>
      <ul>
        <li>
        CRUD operations are allowed, so the data you see may have been modified by others and may not reflect the initial state. The database resets daily at 4:30 AM.
        </li>
        <li>Since it's hosted on free overseas servers, stability is not guaranteed and you may need a VPN to access.</li>
      </ul>
    </details>
  </li>
  <li>
   <a href="https://nest-admin.buqiyuan.top/api-docs/" target="_blank">
      Swagger Docs
   </a>
  </li>
</ul>

## Preparation Before Starting

- SQL file: [/deploy/sql/nest_admin.sql](https://github.com/buqiyuan/nest-admin/tree/main/deploy/sql/nest_admin.sql) for database initialization
- Project configuration, e.g., MySQL and Redis connection settings
  - Common config: [.env](https://github.com/buqiyuan/nest-admin/blob/main/.env)
  - Development: [.env.development](https://github.com/buqiyuan/nest-admin/blob/main/.env.development)
  - Production: [.env.production](https://github.com/buqiyuan/nest-admin/blob/main/.env.production)

## Requirements

- `nodejs` `20`+
- `docker` `20.x`+ (docker compose version `2.17.0`+ required)
- `mysql` `8.x`+
- Use [`pnpm`](https://pnpm.io/zh/) as the package manager to install dependencies

Demo environment account/password:

| Username | Password | Role           |
| :------: | :------: | :------------: |
| admin    | a123456  | Super Admin    |

> All newly created users have the initial password: a123456

Local deployment account/password:

| Username | Password | Role           |
| :------: | :------: | :------------: |
| admin    | a123456  | Super Admin    |

## Quick Start

After starting, visit <http://localhost:7001/api-docs/>.

```bash
pnpm docker:up
# or
docker compose --env-file .env --env-file .env.production up -d --no-build
```

Stop and remove all containers

```bash
pnpm docker:down
# or
docker compose --env-file .env --env-file .env.production down
```

Remove images

```bash
pnpm docker:rmi
# or
docker rmi buqiyuan/nest-admin-server:stable
```

View real-time logs

```bash
pnpm docker:logs
# or
docker compose --env-file .env --env-file .env.production logs -f

```

## Local Development

- Clone the project

```bash
git clone https://github.com/buqiyuan/nest-admin
```

- [Optional] If you're new and not familiar with setting up `mysql/redis`, you can use `Docker` to start the required services for local development, e.g.:

```bash
# Start MySql service
docker compose --env-file .env --env-file .env.development run -d --service-ports mysql
# Start Redis service
docker compose --env-file .env --env-file .env.development run -d --service-ports redis
```

- Install dependencies

```bash
cd nest-admin

pnpm install

```

- Run
  After starting, visit <http://localhost:7001/api-docs/>.

```bash
pnpm dev
```

- Build

```bash
pnpm build
```

## Database Migration

1. Update database (or initialize data)

```bash
pnpm migration:run
```

2. Generate migration

```bash
pnpm migration:generate
```

3. Rollback to last update

```bash
pnpm migration:revert
``6

For more details, see the [official documentation](https://typeorm.io/migrations)

> [!TIP]
> If your `entity classes` or `database configuration` have changed, please run `npm run build` before performing migration operations.

## Screenshots

![](https://s1.ax1x.com/2021/12/11/oTi1nf.png)

![](https://s1.ax1x.com/2021/12/11/oTithj.png)

![](https://s1.ax1x.com/2021/12/11/oTirHU.png)

![](https://s1.ax1x.com/2021/12/11/oTia3n.png)

### Welcome Star && PR

**If this project helps you, please give it a Star. PRs for better implementations are welcome.**

### Acknowledgements

- [sf-nest-admin](https://github.com/hackycy/sf-nest-admin)

### LICENSE

[MIT](LICENSE)
