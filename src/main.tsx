// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core'
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications';
createRoot(document.getElementById('root')!).render(
  // <StrictMode>

    <BrowserRouter>
      <MantineProvider theme={{
        fontFamily: 'Sora, sans-serif', // 👈 Font áp dụng toàn app
        headings: { fontFamily: 'Sora, sans-serif' }, // 👈 Headings cũng dùng
      }}>
        <Notifications />
        <App />
        </MantineProvider>
    </BrowserRouter>
  // </StrictMode>,
)
