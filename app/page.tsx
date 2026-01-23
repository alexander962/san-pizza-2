import { Categories, Container, Title } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-extrabold" />
        <Categories />
      </Container>
    </>
  );
}
