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
        <div className="flex gap-[60px]">
          {/*Фильтрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Списко товаров*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/*<ProductCard*/}
              {/*  id={1}*/}
              {/*  name="Чизбургер-пицца"*/}
              {/*  price={550}*/}
              {/*  imageUrl="https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif"*/}
              {/*/>*/}
              <ProductsGroupList
                title="Пиццы"
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
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/019a109fe01672189d029a725ba99705.avif',
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
