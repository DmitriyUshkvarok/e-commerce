import ProductDetails from '@/src/Components/ProductDetails/ProductDetails';

interface DynamicProductPageProps {
  params: {
    id: number;
  };
}

const DynamicProductPage = ({ params: { id } }: DynamicProductPageProps) => {
  return <ProductDetails productId={id} />;
};

export default DynamicProductPage;
