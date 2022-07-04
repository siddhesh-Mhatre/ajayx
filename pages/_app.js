import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import {HelpProvider} from "../helper/Helper";
import {motion} from "framer-motion"

function MyApp({ Component, pageProps,router}) {
  return <>
<HelpProvider>
<Navbar/>
<motion.div
key={router.route}  
initial="pageInitial"
animate="pageAnimate"
variants={{
  pageInitial:{
    opacity:0,
    x:-100
  },
  pageAnimate:{
    opacity:1,
    x:0
    
  }
}}
>
<Component {...pageProps} />
</motion.div>

<Footer/>
</HelpProvider>
  </>
}

export default MyApp
