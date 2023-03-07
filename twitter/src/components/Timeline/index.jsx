import React, { useContext } from 'react'
import styles from "./styles.module.css"
import { PublishTweet } from '../PublishTweet'
import { Tweet } from '../Tweet'
import { useApi } from '../../hooks/useApi'
import { LoadingTweets } from '../LoadingTweets'
import { TwContext } from '../../context/TweetsContext'
import { getRandomNumber } from '../../utilities/getRandomNumber'

export const Timeline = () => {
  const { data, error, loading } = useApi(`${import.meta.env.VITE_API}/10`)
  const value = useContext(TwContext)
  return (
    <div className={styles.timeline} >
      <PublishTweet />
      {
        value && 
          value.map(tweet =>       
        <Tweet username={tweet.username} name={tweet.name}>
          <p>{tweet.tweet}</p>
          <img src="https://picsum.photos/540" alt="Img" />
        </Tweet> )
      }
      {
        data && 
          data.map(tweet => {
             const random = getRandomNumber() 
            return(
              <Tweet username={tweet.author.split(" ")[0]} name={tweet.author}>
                <p>{tweet.quote}</p>
                {
                  random > 3 && <img src="https://picsum.photos/540" alt="Img" />
                }
              </Tweet>
            )       
          }
        )
      }
      {
        loading && <LoadingTweets />
      }
    </div>
  ) 



//   const { data, error, loading } = useApi(`${import.meta.env.VITE_API}/10`)
//   const value =  useContext(TwContext)
// console.log(value)
//     return (
//       <div className={styles.timeline} >
//        <PublishTweet/>
//        {//poner el estado en null
//       data&&
//       data.map(tweet=>
//         <Tweet username={tweet.author.split("")[0]} name={tweet.author}>
//         <p>{tweet.quote}</p>
//         <img src="https://picsum.photos/100" alt="Profile pic" className="img-default" />

//       </Tweet>)
   
//        }{
//         loading && <LoadingTweets/>
//        }
     
//       </div>
//     )
  }
  