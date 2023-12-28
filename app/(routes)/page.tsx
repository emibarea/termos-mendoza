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
  data.reverse();
  return (
    <Container>
      <div className="mt-[80px]">
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
            src="https://media.discordapp.net/attachments/1087185625658167420/1186785110511591515/WhatsApp_Image_2023-12-19_at_18.35.27.jpeg?ex=659482c3&is=65820dc3&hm=043ba6b51c55753bb52ee41b4b404d812812d6ff62008b64f6c9d0168a22be6f&=&format=webp&width=459&height=459"
          />
          <SocialMedia />
        </div>
      </div>
    </Container>
  );
};
export default HomePage;
