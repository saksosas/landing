"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface InternalHeaderProps {
  title?: string
  showBackButton?: boolean
  backButtonText?: string
  backButtonHref?: string
  companyName?: string
}

export function InternalHeader({
  title = "Mantas Molotkovas",
  showBackButton = true,
  backButtonText = "Atgal",
  backButtonHref = "/",
  companyName = "Mantas Molotkovas",
}: InternalHeaderProps) {
  return (
    <nav className="bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo-light.png" alt="NM Financial Advisory" width={40} height={40} className="mr-3" />
            <span className="text-xl font-bold text-gray-900">{companyName}</span>
          </Link>
          {showBackButton && (
            <Link href={backButtonHref}>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {backButtonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
