<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


<!-- User Types for a Wealth Management App:
SuperAdmin

Permissions: Full control over the entire platform. Can manage users, roles, financial settings, and override any data or configurations.
Use Case: System administrators who need to configure all aspects of the app.
Capabilities:
Manage other admins and user roles.
Control application settings and configurations.
Access to all user data, financial transactions, reports, etc.
Admin

Permissions: High-level administrative access, but slightly restricted compared to a SuperAdmin. Can manage most aspects of the system but might be restricted from performing certain actions that only a SuperAdmin can do.
Use Case: Platform managers who handle day-to-day operations.
Capabilities:
Manage users (create, edit, deactivate).
View all user financial data (like income, expenses, assets, liabilities).
Create, edit, and delete financial reports.
Financial Advisor

Permissions: Access to user data for advising on finances, but without full system-wide privileges. May not be able to modify user details directly but can provide advice.
Use Case: Professionals who provide wealth management advice to users.
Capabilities:
View user financial data (income, expenses, assets, liabilities).
Provide recommendations and feedback on financial decisions.
May have access to savings and investment data.
User

Permissions: A standard user with access to their own data, including their assets, savings, expenses, and income tracking.
Use Case: Regular users of the app who are tracking their finances and making savings or investment decisions.
Capabilities:
View and manage personal data.
Track and manage income, expenses, and savings.
Set financial goals and track progress.
View reports for personal financial growth.
Limited or no access to other users' data.
Guest

Permissions: Very limited access, typically only able to view public information or perform actions that don't affect the system (e.g., signup, view informational content, etc.).
Use Case: Potential users who are not yet registered or just exploring the platform.
Capabilities:
View limited public content (such as blogs, resources, or features).
Register an account or log in.
May not have access to personal finance tools until registration.
Power User

Permissions: A regular user with enhanced access to more advanced features such as additional reporting or access to in-depth financial tools.
Use Case: Users who want to analyze data in greater depth or need more comprehensive features.
Capabilities:
View and analyze detailed financial reports.
Customize how they track expenses and assets.
Ability to export data for analysis or reporting.
Auditor

Permissions: Read-only access to financial data. Used for auditing or reviewing purposes without being able to make changes.
Use Case: External or internal auditors who need to verify the financial data but not modify it.
Capabilities:
View user financial data, transactions, and reports.
Export financial statements.
No permission to make changes or add new data. -->