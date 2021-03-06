import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import Button from '../components/button/Button';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout';
import { MarkdownPage } from '../components/MarkdownPage/MarkdownPage';

const Home: FC = () => {
   const [dark, setDarkState] = useState(true);

   const setDark = (val: boolean) => {
      setDarkState(val);
      localStorage.setItem('dark', JSON.stringify(val));
   };

   useEffect(() => {
      setDark(localStorage.getItem('dark') ? JSON.parse(localStorage.getItem('dark') as string) : true);
   });

   return (
      <div className={dark ? 'dark' : ''}>
         <Head>
            <title>Markdown It - Free Markdown Viewer</title>
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <div className='absolute m-4 right-1 z-50'>
            <Button.ToggleTheme dark={dark} setDark={setDark}></Button.ToggleTheme>
         </div>

         <Layout>
            <MarkdownPage />
         </Layout>

         <motion.div animate={dark ? { opacity: 1 } : { opacity: 0 }}>
            <div className='absolute w-screen h-full bg-gray-900 z-0'></div>
         </motion.div>
      </div>
   );
};
export default Home;
