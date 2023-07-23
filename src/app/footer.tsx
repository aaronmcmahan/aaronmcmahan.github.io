export default function Footer() {
    return (
        <footer className="pt-5 pb-10 grid gap-3 sm:grid-cols-2">
            <div className="text-xs font-semibold text-gray-500 order-2 sm:order-1 ">
                © {new Date().getFullYear()}
            </div>
            <div className="text-xs font-semibold text-gray-500 order-1 sm:order-2">
                <ul className="flex sm:justify-end gap-5">
                    <li>
                        <a className="hover:text-gray-500" href="https://www.linkedin.com/in/aaronmcmahan/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="https://github.com/aaronmcmahan/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}