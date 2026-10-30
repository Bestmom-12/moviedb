// import { useEffect, useState } from "react";
// import NetflixBannerLogo from "../../assets/image/logo.png";
// import { Info, Play } from "lucide-react";
// import styles from "./Banner.module.css";
// import { movieInstance } from "../../Utility/MovieInstance";
// import requests from "../../Utility/requestUrls";

// const BANNER_BASE = "https://image.tmdb.org/t/p/original";

// function Banner() {
//   const [bannerImage, setBannerImage] = useState(null);

//   useEffect(() => {
//     async function fetchBannerImage() {
//       try {
//         const response = await movieInstance.get(
//           requests.fetchNetflixOriginals
//         );

//         const results = response.data.results;
//         console.log("API results:", results);

//         const candidates = results.filter((item) => item.backdrop_path);

//         if (candidates.length > 0) {
//           const randomIndex = Math.floor(Math.random() * candidates.length);
//           setBannerImage(candidates[randomIndex]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch banner:", error);
//       }
//     }

//     fetchBannerImage();
//   }, []);

//   return (
//     <div
//       className={styles.banner}
//       style={
//         bannerImage?.backdrop_path
//           ? {
//               backgroundSize: "cover",
//               backgroundImage: `url("${BANNER_BASE}${bannerImage.backdrop_path}")`,
//             }
//           : undefined
//       }
//     >
//       <div className={styles.contents}>
//         <img
//           className={styles.logoImg}
//           src={NetflixBannerLogo}
//           alt="Netflix logo"
//         />

//         <h1 className={styles.title}>
//           {bannerImage?.name || bannerImage?.title || "Loading..."}
//         </h1>

//         <p className={styles.description}>
//           {bannerImage?.overview || ""}
//         </p>

//         <div className={styles.buttonContainer}>
//           <button type="button" className={styles.button}>
//             <Play size={24} fill="currentColor" />
//             Play
//           </button>

//           <button
//             type="button"
//             className={`${styles.button} ${styles.secondaryButton}`}
//           >
//             <Info size={24} />
//             More info
//           </button>
//         </div>
//       </div>

//       <div className={styles.fadeBottom} />
//     </div>
//   );
// }

// export default Banner;







import { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Info, Play } from "lucide-react";
import styles from "./Banner.module.css";
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await movieInstance.get(
        requests.fetchNetflixOriginals
      );

      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }

    fetchBannerImage();
  }, []);
 function truncate(str,n){
  return str?.length>n ? str.substr(0,n-1)+"..." : str
 }
 
  return (
    <div
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: bannerImage?.backdrop_path
          ? `url("${BANNER_BASE}${bannerImage.backdrop_path}")`
          : undefined,
      }}
    >
      <div className={styles.contents}>
        <img
          className={styles.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix logo"
        />

        <h1 className={styles.title}>{bannerImage?.original_name}</h1>
<h1 className={styles.description}>
  {truncate(bannerImage?.overview,120)}
</h1>
        {/* <p className={styles.description}>
          Shondaland's Emmy-winning series brings Julia Quinn's novels
          to life, as eight siblings seek their perfect match amid
          London's scandals and stories.
        </p> */}

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.button}>
            <Play size={24} fill="currentColor" />
            Play
          </button>

          <button
            type="button"
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            <Info size={24} />
            More info
          </button>
        </div>
      </div>

      <div className={styles.fadeBottom} />
    </div>
  );
}

export default Banner;


// import { Info Play} from 'lucide-react'
// import styles from './Banner.module.css'

// function Banner() {
//   return (
//     <div className={styles.banner}>
//       <div className={styles.contents}>
//         {/* netflix image */}
//         <img className={styles.logoImg} src={NetflixBannerLogo} alt="Netflix logo" />

//         {/* title */}
// <h1>Bridgerton</h1>
//         {/* description */}
// <h1 className={styles.description}>
//     shondaland's Emmy-winning series brings Julia Quinn's novels
//     to life,
//     as eight sibilings seek their perfect match amid London's
//     scandals and 
//     stories.
// </h1>
//         {/* buttons */}
//         <div className={styles.buttonContainer}>
//             <button className={styles.button}>
//                 <play size={30}/>
//                 Play
//                 </button>
//             <button >
//                 <Info size={30}/>
//                 My list
//                 </button>
//         </div>
//       </div>
//       {/* fading */}
//       <div className={styles.fadeBottom}>

//       </div>
//     </div>
//   );
// }

// export default Banner;
