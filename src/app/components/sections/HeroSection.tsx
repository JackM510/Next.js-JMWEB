import HeroButton from "../ui/HeroButton";

export default function Hero() {
    return (
        <section id="hero">
            <div className="relative w-full h-[calc(100vh-70px)]">
                <img src="assets/images/hero.png" className="absolute w-full h-full object-cover z-0"/>
                

                <div className="relative 
                flex
                flex-col
                h-full
                items-center
                justify-center
                ">
                    <h1 className="text-white text-5xl font-bold">Looking to launch a website or need online support?</h1>
                    <h1 className="text-[var(--azure)] text-5xl font-bold">Web got you covered</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mt-12 gap-x-24 gap-y-12">
                        <HeroButton 
                        text="example text"
                        link="#services"
                        imgSrc="assets/icons/typescript.svg"
                        imgAlt="example example"
                        />
                        <HeroButton 
                        text="example text"
                        link="#services"
                        imgSrc="assets/icons/typescript.svg"
                        imgAlt="example example"
                        />
                        <HeroButton 
                        text="example text"
                        link="#services"
                        imgSrc="assets/icons/typescript.svg"
                        imgAlt="example example"
                        />
                        
                    </div>
            
                </div>
            </div>
        </section>
    );
}