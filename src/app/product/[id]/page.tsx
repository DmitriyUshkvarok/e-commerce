import ProductDetails from '@/src/Components/ProductDetails/ProductDetails';

interface DynamicProductPageProps {
  params: {
    id: string;
  };
}

const DynamicProductPage = ({ params: { id } }: DynamicProductPageProps) => {
  return <ProductDetails productId={id} />;
};

export default DynamicProductPage;
