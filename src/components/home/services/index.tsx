import { HomeProps } from "@/utils/types/home";
import styles from "./styles.module.scss";
import Image from "next/image";

const Services = ({ object }: HomeProps) => {
  return (
    <>
      <section className={styles.containerAbout} id="servicos">
        <article className={styles.innerAbout}>
          <h1 className={styles.title}>Sobre</h1>
          <p>{object.metadata.about.description}</p>
        </article>

        <div className={styles.bannerAbout}>
          <Image
            className={styles.imageAbout}
            alt="Imagem ilustrativa sobre a empresa"
            quality={100}
            fill
            src={object.metadata.banner.url}
            sizes="(max-width: 480px) 10vw, (max-width: 1024px) 75vw, 60vw"
          />
        </div>
      </section>

      <h2 className={styles.servicesTitle}>Conheça nossos serviços</h2>

      <section className={styles.services}>
        {object.metadata.services.map((service) => (
          <article key={service.description} className={styles.service}>
            <div className={styles.innerService}>
              <Image
                className={styles.imageService}
                alt="Imagem ilustrativa sobre a empresa"
                quality={100}
                fill
                src={service.image.url}
                sizes="(max-width: 480px) 10vw, (max-width: 1024px) 75vw, 60vw"
              />
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Services;
