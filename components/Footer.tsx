export default function Footer() {
  return (
    <footer className="p-12 md:p-24 bg-black text-white relative overflow-hidden">
      <div className="flex flex-col h-full justify-between gap-24">
        <div>
          <p className="font-mono text-neutral-400 mb-4">CONTACT</p>

          <a
            href="mailto:ndrurei@gmail.com"
            className="text-[8vw] leading-none tracking-tighter hover:text-neutral-300 transition-colors cursor-pointer inline-block"
          >
            Let's Work <br /> Together.
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/20 pt-8 font-mono text-sm text-neutral-400">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a
              href="https://www.linkedin.com/in/andrew-reinhart-silalahi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>

            <a
              href="https://www.instagram.com/dru.rei/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              INSTAGRAM
            </a>

            <a
              href="https://github.com/Yochiyuu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
          </div>

          <div className="text-right">
            <a
              href="mailto:ndrurei@gmail.com"
              className="text-white hover:underline"
            >
              NDRUREI@GMAIL.COM
            </a>
            <p className="mt-1">© 2026 ANDREW R. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
