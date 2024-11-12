# SETUP REACT ROUTER DOM

```bash
npm install react-router-dom
```

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.page'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true, }}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
```