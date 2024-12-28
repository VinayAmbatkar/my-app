'use client'

import { SocialLinks } from './social-links'

export function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/95" />

      <div className="relative container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Vinay Ambatkar</h3>
            <p className="text-muted-foreground max-w-md">
              Building digital experiences with modern web technologies. 
              Let&apos;s create something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect with me</h4>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Developed By Vinay Ambatkar 💖
            </p>
            <nav className="flex gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Thanks for Visiting My Portfolio
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {/* Add additional links if needed */}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
