// import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-2 lg:px-2 py-2">

        <div className="mt-4 flex justify-center">
          <p className="text-[14px] font-medium tracking-wide text-neutral-400 dark:text-neutral-500 text-center">
            © {currentYear} Noble. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


{/* <div className="flex flex-col md:flex-row justify-between items-start gap-8"> */}
          {/* Brand */}
          // <div className="max-w-xs">
          //   <div className="flex flex-col mb-4">
          //     <span className="text-xl tracking-tight uppercase font-black tracking-[0.2em] text-neutral-900 dark:text-white">NOBLE</span>
          //     <span className="text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase mt-1">
          //       SOFTWARE ENGINEERING & SUPPLY CHAIN
          //     </span>
          //   </div>
          //   <p className="text-sm text-neutral-600 dark:text-neutral-400">
          //     Transforming operations and supply chain through data-driven
          //     decision software engineering systems.
          //   </p>
          // </div>

          {/* Quick Links */}
          // <div className="flex-1 md:flex md:justify-center">
          //   <div>
          //     <h3 className="text-sm font-semibold tracking-wide mb-4">Quick Links</h3>
          //     <div className="flex flex-col gap-2">
          //       <a
          //         href="/projects"
          //         className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          //       >
          //         Projects
          //       </a>
          //       <a
          //         href="/about"
          //         className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          //       >
          //         About
          //       </a>
          //       <a
          //         href="/blog"
          //         className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          //       >
          //         Blog
          //       </a>
          //       <a
          //         href="/contact"
          //         className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          //       >
          //         Contact
          //       </a>
          //     </div>
          //   </div>
          // </div>

          {/* Social */}
        //   <div className="flex-1 md:flex md:justify-end">
        //     <div>
        //       <h3 className="text-sm font-semibold tracking-wide mb-4 md:text-right">Connect</h3>
        //       <div className="flex gap-4 justify-end">
        //         <a
        //           href="https://github.com"
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        //           aria-label="GitHub"
        //         >
        //           <Github className="w-5 h-5" />
        //         </a>
        //         <a
        //           href="https://linkedin.com"
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        //           aria-label="LinkedIn"
        //         >
        //           <Linkedin className="w-5 h-5" />
        //         </a>
        //         <a
        //           href="https://twitter.com"
        //           target="_blank"
        //           rel="noopener noreferrer"
        //           className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        //           aria-label="Twitter"
        //         >
        //           <Twitter className="w-5 h-5" />
        //         </a>
        //         <a
        //           href="mailto:hello@datachain.com"
        //           className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
        //           aria-label="Email"
        //         >
        //           <Mail className="w-5 h-5" />
        //         </a>
        //       </div>
        //     </div>
        //   </div>
        // </div>