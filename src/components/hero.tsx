import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Hero=()=> {
  return (
    <section id="home" className="container flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        Faiz Shaikh
      </h1>
      <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
        Full-Stack Web Developer
      </p>
      <p className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        I specialize in creating responsive, industry-standard web applications with a focus on elegant user experiences using Next.js, React.js, and TypeScript.
      </p>
      <Button className="mt-8" size="lg" asChild>
        <Link href="#projects">View My Work</Link>
      </Button>
    </section>
  )
}