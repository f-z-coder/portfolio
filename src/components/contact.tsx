'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from 'lucide-react'

export const Contact=()=> {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Contact Me</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label htmlFor="name">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="message">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <MailIcon className="h-5 w-5" />
              <span>faizsh aikh72740@gm ail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5" />
              <span>9112677274</span>
            </div>
            <div className="flex items-center space-x-2">
              <LinkedinIcon className="h-5 w-5" />
              <a href="https://linkedin.com/in/faiz-shaikh713" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/faiz-shaikh713
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <GithubIcon className="h-5 w-5" />
              <a href="https://github.com/F-z-Coder" target="_blank" rel="noopener noreferrer">
                F-z-Coder
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
