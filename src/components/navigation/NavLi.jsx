import Link from "next/link"

export default function NavLi({children, href}){
    return (
        <li className="py-2 px-4 rounded-lg font-medium text-gray-700 dark:text-gray-200 hover:bg-[#1B3B99] hover:text-white dark:hover:bg-white dark:hover:text-[#1B3B99] transition">
            <Link href={href}>{children}</Link>
        </li>
    )
}
