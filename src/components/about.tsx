import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        About Me
      </h2>
      <div className="mb-12 flex justify-center">
        <Image
          src="/faiz-shaikh.jpg"
          alt="Faiz Shaikh"
          width={300}
          height={300}
          className="rounded-full object-cover"
        />
      </div>
      <div className="grid gap-8">
        <Card className="mx-auto w-full max-w-5xl">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I am a skilled Full-Stack Web Developer specialized in developing fully responsive
              websites and web apps that meet industry standards. With expertise in Next.js,
              React.js and TypeScript, I efficiently create robust web apps. My problem-solving
              skills enable me to tackle challenges effectively, ensuring optimal solutions for
              complex issues.
            </p>
          </CardContent>
        </Card>
        <Card className="mx-auto w-full max-w-5xl">
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
    </section>
  );
};
