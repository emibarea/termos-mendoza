import Container from "@/components/ui/conteiner";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("8afbc57a-ae4d-4a9a-8a07-056aa8046512");
  return (
    <Container>
      <div className="spcae-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 xm:px-6 lg:px-8">
          <ProductList title="Productos Disponibles" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
