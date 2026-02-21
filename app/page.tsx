import Image from "next/image";
import Link from "next/link";
import { FileText, Shield, Scale } from "lucide-react";
import { Starfield } from "@/components/Starfield";

const LOGO_URL = "https://cdn.fazersocial.com/logo.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <Starfield />
      <div className="relative z-10 flex flex-col flex-1">
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 sm:py-24">
        <div className="w-full max-w-2xl flex flex-col items-center text-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8">
            <Image
              src={LOGO_URL}
              alt="Fazer"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 192px, 224px"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Fazer is coming soon!
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl mb-4">
            Connect with your favorite artists and their communities, discover
            new music, and share your own creations.
          </p>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl">
            Fazer is a social network for the music and art you love, and the
            people who make it.
          </p>
        </div>
        <button className="open-zammad-chat">
          Chat with us
        </button>
      </main>

      <footer className="border-t border-slate-700/50 py-6 px-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <Link
            href="/community-guidelines"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <FileText className="size-4 shrink-0" aria-hidden />
            Community Guidelines
          </Link>
          <Link
            href="/privacy"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Shield className="size-4 shrink-0" aria-hidden />
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <Scale className="size-4 shrink-0" aria-hidden />
            Terms of Service
          </Link>
        </nav>
      </footer>
      </div>
    </div>
  );
}
