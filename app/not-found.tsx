import Link from 'next/link'
import { headers } from 'next/headers'

export default async function NotFound() {
    const headersList = await headers()
    const domain = headersList.get('host')
    return (
        <div>
            <h2>Page not found.</h2>
            <p>Could not find requested resource for {domain}.</p>
            <p>
                View <Link href="/">Go home</Link>
            </p>
        </div>
    )
}