export default function Hero() {
    return (
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
                    <a href="#web-development" className="flex justify-center items-center p-4 hover:opacity-80 border-b border-[1px] border-[var(--azure)]">
                        <img src="assets/icons/typescript.svg" className="h-8 me-2"/>
                        <span>Launch Website</span>
                    </a>
                    <a href="#web-development" className="flex justify-center items-center p-4 hover:opacity-80 border-b border-[1px] border-[var(--azure)]">
                        <img src="assets/icons/typescript.svg" className="h-8 me-2"/>
                        <span>Web Development</span>
                    </a>
                    
                </div>
        
            </div>
            
           
        
        </div>
    );
}