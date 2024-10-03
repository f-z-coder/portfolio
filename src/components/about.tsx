import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const About=()=> {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">About Me</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a skilled Full-Stack Web Developer specialized in developing fully responsive websites and web apps that meet industry standards. With expertise in Next.js, React.js and TypeScript, I efficiently create robust web apps. My problem-solving skills enable me to tackle challenges effectively, ensuring optimal solutions for complex issues.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">Vishwakarma Institute of Information Technology</h3>
            <p>B. Tech - Computer Engineering (2020 – 2024)</p>
            <p>CGPA: 9.45</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-12 flex justify-center">
        <Image
          src="/placeholder.svg"
          alt="Faiz Shaikh"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  )
}