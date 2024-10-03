import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, MailIcon, PhoneIcon, ExternalLinkIcon, TwitterIcon } from "lucide-react";

const contactInfo = [
  {
    icon: <MailIcon className="h-6 w-6" />,
    label: "Email",
    value: "faizshaikh72740@gmail.com",
    href: "mailto:faizshaikh72740@gmail.com",
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    label: "Phone",
    value: "+91 9112677274",
    href: "tel:+919112677274",
  },
  {
    icon: <LinkedinIcon className="h-6 w-6" />,
    label: "LinkedIn",
    value: "Faiz Shaikh",
    href: "https://www.linkedin.com/in/f-z-coder/",
  },

  {
    icon: <TwitterIcon className="h-6 w-6" />,
    label: "Twitter",
    value: "@fz_coder",
    href: "https://x.com/fz_coder",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="container py-12 sm:py-24">
      <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Get in Touch
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {contactInfo.map((info, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {info.icon}
                {info.label}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-grow flex-col justify-between">
              <CardDescription className="text-lg">{info.value}</CardDescription>
              <Button asChild variant="outline" className="mt-4">
                <Link href={info.href} target="_blank" rel="noopener noreferrer">
                  Connect
                  <ExternalLinkIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <h3 className="mb-4 text-2xl font-semibold">{"Let's Build Something Amazing Together"}</h3>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          {`I'm always open to discussing new projects, creative ideas, or opportunities to be part of
          your visions. Feel free to reach out through any of the channels above.`}
        </p>
        <Button asChild size="lg">
          <Link href="mailto:faizshaikh72740@gmail.com">Send a Message</Link>
        </Button>
      </div>
    </section>
  );
};
