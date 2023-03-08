import { CardProduct } from "./CardProduct";
import { products } from "./products";
import { GalleryContainer, TitleGallery } from "./styles";

export function Gallery() {
  return (
    <>
      <TitleGallery>Nossos cafés</TitleGallery>
      <GalleryContainer>
        {products?.map((product) => {
          return <CardProduct product={product} />;
        })}
      </GalleryContainer>
    </>
  );
}
