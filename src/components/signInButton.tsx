'use client'

import { Button } from "~/components/ui/button";
import { signIn } from "next-auth/react"

type SignInButtonProps = {
  provider: 'Google' | 'Github'
}

export function SignInButton({ provider } : SignInButtonProps) {
  return (
    <Button onClick={() => signIn(provider.toLowerCase())}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img 
        src={`https://authjs.dev/img/providers/${provider.toLowerCase()}.svg`}
        alt={`Sign in with ${provider}`}
        height={24}
        width={24}
        loading="lazy"
        className="pr-1"
      />
      Sign in with {provider}
    </Button>
  );
}