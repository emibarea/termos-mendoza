import Container from "@/components/ui/conteiner";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Image from "next/image";
import SocialMedia from "@/components/social-media";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  const data = [];

  for (const category of categories) {
    const { billboardId, id } = category;

    const billboardPromise = getBillboard(billboardId);
    const productsPromise = getProducts({ categoryId: id });

    const [billboardData, productData] = await Promise.all([
      billboardPromise,
      productsPromise,
    ]);

    data.push({ billboardData, productData });
  }

  return (
    <Container>
      {data.map((item, index) => (
        <div key={index} className="space-y-10 pb-10">
          <Billboard data={item.billboardData} />
          <div className="flex flex-col gap-y-8 px-4 xm:px-6 lg:px-8">
            <ProductList
              title="Productos Disponibles"
              items={item.productData}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col items-center justify-center p-2 relative">
        <Image
          className="shadow-2xl rounded-2xl"
          width={500}
          height={300}
          alt="logo"
          src="https://media.discordapp.net/attachments/1087185625658167420/1153780805487820871/DR_p_2.png"
        />
        <SocialMedia />
      </div>
    </Container>
  );
};
export default HomePage;
