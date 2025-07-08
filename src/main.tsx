import "@radix-ui/themes/styles.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";

import './global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="teal" grayColor="sand" radius="small" scaling="100%" appearance='dark' panelBackground="translucent">
      <App />
    </Theme>
  </StrictMode>,
)
