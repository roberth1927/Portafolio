import { useRouter } from 'next/router';
import { AnimatePresence, motion} from "framer-motion";

import '../styles/globals.css';
import Layout from '../components/Layout';
import Transition from "../components/Transition";

function MyApp({ Component, pageProps }) {

  const router= useRouter();

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div  initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 1 }} key={router.route} className='h-full'>

        
          <Component {...pageProps} />

        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
