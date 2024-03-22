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
          <h2 className=" text-center font-groot-two  my-2 text-lg text-white">
            MinionSol, where the memes are as plentiful as bananas in a minion's
            lair! We're not just any old crypto meme coin – we're your loyal
            companions on the journey to meme greatness. With hearts as big as
            Gru's ambitions and a community as tight-knit as a group hug from a
            bunch of minions, you'll feel right at home with us.
          </h2>
        </div>

     

        <div className=" flex justify-center gap-4 items-center py-4">
          <a
            href="/"
            className="font-groot-one text-xl uppercase text-[#f4f903] bg-[#3db335] border-2 border-[#000000] py-1 px-4 rounded-2xl"
          >
            DexTools
          </a>
          <a
            href="https://t.me/sheikpepe"
            target="_blank"
            className="font-groot-one text-xl uppercase  bg-[#3db335] border-2 border-[#000000] text-[#f4f903] py-1 px-4 rounded-2xl"
          >
            Telegram
          </a>
          <a
            href="https://twitter.com/SheikPepee"
            target="_blank"
            className="font-groot-one text-xl uppercase  bg-[#3db335] border-2 border-[#000000] py-1 px-4 rounded-2xl text-[#f4f903]"
          >
            Twitter
          </a>
        </div>

        <a
          href="#"
          target="_blank"
          className=" flex justify-center font-groot-two text-xs sm:text-xl text-center my-3 text-white "
        >
          CONTRACT: AiBdJXqhDVjPvhDZcykjMwdhJaNKuqE4rSbamMqq31Nq
        </a>
      </div>
    </section>
  );
}

export default Hero;
