import Reveal from "../motion/reveal"

export default function AboutMe(){
    return(
        <section className="h-[400] w-[80%] flex justify-between items-center">
            <Reveal delayProp={0.2} className="w-[40%]">
              <article >
                <h1 className="header">About me</h1>
                <p className="text-justify font-light">I'm a Web Developer with a strong passion for crafting simple but engaging web experience, particularly on the front end. I enjoy turning ideas into working websites, and I'm always set on finishing projects well using modern tools for great results. </p>
            </article>  
            </Reveal>
            
            <Reveal delayProp={0.2} className="w-[40%]">
              <figure>
                <h1 className="header">Skills</h1>
            </figure>  
            </Reveal>
            
        </section>
    )
}