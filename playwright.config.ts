import { defineConfig, devices } from '@playwright/test';

export default defineConfig({


  testDir: './tests',
  timeout:40 *1000,
  expect :{timeout:5000},

  reporter: 'html',
 use:{

  screenshot :'on',
  trace:'retain-on-failure'
 },
  projects: [
    {
       name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        channel: 'chrome',
      },
      
    },

    
  ],
});
