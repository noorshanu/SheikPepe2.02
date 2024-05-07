import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  relative ">
      <div className="container-wrapper">
        <div className="relative z-50">
          <div className=" flex justify-center flex-col items-center ">
            <div className=" w-full flex justify-between gap-4 items-center">
              <img
                src="images/heromain.png"
                alt=""
                className=" h-[300px] mx-auto "
              />
            </div>
          </div>
        </div>

        <div className=" max-w-3xl mx-auto ">
          <h1 className="text-center font-groot-two  my-2 text-xl text-white">
            Welcome, weary traveler, to the realm of SheikWif, the sovereign
            ruler of the Solana blockchain!
          </h1>
          <h2 className=" text-center font-groot-two  my-2 text-base text-white">
            In this majestic kingdom, where the sands of the desert meet the
            vast expanse of the digital frontier, SheikWif reigns supreme. With
            zero buy and sell taxes, the path to prosperity is as smooth as a
            camel's glide across the dunes. But what sets SheikWif apart from
            the rest of the meme coin horde? It's simple, dear friends. As
            SheikWif generates memes faster than you can say "hump day," the
            value of our coin skyrockets to heights unseen.
          </h2>
        </div>

        <div className=" flex justify-center gap-4 items-center py-4">
          <a
            href="#" target="_blank"
            className="font-groot-one text-xl uppercase text-[#f4f903] bg-[#3db335] border-2 border-[#000000] py-1 px-4 rounded-2xl"
          >
            DexTools
          </a>
          <a
            href="https://t.me/sheikwifs"
            target="_blank"
            className="font-groot-one text-xl uppercase  bg-[#3db335] border-2 border-[#000000] text-[#f4f903] py-1 px-4 rounded-2xl"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com/SheikhWIF"
            target="_blank"
            className="font-groot-one text-xl uppercase  bg-[#3db335] border-2 border-[#000000] py-1 px-4 rounded-2xl text-[#f4f903]"
          >
            Twitter
          </a>
        </div>

        <a
          href="NBfgv5WgFu4"
          target="_blank"
          className=" flex justify-center font-groot-two text-xs sm:text-xl text-center my-3 text-white "
        >
          CONTRACT: gfhgfhfhjhvghjbgjhbhbjhbhjbhj
        </a>
      </div>
    </section>
  );
}

export default Hero;
