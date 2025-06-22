"use client"

import Image from "next/image"

interface FooterProps {
  variant?: "default" | "simple"
  companyName?: string
  showLicense?: boolean
}

export function Footer({
  variant = "default",
  companyName = "Finansų konsultantas Mantas Molotkovas",
  showLicense = true,
}: FooterProps) {
  const currentYear = new Date().getFullYear()

  if (variant === "simple") {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© {currentYear} Finansų konsultantas Mantas Molotkovas. Visos teisės saugomos.</p>
        </div>
      </footer>
    )
  }

  return (
    <footer className="relative">
      <div className="bg-gray-900/90 backdrop-blur-xl border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 border border-white/20 mr-3">
                <Image src="/logo-dark.png" alt="NM Financial Advisory" width={24} height={24} />
              </div>
              <span className="text-lg font-semibold text-white">{companyName}</span>
            </div>
            <div className="text-gray-300 text-sm text-center md:text-right">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
                {/* Contact Information */}
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-1 md:space-y-0 text-xs">
                  
                  
                  
                </div>
                {/* Copyright */}
                <div className="border-t md:border-t-0 md:border-l border-gray-600 pt-2 md:pt-0 md:pl-4">
                  © {currentYear}{" "}
                  Visos teisės saugomos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
