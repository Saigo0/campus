import Link from "next/link"

export default function NavLi({ children, href }){
    return (
        <li className="rounded-lg font-medium text-sm md:text-base text-gray-700 dark:text-gray-200 hover:bg-[#1B3B99] hover:text-white dark:hover:bg-white dark:hover:text-[#1B3B99] transition text-center whitespace-nowrap">
            <Link href={href} className="block w-full py-2 px-3 md:px-4">
                {children}
            </Link>
        </li>
    )
}