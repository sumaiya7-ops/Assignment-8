import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Upgrade Your Skills Today 🚀</h1>
            <p className="py-6">Learn from Industry Experts and build your career in Web Development, Design, and more.</p>
            <Link href="/courses" className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </section>

      {/* Trending Courses / Learning Tips Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Learning Tips & Techniques</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-primary text-primary-content p-6">
            <h3 className="text-xl font-bold">Time Management</h3>
            <p>Divide your study time into Pomodoro sessions for better focus.</p>
          </div>
          <div className="card bg-secondary text-secondary-content p-6">
            <h3 className="text-xl font-bold">Active Recall</h3>
            <p>Test yourself frequently to improve memory retention.</p>
          </div>
          <div className="card bg-accent text-accent-content p-6">
            <h3 className="text-xl font-bold">Consistency</h3>
            <p>Spend at least 1 hour daily on your chosen skill.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
