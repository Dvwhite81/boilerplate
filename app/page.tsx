import { Container } from '@/components';

export default async function Home() {
  return (
    <main>
      <Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
        hello from app container
      </Container>
    </main>
  );
}
