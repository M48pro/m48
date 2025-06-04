import ThreeBackground from '../components/ThreeBackground';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      <section className="h-screen w-full fixed inset-0 z-0">
        <ThreeBackground type="particles" />
      </section>

      {/* Контент */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-96 pb-32">
        ...
      </main>
    </div>
  );
};