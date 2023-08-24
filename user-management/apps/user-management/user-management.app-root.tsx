// import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { UserManagement } from "./user-management";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<UserManagement />);

/**
 * uncomment to render the app with routing (react-router-dom)
 */
// root.render(
//   <BrowserRouter>
//     <UserManagement />
//   </BrowserRouter>
// );