import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/20 transition-all duration-300 dark:bg-black/50 dark:border-b-gray-800 px-4 py-2 flex items-center justify-between shadow-sm">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex gap-2 text-xl items-center font-bold tracking-tight transition-colors duration-300 hover:text-primary">
                    <img src="/logo-branca-housejs-fundo-transparente.svg" alt="" width="30px" height="30px"/>
                    <h1 className="text-lg">HouseJs</h1>
                </div>
                <div>
                    <p className="text-lg">Mode</p>
                </div>
            </div>
        </nav>
    );
}