/**
 * Напиши скрипт, який для об'єкта user, послідовно:
 * - додає поле mood зі значенням 'happy'
 * - замінює значення hobby на 'skydiving'
 * - замінює значення premium на false
 * - виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 */

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: false,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = !user.premium;

// const keys = Object.keys(user);

// console.log(keys);

// for (const key of keys) {
//   console.log(`${key}: ${user[key]}`);
// }

//!=========================================

/**
 * У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для
 * підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 */

// function sum(salaries) {
//   const arr = Object.values(salaries); // [100,160,130]
//   let total = 0;

//   for (const salary of arr) {
//     total += salary;
//   }

//   return total;
// }

// const salaries1 = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// const salaries2 = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// console.log(sum(salaries1));
// console.log(sum(salaries2));
//!=========================================
// const product = {
//   x1: 100,
//   x2: 200,
//   title: 'My Product',
// };

// const arr = Object.keys(product); // ['x1','x2', 'title', 'price']
// const arr = Object.values(product); // [100, 200,'My Product']

//!=========================================

// function foo(x) {
//   console.log(x);
// }

// const y = 10;
// foo(y);

// delete user.hobby;
// console.log(user);

//!=========================================

const obj = {
  width: '80 cm',
  height: 30,
  weight: '5 kg',
  color: 'white',
  model: 'west',
  isWorking: false,
  maxTemp: 40,
  minTemp: 10,
};

const user = {
  id: 'usr_102938',
  personalInfo: {
    firstName: 'Володимир',
    lastName: 'Коваль',
    middleName: 'Олександрович',
    birthDate: '1994-08-15',
    gender: 'male',
    citizenship: 'Україна',
  },

  contacts: {
    email: {
      primary: 'volodymyr.koval@example.com',
      verified: true,
      backup: 'v.koval.backup@example.com',
    },
    phone: {
      countryCode: '+380',
      number: '991234567',
      verified: false,
    },
    socialNetworks: {
      telegram: '@volodymyr_dev',
      linkedin: 'linkedin.com/in/volodymyr-koval',
      github: 'github.com/volodymyrkoval',
    },
  },

  address: {
    registered: {
      country: 'Україна',
      region: 'Київська область',
      city: 'Київ',
      postalCode: '01001',
      street: {
        name: 'Хрещатик',
        building: 10,
        apartment: 45,
      },
    },
    current: {
      sameAsRegistered: false,
      country: 'Польща',
      city: 'Краків',
      street: {
        name: 'Floriańska',
        building: 22,
        apartment: 8,
      },
    },
  },

  account: {
    status: 'active',
    createdAt: '2023-11-01T10:15:00Z',
    lastLoginAt: '2026-01-20T18:42:10Z',
    security: {
      password: {
        lastChangedAt: '2025-09-12',
        expiresInDays: 90,
      },
      twoFactorAuth: {
        enabled: true,
        methods: ['sms', 'authenticator_app'],
      },
      sessions: [
        {
          sessionId: 'sess_001',
          device: 'Chrome / Windows',
          ip: '192.168.1.10',
          lastActiveAt: '2026-01-21T09:12:00Z',
        },
        {
          sessionId: 'sess_002',
          device: 'Safari / iPhone',
          ip: '192.168.1.15',
          lastActiveAt: '2026-01-20T21:30:00Z',
        },
      ],
    },
  },

  employment: {
    position: 'Fullstack Developer',
    department: 'Engineering',
    skills: {
      frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
      backend: ['Node.js', 'Express', 'NestJS'],
      databases: ['PostgreSQL', 'MongoDB'],
      tools: ['Docker', 'Git', 'CI/CD'],
    },
    experienceYears: 6,
    projects: [
      {
        name: 'CRM Platform',
        role: 'Lead Developer',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        period: {
          from: '2022-01',
          to: '2024-06',
        },
      },
      {
        name: 'E-learning System',
        role: 'Backend Developer',
        technologies: ['NestJS', 'MongoDB'],
        period: {
          from: '2021-03',
          to: '2022-12',
        },
      },
    ],
  },

  preferences: {
    language: 'uk',
    theme: 'dark',
    notifications: {
      email: true,
      sms: false,
      push: true,
      marketing: false,
    },
  },

  activityLog: [
    {
      type: 'login',
      timestamp: '2026-01-21T09:10:00Z',
      metadata: {
        ip: '192.168.1.10',
        device: 'Windows PC',
      },
    },
    {
      type: 'update_profile',
      timestamp: '2026-01-18T14:25:00Z',
      metadata: {
        changedFields: ['phone', 'address.current'],
      },
    },
  ],

  isBlocked: false,
};

console.log(user);
