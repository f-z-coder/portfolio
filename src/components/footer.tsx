import Link from 'next/link'
import { GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react'

export const Footer=()=> {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2023 Faiz Shaikh. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="https://github.com/f-z-coder" target="_blank" rel="noopener noreferrer">
            <GithubIcon className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/f-z-coder/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon className="h-5 w-5" />
          </Link>
          <Link href="https://x.com/fz_coder" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}