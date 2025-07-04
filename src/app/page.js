import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <main className="flex flex-col gap-8">
        <button className="dark:gray-700 text-forground px-4 py-2 rounded">
          <Link href="login">Login</Link>
        </button>
      </main>
    </div>
  );
}
