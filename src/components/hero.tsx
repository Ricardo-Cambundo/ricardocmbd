import { useContext } from "react";
import "../css/hero.css";
import { ScrollContext } from "@/store/context";
import motherboard from '../assets/images/motherboard.svg'
import ricardo from '../assets/images/ricardo.svg'
import space from '../assets/images/space.svg'
import chloe from '../assets/images/chloe.svg'
const Hero = () => {
  //@ts-ignore

  const { chat, setChat, setChatExpand } = useContext(ScrollContext);
  //@ts-ignore
  const { dark, setDark } = useContext(ScrollContext);
const items = [
  {
    id: '1',
    url: ricardo,
    title: "It's your boy",
    description: 'Ricardo',
    tags: ['Twilight', 'Peaks', 'Silhouette', 'Evening Sky', 'Peaceful'],
  },

  {
    id: '2',
    url: motherboard,
    title: 'I love',
    description: 'Computers',
    tags: ['Floral', 'Highlands', 'Wildflowers', 'Colorful', 'Resilience'],
  },
  {
    id: '3',
    url: space,
    title: 'I love',
    description: 'Space & Physics',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
  {
    id: '4',
    url: chloe,
    title: 'And Chloe says',
    description: 'Hi',
    tags: ['Rocky', 'Ridges', 'Contrast', 'Adventure', 'Clouds'],
  },
];
  
  return (
    <div className="heroSection" style={{color: dark && 'white' }}>
      <div className="left">
        <div className="greetings">hey there! my name's<br/> ricardo cambundo</div>
        <div className="description">
          Software developer &{" "}
          <span
            style={{ fontWeight: "600", cursor: "help" }}
            title="Computer Science"
          >
            CS
          </span>{" "}
          student
        </div>
        <div className="stat" style={{color: dark && '#c9c9c9ff'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          </svg>{" "}
          Huntsville, TX, USA
        </div>
        <div  className="description" style={{ color: dark ? '#c9c9c9ff' : 'grey' }}>
          Driven by curiosity and code.<br></br> Join me as I contribute to the
          digital world
        </div>

        <div className="stat1" style={{cursor: 'pointer'}} onClick={() => {
          setChat(true)
          setChatExpand(true)
        }}>
          For Q&A, start a chat with CMBD support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-down-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 12.5a.5.5 0 0 1-.5.5H1.5A1.5 1.5 0 0 1 0 11.5v-10A1.5 1.5 0 0 1 1.5 0h10A1.5 1.5 0 0 1 13 1.5v6.636a.5.5 0 0 1-1 0V1.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h6.636a.5.5 0 0 1 .5.5"
            />
            <path
              fillRule="evenodd"
              d="M16 15.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L6.146 6.854a.5.5 0 1 1 .708-.708L15 14.293V10.5a.5.5 0 0 1 1 0z"
            />
          </svg>
        </div>

        <div className="contacts">
            <div style={{color: dark && 'white'}} className="resume" onClick={() => {
                window.open('https://drive.google.com/file/d/1eIsH-NYiKXEGzGKJF-Z49Lqs0uPWappY/view?usp=sharing')
            }}>
                Resume <i className="bi bi-file-earmark-text"></i>
            </div>
            <i onClick={() => {
                window.open('https://linkedin.com/in/ricardo-cambundo-bab2a0210')
            }} className="bi bi-linkedin" style={{color: '#bebebe', cursor: 'pointer'}}></i>
            <i onClick={() => {
                window.open('https://github.com/Ricardo-Cambundo')
            }} className="bi bi-github" style={{color: '#bebebe', cursor: 'pointer'}}></i>
            <i onClick={() => {
                window.open('mailto:ricardocmbd@gmail.com?subject=Hello my name is &body=I come from your portfolio website, ')
            }} className="bi bi-envelope" style={{color: '#bebebe', cursor: 'pointer'}}></i>
        </div>
      </div>
      <div className="right">
         <div className='group flex justify-center gap-2 w-[100%] mx-auto mb-10 mt-3'>
  {items.map((item, i: number) => {
    return (
      <article className='group/article relative w-full rounded-xl overflow-hidden not-[&:hover]:group-hover:w-[20%] [&:not(:focus-within):not(:hover)]:group-focus-within:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-linear-to-t before:from-black/50 before:transition-opacity before:opacity-0 hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 not-[&:hover]:group-hover:after:opacity-100 [&:not(:focus-within):not(:hover)]:group-focus-within:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur-sm after:rounded-lg after:transition-all focus-within:ring-3 focus-within:ring-indigo-300'>
        <a
          className='absolute inset-0 text-white z-10 p-3 flex flex-col justify-end'
          href='#0'
        >
          <h1 style={{fontSize: 18}} className='text-xl font-medium whitespace-nowrap truncate opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300'>
            {item?.title}
          </h1>
          <span style={{fontSize: 20, fontWeight: '700'}} className='text-3xl font-medium whitespace-nowrap truncate opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500'>
            {item?.description}
          </span>
        </a>
        <img
          className='object-cover h-78 w-full'
          src={item?.url}
          width='960'
          height='480'
          alt='Image 01'
        />
      </article>
    );
  })}
</div>
      </div>
    </div>
  );
};
export default Hero;
