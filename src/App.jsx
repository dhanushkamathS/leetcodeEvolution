import { useState,useEffect } from 'react'

import SearchBar from './components/SearchBar'
import ProgressBar from './components/ProgressBar'
import CustomButton from './components/CustomButton'
import electric from '../src/assets/svg/electric.svg'
import fire from '../src/assets/svg/fire.svg'
import normal from '../src/assets/svg/normal.svg'
import water from '../src/assets/svg/water.svg'
import grass from '../src/assets/svg/grass.svg'
import CardComponent from './components/CardComponent'
import { motion ,AnimatePresence} from "framer-motion"
import { pokemonData } from './assets/data/pokemonData'
import { getData } from './utils/utils'

const buttonMap = [{type:'electric',svg:electric},{type:'fire',svg:fire},{type:'normal',svg:normal},{type:'water',svg:water},{type:'grass',svg:grass}]

function App() {
   

    
    const [type,setType] = useState(null)
    const [ username,setUsername] = useState(null)
    const [userLevel,setUserLevel] = useState(0)
    const [userData,setUserData] = useState(null)
    const [loading,setLoading] = useState(false)


    const fetchData = async () =>{
      try {
        setLoading(true)
        const {data,score}= await getData(username)
        setLoading(false)
        setUserLevel(score)
        setUserData(data)
        setType(buttonMap[0].type)
        console.log(data)

      } catch (error) {
        console.log(error)
      }
    }

   
   
  


  return (
    <div className=' bg-slate-600 h-screen'>
      <div className='flex justify-center py-5'>
        <SearchBar username={username} setUsername={setUsername} onClick={fetchData}/>
      </div>
       {
        loading ?
        <div className='text-2xl py-5  text-center text-white'>loading...</div>
        :
        <></>
       }
       {
        username != null ?
        <div className='text-2xl py-5  text-center font-bold text-white'>
          {username}
        </div>
        :
        <></>
       }
      {
        userData != null ?
         <div className='flex flex-row space-x-4 justify-center'>
        <ProgressBar name={`Easy (${userData.easySolved}/${userData.totalEasy})`} value={(userData.easySolved/userData.totalEasy)*100}/>
        <ProgressBar name ={`Medium (${userData.mediumSolved}/${userData.totalMedium})`} value={(userData.mediumSolved/userData.totalMedium)*100}/>
        <ProgressBar name={`Hard (${userData.hardSolved}/${userData.totalHard})`} value={(userData.hardSolved/userData.totalHard)*100}/>
      </div>
      :
      <></>
      }
      <div className='h-[150px]'></div>
      <div className='flex justify-evenly'>
        {
          buttonMap.map((data,i)=>(
            <CustomButton key={i} onclick={()=>{setType(data.type)}} type={data.type} svg={data.svg}/>
          ))
        }
      </div>

      <div className='h-[100px]'></div>

      <div className='flex justify-center'>
        {
          type != null ?
            <FadeInOut type={type}>
              <CardComponent name={pokemonData[type][userLevel].name} img={pokemonData[type][userLevel].img}/>
            </FadeInOut>
            :
            <></>
        }
       
      </div>

      
      

    </div>
  )
}

const FadeInOut = ({ type, children }) => {
  return (
    <AnimatePresence>
        <motion.div
         key={type}
          initial={{ opacity: 0 , rotate:-360 }}
          animate={{ opacity: 1, rotate:0 }}
          exit={{ opacity: 0 , rotate:360 }}
          style={{width:'100px',height:'100px',background:'pink'}}
        >
          {children}
        </motion.div>
    </AnimatePresence>
  );
};

export default App
