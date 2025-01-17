import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useAccount } from "wagmi";
import { useState, useEffect } from "react";

const Home = () => {
  const [userAddress, setUserAddress] = useState("");

// get account hook
const { data: account, isError: accountError, isLoading: accountLoading } = useAccount();

const getCurrentUserAddress = () => {
  const currentUserAddress = account ? account.address.toString() : ""
  setUserAddress(currentUserAddress);
  console.log("Current user address: ", currentUserAddress)
} 

useEffect(() => {
  getCurrentUserAddress(),
  [account]
})

  return (
    <div className="text-[#1a1b0a] bg-[url('../public/assets/main-image-edited-sized-down.jpg')] bg-repeat  min-h-screen h-screen">
      <Head>
      <title>Gardens of Felt Zine Delights</title>
      <link rel="icon" href="https://gardens.feltzine.art/assets/favicon.jpg"/>

      <meta property="og:title" content="Gardens of Felt Zine Delights" key="ogtitle" />
      <meta property="og:description" content="Limited edition 1/1 art collection inspired by The Garden of Earthly Delights with original 3D renderings by Ty Vadovich; AI, and executive production by Mark Sabb; and Web3 development by Max Bochman" key="ogdesc" />
      <meta property="og:type" content="website" key="ogtype" />
      <meta property="og:url" content="https://gardens.feltzine.art/" key="ogurl"/>
      <meta property="og:image" content="https://gardens.feltzine.art/assets/preview.jpg" key="ogimage"/>
      <meta property="og:site_name" content="https://gardens.feltzine.art/" key="ogsitename" />

      <meta name="twitter:card" content="summary_large_image" key="twcard"/>
      <meta property="twitter:domain" content="gardens.feltzine.art" key="twdomain" />
      <meta property="twitter:url" content="https://gardens.feltzine.art/" key="twurl" />
      <meta name="twitter:title" content="Gardens of Felt Zine Delights" key="twtitle" />
      <meta name="twitter:description" content="Limited edition 1/1 art collection inspired by The Garden of Earthly Delights with original 3D renderings by Ty Vadovich; AI, and executive production by Mark Sabb; and Web3 development by Max Bochman" key="twdesc" />
      <meta name="twitter:image" content="https://gardens.feltzine.art/assets/preview.jpg" key="twimage" />
      </Head>    
      <Header />
      <main className="h-full flex flex-col flex-wrap items-center justify-center  ">
        <div className="mt-0 sm:mt-10 flex flex-col flex-wrap items-center">
          <div className=" text-center mb-10 py-8 px-4 border-[20px] border-double border-[#1a1b0a] bg-[#93814f] text-[#1a1b0a] font-bold font-gothiccc text-5xl sm:text-7xl h-fit  w-9/12 lg:w-fit flex flex-row justify-center items-center" >
            Gardens of Felt Zine Delights
          </div>
          <div className=" py-8 border-[16px] border-double border-[#1a1b0a] mt-5 sm:mt-20 bg-[#93814f] text-[#1a1b0a] h-fit w-7/12 flex flex-row flex-wrap justify-center ">
            <div className="mx-2 sm:mx-0 text-center font-gothiccc font-bold text-3xl sm:text-5xl w-fit flex flex-row justify-center " >
              Connect Wallet to Enter
            </div>
            <div className="basis-full h-0"></div>
            <Link href="/decisions">
              { userAddress === "" ? (
              <button disabled={true}  className="rounded-3xl font-bold text-xl sm:text-2xl mt-5 py-3 p-3 w-fit h-fit  flex flex-row justify-center justify-items-center border-[4px] border-solid border-[#1a1b0a] text-[#1a1b0a] bg-[#93814f]" >
                C O N N E C T
              </button>
              ) : (
              <button  disabled={false} className="rounded-3xl font-bold text-xl sm:text-2xl mt-5 py-3 p-3 w-fit h-fit  flex flex-row justify-center justify-items-center border-[4px] border-solid  border-[#1a1b0a] bg-[#1a1b0a] text-[#93814f] hover:text-[#b5572b]" >
                E N T E R
              </button>
              )}        
            </Link>
          </div> 
        </div>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
