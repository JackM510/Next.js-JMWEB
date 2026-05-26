export default function Footer() {
    return (
        <footer className="bg-[var(--dark-azure)] text-light pt-8 pb-4">
            <div className="w-full px-8 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-1 [&_a]:hover:opacity-80 transition-opacity">
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    {/* Developed With */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Developed With</h4>
                        <div className="flex gap-4 [&_img]:hover:opacity-80 transition-opacity">
                            <img src="assets/icons/nextdotjs.svg" className="h-8"/>
                            <img src="assets/icons/tailwindcss.svg" className="h-8"/>
                            <img src="assets/icons/typescript.svg" className="h-8"/>
                        </div>
                    </div>
                    {/* Copyright */}
                    <div className="col-span-full text-center">
                        <p className="text-sm">© 2026 JM Web. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}