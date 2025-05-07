// import './globals.css';
// import { ClerkProvider } from '@clerk/nextjs';

// export const metadata = {
//   title: 'Your App Name',
//   description: 'Your app description',
// };

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body>
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }


import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata = {
  title: 'Your App Name',
  description: 'Your app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
