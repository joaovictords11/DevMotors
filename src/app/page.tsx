import Container from "@/components/container";
import Hero from "@/components/hero";
import Footer from "@/components/home/footer";
import Services from "@/components/home/services";
import Submenu from "@/components/home/submenu";
import { getDataHome, getSubMenu } from "@/utils/actions/get-data";
import { HomeProps } from "@/utils/types/home";
import { MenuProps } from "@/utils/types/menu";
import { Phone } from "lucide-react";

export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();

  console.log(menu);

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}

      <Hero
        heading={object.metadata.heading}
        bannerUrl={object.metadata.banner.url}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        icon={<Phone size={24} color="#fff" />}
      />

      <Container>
        <Services object={object} />

        <Footer object={object} />
      </Container>
    </main>
  );
}
