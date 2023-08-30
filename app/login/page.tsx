"use client"
import { Metadata } from "next"


import { cn } from "@/lib/utils"

import { UserAuthForm } from "@/components/ui/userAuthan_signup"
import Link from "next/link"
import UserAuthForm_login from "@/components/userauthan_login"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {

  
    
  return (
    <>
      <div className="md:hidden">
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
     
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
               Login To <strong>WA</strong>
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to Login
              </p>
            </div>
            <UserAuthForm_login />
            <div className="mb-6">
              <h3>Don't have an Account? <span className="text-blue-900">
                <Link href="/signup">
                  Sign Up
                </Link>
              </span> </h3>
            </div>
          </div>
       
        </div>
      </div>
    </>
  )
}