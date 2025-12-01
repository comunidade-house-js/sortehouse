import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex-1">
        <section className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center md:px-6 md:py-32">
          <div className=" animate-fade-in mb-8 flex h-24 w-24 items-center justify-center transition-all duration-300 hover:scale-110 hover:md:mb-12 md:h-32 md:w-32">
            <Image
            src="/logo-branca-housejs-fundo-transparente.svg"
            alt="Logo HouseJs"
            width={100}
            height={100}
            className="text-primary w-100 h-100"
            priority
            />
          </div>
          <h1 className="animate-fade-in-up mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Bem Vindo a HouseJS!</h1>
          <p className="animate-fade-in-up mb-8 max-w-[700px] text-lg text-muted-foreground [animation-delay:100ms]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium eos quisquam doloribus repellendus, velit error, similique sit cumque beatae veritatis suscipit libero! A, beatae optio? Soluta illum labore nesciunt incidunt.</p>
          <div className="animate-fade-in-up flex flex-col gap-4 sm:flex-row [animation-delay:200ms]">
            <Button 
            size="lg" 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >Sobre a HouseJS</Button>
            <Button
            size="lg"
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >Contato</Button>
          </div>
        </section>

        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card 
                    key={i}
                    className="group cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                      src="/logo-branca-housejs-fundo-transparente.svg"
                      alt={`Evento ${i}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Evento {i}</CardTitle>
                      <CardDescription>Descrição do evento</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Mais detalhes sobre o evento</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                      variant="secondary"
                      className="w-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >Ver Mais</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
