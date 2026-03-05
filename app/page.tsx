import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductCard } from '@/components/shared/product-card';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title size="lg" text="Все пиццы" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Списко товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Завтрак"
                categoryId={2}
                items={[
                  {
                    id: 6,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
