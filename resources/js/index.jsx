import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import InertiaApp from './InertiaApp';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./pages/**/index.jsx', { eager: true });
    const page = pages[`./pages/${name}/index.jsx`]
    page.default.layout = page.default.layout || (page => <InertiaApp children={page} />)

    return page
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#d60000',
  }
})